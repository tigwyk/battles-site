import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.sushi.com/swap?outputCurrency=0xb44cf912e9d0341e92f64f4a0642393b7f3526c4',
      },
      {
        label: 'Liquidity',
        href: 'https://app.sushi.com/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //  label: 'Nests',
  //  icon: 'PoolIcon',
  //  href: '/nests',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SushiSwap',
        href: 'https://analytics-polygon.sushi.com/tokens/0xb44cf912e9d0341e92f64f4a0642393b7f3526c4',
      },
      {
        label: 'Rugpull Website',
        href: 'https://rugpull.best',
      },
      {
        label: 'PULL Faucet',
        href: 'https://faucet.rugpull.best',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/RugPullForSure',
      },
      {
        label: 'Docs',
        href: 'https://docs.rugpull.best/',
      },
      {
        label: 'Blog',
        href: 'https://rugpullforsure.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href:
  //    'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //  label: 'Audit by Hacken',
  //  icon: 'AuditIcon',
  //  href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  // label: 'Audit by CertiK',
  //  icon: 'AuditIcon',
  //  href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
