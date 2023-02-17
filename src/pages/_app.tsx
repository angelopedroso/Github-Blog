import { UniversalCss } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import logoImg from 'public/logo.svg';

UniversalCss();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" width={148} height={98} />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
