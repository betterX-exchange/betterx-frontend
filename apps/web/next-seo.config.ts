import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | BetterX Exchange',
  defaultTitle: 'BetterX Exchange',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@betterx',
    site: '@betterx',
  },
  openGraph: {
    title: '🥞 BetterX - A Better DEX for EVeryone',
    description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
    images: [{ url: 'https://assets.betterx.pro/web/og/v2/hero.jpg' }],
  },
}
