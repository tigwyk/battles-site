import '../styles/globals.css'
import "../scss/main.scss"
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { ThemeContextProvider } from '../ThemeContext';
import Menu from '../components/Menu';

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function CardBattlesApp({ Component, pageProps }) {
  return (
  <Web3ReactProvider getLibrary={getLibrary}>
  <ThemeContextProvider>
    
  <Component {...pageProps} />
  
  </ThemeContextProvider>
  </Web3ReactProvider>
  );
}

export default CardBattlesApp
