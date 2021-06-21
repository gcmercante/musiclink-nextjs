import Image from 'next/image';
import { makeStyles } from '@material-ui/core';
import ContainerComponent from '../components/ContainerComponent';
import TextFieldComponent from '../components/TextFieldComponent';
import ButtonComponent from '../components/ButtonComponent';

import utilStyles from '../styles/Utils.module.css';

const useStyles = makeStyles({
    root: {
        color: '#F2BB16',
    },
});
export default function Forgot() {
    const classes = useStyles();
    return (
      <div className={utilStyles.bodyCSS}>
        <ContainerComponent display="flex" flexDirection="column" maxWidth="60vh" alignItems="center" flexWrap="wrap">
          <Image
            src="/images/Logo_Amarelo.png"
            alt="Musiclink Logo"
            width={200}
            height={200}
          />
          <h2 className={classes.root}>
            Informe o endereço de email para redefinir a senha
          </h2>
          <TextFieldComponent
            label="Email"
            type="email"
            required
          />
          <ButtonComponent
            label="Enviar"
          />
        </ContainerComponent>
      </div>
    );
}
