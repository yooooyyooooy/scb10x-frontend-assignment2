import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserAccountContextProvider } from '@contexts/UserAccountContext';

declare global {
      interface Window {
            ethereum: any;
      }
}
function MyApp({ Component, pageProps }: AppProps) {
      return (
            <UserAccountContextProvider>
                  <Component {...pageProps} />
            </UserAccountContextProvider>
      );
}

export default MyApp;
