import Image from 'next/image';
import TextFieldComponent from '../components/TextFieldComponent';
import ButtonComponent from '../components/ButtonComponent';
import ContainerComponent from '../components/ContainerComponent';
import DropdownComponent from '../components/DropdownComponent';
import FormComponent from '../components/FormComponent';
import CancelButtonComponent from '../components/CancelButtonComponent';
import { initializeStore } from '../store';

import styles from '../styles/Utils.module.css';

export default function SignUp() {
    return (
      <div className={styles.bodyCSS}>
        <ContainerComponent display="flex" flexDirection="column" maxWidth="50vh" alignItems="center" flexWrap="wrap">
          <Image
            src="/images/Logo_Amarelo.png"
            alt="Musiclink Logo"
            width={200}
            height={200}
          />
          <FormComponent>
            <TextFieldComponent
              name="email"
              label="Email"
              type="email"
              required
            />
            <TextFieldComponent
              name="password"
              label="Senha"
              type="password"
              required
            />
            <TextFieldComponent
              name="name"
              label="Nome"
              required
            />
            <TextFieldComponent
              name="role"
              label="Função"
            />
            <DropdownComponent
              name="account"
              id="account"
              label="Tipo de conta"
              required
            />
          </FormComponent>
          <ContainerComponent display="flex" flexDirection="row" maxWidth="50vh" alignItems="center">
            <CancelButtonComponent
              label="Cancelar"
              type="submit"
            />
            <ButtonComponent
              label="Criar conta"
              type="submit"
            />
          </ContainerComponent>
        </ContainerComponent>
      </div>
    );
}

export function getServerSideProps() {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    dispatch({
        type: 'TICK',
        light: false,
        lastUpdate: Date.now(),
    });

    return { props: { initialReduxState: reduxStore.getState() } };
}
