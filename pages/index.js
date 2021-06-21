import Head from 'next/head';
import styles from '../styles/Home.module.css';

export function getServerSideProps(context) {
    const loggedIn = false;
    if (!loggedIn) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}

export default function Home() {
    return (
      <div />
    );
}
