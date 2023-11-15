import {
  type SwapActionParams,
  GreaterThanOrEqual,
} from '@rabbitholegg/questdk'
import { parseEther, parseUnits } from 'viem'
import { type TestParams, Tokens } from './utils'
import { ETH_ADDRESS } from './contract-addresses'
import { ARB_ONE_CHAIN_ID } from './chain-ids'

export const TOKENS_FOR_TOKENS_V1: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0xa91483BcA21D07fBb1B3Aa45a3B0bdf264C5B497',
    hash: '0x5abc3d2b70e3a49a455a2584692037cb3e73a3ab81ea10cfa857a1d63c2456c4',
    input:
      '0x6023e9660000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000012a05f20000000000000000000000000000000000000000000000000000000001290a3e74000000000000000000000000a91483bca21d07fbb1b3aa45a3b0bdf264c5b4970000000000000000000000000000000000000000000000000000000000000002000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc8000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e5831',
    to: '0xabbc5f99639c9b6bcb58544ddf04efa6802f4064',
    value: '0',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.USDCe,
    tokenOut: Tokens.USDC,
    amountIn: GreaterThanOrEqual(parseUnits('5000', 6)),
    amountOut: GreaterThanOrEqual(parseUnits('4980', 6)),
    recipient: '0xa91483BcA21D07fBb1B3Aa45a3B0bdf264C5B497',
  },
}

export const ETH_FOR_TOKENS_V1: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0x052C68ABE8e4BF0b78925E488B98f6fdc18A3AF9',
    hash: '0xd0a5257cc2a86c6e87b3b248fb45b53215756dfaa6893454d8ab0e83cba4b92c',
    input:
      '0xabe68eaa00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000002250e77000000000000000000000000052c68abe8e4bf0b78925e488b98f6fdc18a3af9000000000000000000000000000000000000000000000000000000000000000200000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    to: '0xabbc5f99639c9b6bcb58544ddf04efa6802f4064',
    value: '19200000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: ETH_ADDRESS,
    tokenOut: Tokens.USDCe,
    amountIn: GreaterThanOrEqual(parseEther('0.0192')),
    amountOut: GreaterThanOrEqual(parseUnits('35.98', 6)),
    recipient: '0x052c68abe8e4bf0b78925e488b98f6fdc18a3af9',
  },
}

export const TOKENS_FOR_ETH_V1: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0xDA63F22BF4bDC0B88536bDf4375fc9E14862ABD8',
    hash: '0x6a58fc08dbcb9589382ee33315c7d2c064663b0e1a2e132425865c4a34a17597',
    input:
      '0x2d4ba6a70000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000034e84400000000000000000000000000000000000000000000000007fdd30bd8482800000000000000000000000000da63f22bf4bdc0b88536bdf4375fc9e14862abd800000000000000000000000000000000000000000000000000000000000000020000000000000000000000002f2a2543b76a4166549f7aab2e75bef0aefc5b0f00000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1',
    to: '0xabbc5f99639c9b6bcb58544ddf04efa6802f4064',
    value: '0',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.WBTC,
    tokenOut: Tokens.WETH,
    amountIn: GreaterThanOrEqual(parseUnits('0.0346', 8)),
    amountOut: GreaterThanOrEqual(parseEther('.57')),
    recipient: '0xDA63F22BF4bDC0B88536bDf4375fc9E14862ABD8',
  },
}

export const SWAP_TOKENS_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    hash: '0x8ff0e5b1475ca605378191b4666af5187a1d6c408aedd78107b9c4dc279464dd',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000044c7d142da000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064e6d66ac8000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002e44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044c7d142da00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003f9a2f4d81e55a1d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000009c2433dfd71096c435be9465220bb2b189375ea7000000000000000000000000c25cef6061cf5de5eb761b50e4743c1f5d7e540700000000000000000000000000000000000000000000000000000000',
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    value: '1210000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.USDCe,
    amountIn: GreaterThanOrEqual(1n),
    tokenOut: '0x912CE59144191C1204E64559FE8253a0e49E6548',
  },
}

export const TOKENS_FOR_TOKENS_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000044c7d142da000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064e6d66ac8000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d50000000000000000000000000000000000000000000000000000000001312d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002e44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044c7d142da0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d46400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000009c2433dfd71096c435be9465220bb2b189375ea700000000000000000000000047c031236e19d024b42f8ae6780e44a57317070300000000000000000000000000000000000000000000000000000000',
    value: '1210000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.USDCe,
    tokenOut: Tokens.WBTC,
    amountIn: GreaterThanOrEqual(parseUnits('20', 6)),
    amountOut: GreaterThanOrEqual(parseUnits('0.00054', 8)),
  },
}

export const ETH_FOR_TOKENS_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000a42bc00b1220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002e44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044c7d142da00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ba2d3f527f3b71f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab100000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000ccb4faa6f1f1b30911619f1184082ab4e25813c0000000000000000000000007f1fa204bb700853d36994da19f830b6ad18455c00000000000000000000000000000000000000000000000000000000',
    value: '46210000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: ETH_ADDRESS,
    tokenOut: Tokens.LINK,
    amountIn: GreaterThanOrEqual(parseEther('0.04621')),
    amountOut: GreaterThanOrEqual(parseUnits('6.6', 18)),
  },
}

