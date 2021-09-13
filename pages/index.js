import Head from 'next/head';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Results from '../components/Results/Results';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <NavBar />
      <Results />
    </div>
  );
}
