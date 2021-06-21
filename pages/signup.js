import Image from 'next/image';
import TextFieldComponent from '../components/TextFieldComponent';
import ButtonComponent from '../components/ButtonComponent';
import ContainerComponent from '../components/ContainerComponent';
import DropdownComponent from '../components/DropdownComponent';

import styles from '../styles/Utils.module.css';

export default function SignUp() {
    return (
      <div className={styles.bodyCSS}>
        <ContainerComponent display="flex" flexDirection="column" maxWidth="85vh" alignItems="center" flexWrap="wrap">
          <Image
            src="/images/Logo_Amarelo.png"
            alt="Musiclink Logo"
            width={200}
            height={200}
          />
          <TextFieldComponent
            label="Email"
            type="email"
            required
          />
          <TextFieldComponent
            label="Senha"
            type="password"
            required
          />
          <TextFieldComponent
            label="Nome"
            required
          />
          <TextFieldComponent
            label="Função"
          />
          <DropdownComponent
            id="type"
            label="Tipo de conta"
            required
          />
          <ButtonComponent
            label="Criar conta"
          />
        </ContainerComponent>
      </div>
    );
}
