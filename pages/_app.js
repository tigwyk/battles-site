import '../styles/globals.css'
import "../scss/main.scss"
import { ModalProvider } from '@pancakeswap-libs/uikit'
import { ThemeContextProvider } from '../ThemeContext'

function CardBattlesApp({ Component, pageProps }) {
  return (
      <ThemeContextProvider>
              <ModalProvider>
                  <Component {...pageProps} />
                </ModalProvider>
                </ThemeContextProvider>
  );
}

export default CardBattlesApp
