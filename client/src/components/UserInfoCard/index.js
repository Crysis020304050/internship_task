import React from "react";
import styles from './UserInfoCard.module.sass';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const UserInfoCard = ({firstName, lastName, login, email, birthday, creditCard, gender}) => (
    <Card className={styles.card}>
        <CardContent>
            <Typography>{`Full Name: ${firstName} ${lastName}`}</Typography>
            <Typography>{`Login: ${login}`}</Typography>
            <Typography>{`Email: ${email}`}</Typography>
            <Typography>{`Birthday: ${birthday}`}</Typography>
            <Typography>{`Gender: ${gender}`}</Typography>
            {Boolean(creditCard) && <Typography>{`Credit Card: ${creditCard}`}</Typography>}
        </CardContent>
        {
            Boolean(creditCard) && <CardActions>
                <Button>Update User</Button>
            </CardActions>
        }
    </Card>
);

export default UserInfoCard;