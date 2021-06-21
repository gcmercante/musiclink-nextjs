import { Box, TextField, withStyles } from '@material-ui/core';

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#FFAD1F',
        },
        '& label': {
            color: '#F2BB16',
            fontWeight: 'bold',
        },
        '&:hover label': {
            color: '#EB9D0E',
        },
        '& .MuiInputBase-root': {
            color: '#FFAD1F',
            fontWeight: 'bold',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FFAD1F',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#F2BB16',
                borderWidth: '2px',
                borderRadius: 12,
            },
            '&:hover fieldset': {
                borderColor: '#EB9D0E',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFAD1F',
            },
        },
        textTransform: 'uppercase',
        width: '40vh',
    },
})(TextField);

export default function TextFieldComponent({ label, required, type }) {
    return (
      <CustomTextField
        variant="outlined"
        label={label}
        required={required}
        type={type}
      />
    );
}
