import { UniversalCss } from '@/styles/global';
import type { AppProps } from 'next/app';

UniversalCss();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
