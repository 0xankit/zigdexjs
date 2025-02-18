//@ts-nocheck
import { MsgUpdateParams, MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn, MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export const AminoConverter = {
  "/zigchain.gamm.MsgUpdateParams": {
    aminoType: "zigchain/x/gamm/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/zigchain.gamm.MsgJoinPool": {
    aminoType: "zigchain/gamm/join-pool",
    toAmino: MsgJoinPool.toAmino,
    fromAmino: MsgJoinPool.fromAmino
  },
  "/zigchain.gamm.MsgExitPool": {
    aminoType: "zigchain/gamm/exit-pool",
    toAmino: MsgExitPool.toAmino,
    fromAmino: MsgExitPool.fromAmino
  },
  "/zigchain.gamm.MsgSwapExactAmountIn": {
    aminoType: "zigchain/gamm/swap-exact-amount-in",
    toAmino: MsgSwapExactAmountIn.toAmino,
    fromAmino: MsgSwapExactAmountIn.fromAmino
  },
  "/zigchain.gamm.MsgSwapExactAmountOut": {
    aminoType: "zigchain/gamm/swap-exact-amount-out",
    toAmino: MsgSwapExactAmountOut.toAmino,
    fromAmino: MsgSwapExactAmountOut.fromAmino
  },
  "/zigchain.gamm.MsgJoinSwapExternAmountIn": {
    aminoType: "zigchain/gamm/join-swap-extern-amount-in",
    toAmino: MsgJoinSwapExternAmountIn.toAmino,
    fromAmino: MsgJoinSwapExternAmountIn.fromAmino
  },
  "/zigchain.gamm.MsgJoinSwapShareAmountOut": {
    aminoType: "zigchain/gamm/join-swap-share-amount-out",
    toAmino: MsgJoinSwapShareAmountOut.toAmino,
    fromAmino: MsgJoinSwapShareAmountOut.fromAmino
  },
  "/zigchain.gamm.MsgExitSwapExternAmountOut": {
    aminoType: "zigchain/gamm/exit-swap-extern-amount-out",
    toAmino: MsgExitSwapExternAmountOut.toAmino,
    fromAmino: MsgExitSwapExternAmountOut.fromAmino
  },
  "/zigchain.gamm.MsgExitSwapShareAmountIn": {
    aminoType: "zigchain/gamm/exit-swap-share-amount-in",
    toAmino: MsgExitSwapShareAmountIn.toAmino,
    fromAmino: MsgExitSwapShareAmountIn.fromAmino
  },
  "/zigchain.gamm.MsgCreateStableswapPool": {
    aminoType: "zigchain/gamm/create-stableswap-pool",
    toAmino: MsgCreateStableswapPool.toAmino,
    fromAmino: MsgCreateStableswapPool.fromAmino
  },
  "/zigchain.gamm.MsgStableSwapAdjustScalingFactors": {
    aminoType: "osmosis/gamm/stableswap-adjust-scaling-factors",
    toAmino: MsgStableSwapAdjustScalingFactors.toAmino,
    fromAmino: MsgStableSwapAdjustScalingFactors.fromAmino
  }
};