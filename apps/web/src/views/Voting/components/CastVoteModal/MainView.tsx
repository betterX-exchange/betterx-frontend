import { useTranslation } from '@pancakeswap/localization'
import {
  AutoRenewIcon,
  Button,
  ChevronRightIcon,
  Flex,
  IconButton,
  Message,
  RocketIcon,
  Skeleton,
  Text,
} from '@pancakeswap/uikit'
import { formatNumber } from '@pancakeswap/utils/formatBalance'
import BigNumber from 'bignumber.js'
import { useActiveChainId } from 'hooks/useActiveChainId'
import useCurrentBlockTimestamp from 'hooks/useCurrentBlockTimestamp'
import { useMemo } from 'react'
import { getBlockExploreLink } from 'utils'
import { MyVeCakeCard } from 'views/CakeStaking/components/MyVeCakeCard'
import TextEllipsis from '../TextEllipsis'
import { StyledScanLink } from './DetailsView'
import { ModalInner, VotingBoxBorder, VotingBoxCardInner } from './styles'
import { CastVoteModalProps } from './types'

interface MainViewProps {
  vote: {
    label: string
    value: number
  }
  isLoading: boolean
  isPending: boolean
  isError: boolean
  total: number
  disabled?: boolean
  lockedCakeBalance: number
  lockedEndTime: number
  onConfirm: () => void
  onViewDetails: () => void
  onDismiss: CastVoteModalProps['onDismiss']
}

type VeMainViewProps = {
  vote?: {
    label: string
    value: number
  }
  isLoading?: boolean
  isPending?: boolean
  isError?: boolean
  total: number
  disabled?: boolean
  veCakeBalance?: number
  onConfirm?: () => void
  onDismiss?: CastVoteModalProps['onDismiss']
  block: number
}

export const VeMainView = ({
  vote,
  total,
  isPending,
  isLoading,
  isError,
  onConfirm,
  onDismiss,
  disabled,
  block,
  veCakeBalance,
}: VeMainViewProps) => {
  const { t } = useTranslation()

  const { chainId } = useActiveChainId()

  return (
    <>
      <ModalInner>
        {vote ? (
          <>
            <Text color="secondary" mb="8px" textTransform="uppercase" fontSize="12px" bold>
              {t('Voting For')}
            </Text>
            <TextEllipsis bold fontSize="20px" mb="8px" title={vote.label}>
              {vote.label}
            </TextEllipsis>
          </>
        ) : null}

        <Text color="secondary" textTransform="uppercase" bold fontSize="14px">
          {t('Your voting power at block')}
          <StyledScanLink useBscCoinFallback href={getBlockExploreLink(block, 'block', chainId)} ml="8px">
            {block}
          </StyledScanLink>
        </Text>
        {isLoading && !isError ? (
          <Skeleton height="64px" mb="12px" />
        ) : isError ? (
          <Message variant="danger" mb="12px">
            <Text color="text">{t('Error occurred, please try again later')}</Text>
          </Message>
        ) : (
          <>
            <br />
            <MyVeCakeCard type="row" value={!veCakeBalance ? '0' : String(veCakeBalance)} />
            <br />
            <Text color="textSubtle" fontSize="14px">
              {t(
                'Your voting power is determined by the number of veCAKE you have at the block detailed above. CAKE held in other places does NOT contribute to your voting power.',
              )}
            </Text>
            <br />
            {onConfirm && (
              <Text fontSize="14px" color="textSubtle">
                {t('Once confirmed, voting action cannot be undone.')}
              </Text>
            )}
          </>
        )}
      </ModalInner>
      {onConfirm && (
        <Button
          isLoading={isPending}
          endIcon={isPending ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={disabled || isLoading || total === 0}
          width="100%"
          mb="8px"
          onClick={onConfirm}
        >
          {t('Confirm Vote')}
        </Button>
      )}
      {onDismiss && (
        <Button variant="secondary" width="100%" onClick={onDismiss}>
          {t('Cancel')}
        </Button>
      )}
    </>
  )
}

const MainView: React.FC<React.PropsWithChildren<MainViewProps>> = ({
  vote,
  total,
  isPending,
  isLoading,
  isError,
  onConfirm,
  onViewDetails,
  onDismiss,
  disabled,
  lockedCakeBalance,
  lockedEndTime,
}) => {
  const { t } = useTranslation()
  const blockTimestamp = useCurrentBlockTimestamp()

  const hasLockedCake = lockedCakeBalance > 0

  const isBoostingExpired = useMemo(() => {
    return lockedEndTime !== 0 && new BigNumber(blockTimestamp?.toString() ?? 0).gte(lockedEndTime)
  }, [blockTimestamp, lockedEndTime])

  const hasBoosted = hasLockedCake && !isBoostingExpired

  return (
    <>
      <ModalInner>
        <Text color="secondary" mb="8px" textTransform="uppercase" fontSize="12px" bold>
          {t('Voting For')}
        </Text>
        <TextEllipsis bold fontSize="20px" mb="8px" title={vote.label}>
          {vote.label}
        </TextEllipsis>
        <Text color="secondary" mb="8px" textTransform="uppercase" fontSize="12px" bold>
          {t('Your Voting Power')}
        </Text>
        {isLoading && !isError ? (
          <Skeleton height="64px" mb="12px" />
        ) : isError ? (
          <Message variant="danger" mb="12px">
            <Text color="text">{t('Error occurred, please try again later')}</Text>
          </Message>
        ) : (
          <>
            <VotingBoxBorder hasBoosted={hasBoosted} onClick={onViewDetails} style={{ cursor: 'pointer' }}>
              <VotingBoxCardInner hasBoosted={hasBoosted}>
                <Flex flexDirection="column">
                  <Text bold fontSize="20px" color={total === 0 ? 'failure' : 'text'}>
                    {formatNumber(total, 0, 3)}
                  </Text>
                  {hasLockedCake && (
                    <Flex>
                      <RocketIcon color={isBoostingExpired ? 'warning' : 'secondary'} width="15px" height="15px" />
                      <Text ml="4px" bold color={isBoostingExpired ? 'warning' : 'secondary'} fontSize="14px">
                        {isBoostingExpired ? t('Boosting Expired') : t('Boosted by vCAKE')}
                      </Text>
                    </Flex>
                  )}
                </Flex>
                <IconButton scale="sm" variant="text">
                  <ChevronRightIcon width="24px" />
                </IconButton>
              </VotingBoxCardInner>
            </VotingBoxBorder>
            {total === 0 ? (
              <Message variant="danger" mb="12px">
                <Text color="danger">
                  {t(
                    'Hold some BetterX in your wallet or on BetterX Swap at the snapshot block to get voting power for future proposals.',
                  )}
                </Text>
              </Message>
            ) : (
              <Text as="p" color="textSubtle" fontSize="14px">
                {t('Are you sure you want to vote for the above choice? This action cannot be undone.')}
              </Text>
            )}
          </>
        )}
      </ModalInner>
      <Button
        isLoading={isPending}
        endIcon={isPending ? <AutoRenewIcon spin color="currentColor" /> : null}
        disabled={disabled || isLoading || total === 0}
        width="100%"
        mb="8px"
        onClick={onConfirm}
      >
        {t('Confirm Vote')}
      </Button>
      <Button variant="secondary" width="100%" onClick={onDismiss}>
        {t('Cancel')}
      </Button>
    </>
  )
}

export default MainView
