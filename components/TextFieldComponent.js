import { TextField, withStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

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

function handleChanges(el) {
    console.log(el);
    const dispatch = useDispatch();
    const email = () => dispatch({ type: 'EMAIL', email: el.target.value });
    const password = () => dispatch({ type: 'PASSWD', password: el.target.value });
    const nome = () => dispatch({ type: 'NAME', name: el.target.value });
    const role = () => dispatch({ type: 'ROLE', role: el.target.value });
    const account = () => dispatch({ type: 'ACCOUNT', account: el.target.value });
    const data = useSelector((state) => state.signUp);
    console.log(data);
    return {
        email, password, nome, role, account,
    };
}

export default function TextFieldComponent({
    label, required, type, name,
}) {
    const {
        email, password, nome, role, account,
    } = handleChanges();
    // const [data, setData] = useState({
    //     email: '',
    //     password: '',
    //     name: '',
    //     role: '',
    //     type: '',
    // });

    // function handleFormChanges(element) {
    //     element.preventDefault();
    //     setData({ ...data, [element.target.name]: element.target.value });
    //     console.log(data);
    // }
    let handleFunc = '';
    switch (name) {
    case 'email':
        handleFunc = email;
        break;
    case 'password':
        handleFunc = password;
        break;
    case 'name':
        handleFunc = nome;
        break;
    case 'role':
        handleFunc = role;
        break;
    case 'account':
        handleFunc = account;
        break;
    default:
        break;
    }

    return (
      <CustomTextField
        name={name}
        variant="outlined"
        label={label}
        required={required}
        type={type}
        onChange={handleFunc()}
      />
    );
}
