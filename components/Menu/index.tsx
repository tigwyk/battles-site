import React, { useContext } from 'react'
//import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTheme from '../../hooks/useTheme'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import config from './config'

const Menu = (props) => {
  //const { account, connect, reset } = useWallet()
  const { isDark, toggleTheme } = useTheme()

  return (
    <UikitMenu
      //account={account}
      //login={connect}
      //logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      links={config}
      {...props}
    />
  )
}

export default Menu
