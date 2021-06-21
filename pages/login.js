import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import TextFieldComponent from '../components/TextFieldComponent';
import ButtonComponent from '../components/ButtonComponent';
import ContainerComponent from '../components/ContainerComponent';
import HyperlinkComponent from '../components/HyperlinkComponent';

import { siteTitle } from '../lib/utils';

import styles from '../styles/Utils.module.css';

export default function Login() {
    return (
      <div className={styles.bodyCSS}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <ContainerComponent display="flex" flexDirection="column" maxWidth="50vh" alignItems="center" flexWrap="nowrap">
          <Image
            src="/images/Logo_Amarelo.png"
            alt="Musiclink Logo"
            width={300}
            height={300}
          />
          <TextFieldComponent
            label="Usuário ou email"
          />
          <TextFieldComponent
            label="Senha"
          />
          <ButtonComponent
            label="Entrar"
          />
          <Link href="/forgot" passHref>
            <HyperlinkComponent label="Esqueceu sua senha?" uppercase color="#F2BB16" />
          </Link>
          <Link href="/signup" passHref>
            <HyperlinkComponent label="Criar conta" uppercase color="#F2BB16" />
          </Link>
        </ContainerComponent>
      </div>
    );
}
