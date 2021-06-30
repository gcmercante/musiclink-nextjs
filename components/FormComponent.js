import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: theme.spacing(2),
        '& > *': {
            marginBottom: '20px',
        },
    },
    div: {
        margin: 'auto',
        maxWidth: '45vh',
        justifyContent: 'center',
    },
}));

export default function FormComponent({ children }) {
    const classes = useStyles();
    return (
      <form className={classes.form}>
        {children}
      </form>
    );
}