export const TOKENS_FOR_ETH_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000044c7d142da000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064e6d66ac8000000000000000000000000f97f4df75117a78c1a5a0dbb814af92458539fb400000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d50000000000000000000000000000000000000000000000000de4de8c7bf541ea0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002e44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044c7d142da000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000199e4d36d6c1c200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f97f4df75117a78c1a5a0dbb814af92458539fb400000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007f1fa204bb700853d36994da19f830b6ad18455c0000000000000000000000000ccb4faa6f1f1b30911619f1184082ab4e25813c00000000000000000000000000000000000000000000000000000000',
    value: '1210000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.LINK,
    tokenOut: ETH_ADDRESS,
    amountIn: GreaterThanOrEqual(parseUnits('1', 18)),
    amountOut: GreaterThanOrEqual(parseEther('0.00721')),
    recipient: '0xA99F898530dF1514A566f1a6562D62809e99557D',
  },
}

export const TOKENS_FOR_USDC_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d50000000000000000000000000000000000000000000000000003d46f6f116000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064e6d66ac8000000000000000000000000f97f4df75117a78c1a5a0dbb814af92458539fb400000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d50000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003d46f6f11600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e52e2d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f97f4df75117a78c1a5a0dbb814af92458539fb400000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000010000000000000000000000007f1fa204bb700853d36994da19f830b6ad18455c00000000000000000000000000000000000000000000000000000000',
    value: '1210000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.LINK,
    tokenOut: Tokens.USDC,
    amountIn: GreaterThanOrEqual(parseUnits('1', 18)),
    amountOut: GreaterThanOrEqual(parseUnits('15', 6)),
  },
}

export const ETH_FOR_USDC_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d50000000000000000000000000000000000000000000000000091f0392e1560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003d46f6f11600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004f7350b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab100000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000ccb4faa6f1f1b30911619f1184082ab4e25813c00000000000000000000000000000000000000000000000000000000',
    value: '41078000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: ETH_ADDRESS,
    tokenOut: Tokens.USDC,
    amountIn: GreaterThanOrEqual(parseEther('0.04')),
    amountOut: GreaterThanOrEqual(parseUnits('83', 6)),
  },
}

export const USDC_FOR_ETH_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d50000000000000000000000000000000000000000000000000003d46f6f116000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064e6d66ac8000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000000000004016400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003d46f6f116000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000071b68fbe2b72c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee633600000000000000000000000000000000000000000000000000000000',
    value: '1078000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.USDC,
    tokenOut: ETH_ADDRESS,
    amountIn: GreaterThanOrEqual(parseUnits('4.20', 6)),
    amountOut: GreaterThanOrEqual(parseEther('0.002')),
  },
}

export const USDC_FOR_WETH_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d50000000000000000000000000000000000000000000000000003d46f6f116000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064e6d66ac8000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000000000004016400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003d46f6f116000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000071c8a4874c6fc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000ccb4faa6f1f1b30911619f1184082ab4e25813c00000000000000000000000000000000000000000000000000000000',
    value: '1078000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.USDC,
    tokenOut: Tokens.WETH,
    amountIn: GreaterThanOrEqual(parseUnits('4.20', 6)),
    amountOut: GreaterThanOrEqual(parseEther('0.002')),
  },
}

export const USDCe_FOR_WETH_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000044c7d142da000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064e6d66ac8000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000000000017d78400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002e44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044c7d142da0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a701e80c27f9d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000009c2433dfd71096c435be9465220bb2b189375ea700000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee633600000000000000000000000000000000000000000000000000000000',
    value: '1210000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.USDCe,
    tokenOut: Tokens.WETH,
    amountIn: GreaterThanOrEqual(parseUnits('25', 6)),
    amountOut: GreaterThanOrEqual(parseEther('0.011945')),
  },
}

export const REDUCE_ORDER_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xE293DC11d4a4953957E3b06e7766Cdb07Fdb63E6',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000044c7d142da0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000c0feb7e9c86630c7d49dc8e2d100000000000000000000000000000000000000000000000000000000004db66c7aa0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004c9d35b304c00000000000000000000000000000000000000000000000000044c7d142da0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e293dc11d4a4953957e3b06e7766cdb07fdb63e600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c7abb2c5f3bf3ceb389df0eecd6120d451170b50000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000ccb4faa6f1f1b30911619f1184082ab4e25813c00000000000000000000000000000000000000000000000000000000',
    value: '1210000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
  },
}

export const ALT_ETHOUT_V2: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x7c68c7866a64fa2160f78eeae12217ffbf871fa8',
    from: '0xCf42323149338846785aFD665eDBC1BB9F9608D6',
    input:
      '0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000000447d39aaf100000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d500000000000000000000000000000000000000000000000000044c7d142da000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064e6d66ac8000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000031ef83a530fde1b38ee9a18093a333d8bbbc40d5000000000000000000000000000000000000000000000000000000001ee3c3380000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002e44a393a41000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044c7d142da0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036e475bafb4e7ad00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000cf42323149338846785afd665edbc1bb9f9608d6000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000009c2433dfd71096c435be9465220bb2b189375ea70000000000000000000000006853ea96ff216fab11d2d930ce3c508556a4bdc400000000000000000000000000000000000000000000000000000000',
    value: '1210000000000000',
  },
  params: {
    chainId: ARB_ONE_CHAIN_ID,
    tokenIn: Tokens.USDCe,
    tokenOut: ETH_ADDRESS,
    amountIn: GreaterThanOrEqual(parseUnits('518.24', 6)),
    amountOut: GreaterThanOrEqual(parseEther('0.247')),
  },
}
