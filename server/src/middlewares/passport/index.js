const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const {findUser} = require('../../controllers/queries/userQueries');
const {comparePasswords} = require('../../utils');
const {FAKE_ENV: {JWT_SECRET}} = require('../../constants');

const localLogin = new LocalStrategy(
    {
        usernameField: 'email',
    },
    async (email, password, done) => {
        try {
            const user = await findUser({email});
            await comparePasswords(password, user.password);
            done(null, user);
        } catch (e) {
            done(null, false, e);
        }
    }
);

const jwtLogin = new JwtStrategy(
    {
        jwtFromRequest: ExtractJWT.fromBodyField('refreshToken'),
        secretOrKey: JWT_SECRET,
        passReqToCallback: true
    },
    async (req, payload, done) => {
        try {
            const {id} = payload;
            const {body: {refreshToken}} = req;
            const user = await findUser({id});
            done(null, user);
        } catch (e) {
            done(null, false, e);
        }
    }
);

module.exports = passport.use('localLogin', localLogin).use('jwtLogin', jwtLogin);