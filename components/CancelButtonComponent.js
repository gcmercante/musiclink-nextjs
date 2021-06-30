import { Button, withStyles } from '@material-ui/core';

const CustomButton = withStyles({
    root: {
        '&:hover': {
            backgroundColor: '#FFAD1F',
            color: '#FFFFFF',
        },
        color: '#FFAD1F',
        fontSize: '18px',
        backgroundColor: '#3D3D3D',
        borderRadius: 40,
        padding: '7px 15px',
        margin: '5px',
        width: '20vh',
        fontWeight: 'bold',
        border: '2px solid #FFAD1F',
    },
})(Button);

export default function CancelButtonComponent({ label, type }) {
    return (
      <CustomButton
        variant="contained"
        type={type}
      >
        {label}
      </CustomButton>
    );
}
