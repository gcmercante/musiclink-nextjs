import { useState } from 'react';
import {
    Box, FormControl, InputLabel, makeStyles, MenuItem, Select, withStyles,
} from '@material-ui/core';

const background = makeStyles({
    dropdownStyle: {
        backgroundColor: '#3D3D3D',
    },
});

const CustomForm = withStyles({
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
        '& .MuiSvgIcon-root': {
            color: '#F2BB16',
        },
        textTransform: 'uppercase',
        width: '40vh',
    },
})(FormControl);

const CustomSelect = withStyles({
    root: {
        '.MuiPopover-root': {
            backgroundColor: '#3D3D3D',
        },
    },
})(Select);
const CustomItem = withStyles({
    root: {
        backgroundColor: '#3D3D3D',
        color: '#F2BB16',
        '&:hover': {
            backgroundColor: '#757575',
        },
        '&.Mui-selected': {
            backgroundColor: '#757575',
            '&:hover': {
                backgroundColor: '#757575',
            },
        },
    },
})(MenuItem);

export default function DropdownComponent({
    id, label, required,
}) {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const classes = background();

    return (
      <CustomForm variant="outlined" required={required}>
        <InputLabel id={id}>{label}</InputLabel>
        <CustomSelect
          labelId={id}
          value={value}
          onChange={handleChange}
          label={label}
          MenuProps={{ classes: { paper: classes.dropdownStyle } }}
        >
          <CustomItem value="">
            <em>--</em>
          </CustomItem>
          <CustomItem value="user">Músico</CustomItem>
          <CustomItem value="band">Banda</CustomItem>
          <CustomItem value="producer">Produtor</CustomItem>
        </CustomSelect>
      </CustomForm>
    );
}
