import { ChainId } from '@pancakeswap/chains'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import { ACCESS_TOKEN_SUPPORT_CHAIN_IDS } from 'components/AccessRisk/config/supportedChains'
import { useActiveChainId } from 'hooks/useActiveChainId'
import React, { createContext, useMemo, useState } from 'react'
import { useExchangeChartManager } from 'state/user/hooks'

export const SwapFeaturesContext = createContext<{
  isHotTokenSupported: boolean
  isChartSupported: boolean
  isStableSupported: boolean
  isAccessTokenSupported: boolean
  isChartExpanded: boolean
  isChartDisplayed: boolean
  setIsChartExpanded: React.Dispatch<React.SetStateAction<boolean>> | null
  setIsChartDisplayed: React.Dispatch<React.SetStateAction<boolean>> | null
}>({
  isHotTokenSupported: false,
  isChartSupported: false,
  isStableSupported: false,
  isAccessTokenSupported: false,
  isChartExpanded: false,
  isChartDisplayed: false,
  setIsChartExpanded: null,
  setIsChartDisplayed: null,
})

const CHART_SUPPORT_CHAIN_IDS = [
  ChainId.BSC,
  ChainId.PULSECHAIN,
  ChainId.DEGENCHAIN,
  ChainId.BSC_TESTNET,
  // ChainId.ETHEREUM
]
const STABLE_SUPPORT_CHAIN_IDS = [ChainId.BSC_TESTNET, ChainId.BSC]
const HOT_TOKEN_SUPPORT_CHAIN_IDS = [ChainId.BSC, ChainId.ETHEREUM, ChainId.PULSECHAIN, ChainId.DEGENCHAIN]

export const SwapFeaturesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isMobile } = useMatchBreakpoints()
  const { chainId } = useActiveChainId()
  const [isChartDisplayed, setIsChartDisplayed] = useExchangeChartManager(isMobile)
  const [isChartExpanded, setIsChartExpanded] = useState(false)

  const isChartSupported = useMemo(
    () =>
      // avoid layout shift, by default showing
      !chainId || CHART_SUPPORT_CHAIN_IDS.includes(chainId),
    [chainId],
  )

  const isStableSupported = useMemo(() => !chainId || STABLE_SUPPORT_CHAIN_IDS.includes(chainId), [chainId])

  const isAccessTokenSupported = useMemo(
    () => Boolean(chainId && ACCESS_TOKEN_SUPPORT_CHAIN_IDS.includes(chainId)),
    [chainId],
  )

  const isHotTokenSupported = useMemo(
    () => Boolean(chainId && HOT_TOKEN_SUPPORT_CHAIN_IDS.includes(chainId)),
    [chainId],
  )

  const value = useMemo(() => {
    return {
      isHotTokenSupported,
      isChartSupported,
      isStableSupported,
      isAccessTokenSupported,
      isChartDisplayed,
      setIsChartDisplayed,
      isChartExpanded,
      setIsChartExpanded,
    }
  }, [
    isHotTokenSupported,
    isChartSupported,
    isStableSupported,
    isAccessTokenSupported,
    isChartDisplayed,
    setIsChartDisplayed,
    isChartExpanded,
  ])

  return <SwapFeaturesContext.Provider value={value}>{children}</SwapFeaturesContext.Provider>
}
