import React from "react";
import styles from './UserInfoCard.module.sass';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import moment from 'moment';
import constants from '../../constants';

const UserInfoCard = ({user, role, openUserEditingForm}) => {

    const {firstName, lastName, login, email, birthday, creditCard, gender} = user;

    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography>{`Full Name: ${firstName} ${lastName}`}</Typography>
                <Typography>{`Login: ${login}`}</Typography>
                <Typography>{`Email: ${email}`}</Typography>
                <Typography>{`Birthday: ${moment(birthday).format('YYYY-MM-DD')}`}</Typography>
                <Typography>{`Gender: ${gender}`}</Typography>
                {
                    role === constants.USER_CHARACTERISTIC.ROLE.ADMIN &&
                    <>
                        <Typography>{`Credit Card: ${creditCard}`}</Typography>
                        <CardActions>
                            <Button color='primary' onClick={() => openUserEditingForm(user)}>Update User</Button>
                        </CardActions>
                    </>
                }
            </CardContent>
        </Card>
    );
};

UserInfoCard.propTypes = {
    user: PropTypes.object.isRequired,
    role: PropTypes.string.isRequired,
    openUserEditingForm: PropTypes.func.isRequired,
};

export default UserInfoCard;