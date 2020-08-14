const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const {findUser} = require('../../controllers/queries/userQueries');
const {createRefreshToken, findRefreshToken, updateRefreshToken} = require('../../controllers/queries/refreshTokenQueries');
const {comparePasswords, signTokens} = require('../../utils');
const {FAKE_ENV: {JWT_SECRET}} = require('../../constants');

const login = new LocalStrategy(
    {
        usernameField: 'email',
        passReqToCallback: true
    },
    async (req, email, password, done) => {
        try {
            const user = await findUser({email});
            await comparePasswords(password, user.password);
            const tokensPair = await signTokens(user);
            await createRefreshToken({value: tokensPair.refreshToken, userId: user.id});
            done(null, user, tokensPair);
        } catch (e) {
            done(e, null);
        }
    }
);

const refreshTokenLogin = new JwtStrategy(
    {
        jwtFromRequest: ExtractJWT.fromBodyField('refreshToken'),
        secretOrKey: JWT_SECRET,
        passReqToCallback: true
    },
    async (req, payload, done) => {
        try {
            const {user: {id}} = payload;
            const {body: {refreshToken: value}} = req;
            await findRefreshToken({value});
            const user = await findUser({id});
            const tokensPair = await signTokens(user);
            await updateRefreshToken({value: tokensPair.refreshToken}, {userId: id});
            done(null, user, tokensPair);
        } catch (e) {
            done(e, null);
        }
    }
);

const refreshTokens = new JwtStrategy(
    {
        jwtFromRequest: ExtractJWT.fromBodyField('refreshToken'),
        secretOrKey: JWT_SECRET,
        passReqToCallback: true
    },
    async (req, payload, done) => {
        try {
            const {user} = payload;
            const {body: {refreshToken: value}} = req;
            await findRefreshToken({value});
            const tokensPair = await signTokens(user);
            await updateRefreshToken({value: tokensPair.refreshToken}, {userId: user.id});
            done(null, null, tokensPair);
        } catch (e) {
            done(e, null);
        }
    }
);

module.exports = passport.use('login', login).use('refreshTokenLogin', refreshTokenLogin).use('refreshTokens', refreshTokens);