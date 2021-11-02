import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 3,
    lpSymbol: 'PULL-USDC LP',
    lpAddresses: {
      137: '0x72dEf214b363D646F0abA67717A9a8412212f916',
      80001: '0x4d2438dac888ff432563b28D7c9634D6406c62B2',
    },
    tokenSymbol: 'PULL',
    tokenAddresses: {
      137: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
      80001: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'PULL-DAI LP',
    lpAddresses: {
      137: '0xdba7917a6b726Fcb95200DaC8235f73D499341a4',
      80001: '0x6B6c4CaAbC6AF0Cc2B9cf638d2478B4Cf4b6D9D8',
    },
    tokenSymbol: 'PULL',
    tokenAddresses: {
      137: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
      80001: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'PULL-wBAN LP',
    lpAddresses: {
      137: '0x6B98a63Aad9a4234b5Fa68a9979Ef511816F470D',
      80001: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'PULL',
    tokenAddresses: {
      137: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
      80001: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
    },
    quoteTokenSymbol: QuoteToken.wBAN,
    quoteTokenAdresses: contracts.wban,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'WMATIC-USDC LP',
    lpAddresses: {
      // 137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0xcd353F79d9FADe311fC3119B841e1f456b54e858',
      80001: '0x482fa68527705ADC49A79B880fd2389fB03eb813',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      80001: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
