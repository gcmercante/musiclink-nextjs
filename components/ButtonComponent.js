import { Button, withStyles } from '@material-ui/core';

const CustomButton = withStyles({
    root: {
        '&:hover': {
            backgroundColor: '#EB9D0E',
            color: '#FFFFFF',
        },
        color: '#FFFFFF',
        fontSize: '18px',
        backgroundColor: '#FFAD1F',
        borderRadius: 40,
        padding: '7px 15px',
        margin: '5px',
        width: '20vh',
        fontWeight: 'bold',
    },
})(Button);

export default function ButtonComponent({ label }) {
    return (
      <CustomButton
        variant="contained"
      >
        {label}
      </CustomButton>
    );
}
