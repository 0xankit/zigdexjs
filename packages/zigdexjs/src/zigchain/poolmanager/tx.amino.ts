//@ts-nocheck
import { MsgUpdateParams, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut, MsgSetDenomPairTakerFee, MsgSetTakerFeeShareAgreementForDenom, MsgSetRegisteredAlloyedPool } from "./tx";
export const AminoConverter = {
  "/zigchain.poolmanager.MsgUpdateParams": {
    aminoType: "zigchain/x/poolmanager/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/zigchain.poolmanager.MsgSwapExactAmountIn": {
    aminoType: "zigchain/poolmanager/swap-exact-amount-in",
    toAmino: MsgSwapExactAmountIn.toAmino,
    fromAmino: MsgSwapExactAmountIn.fromAmino
  },
  "/zigchain.poolmanager.MsgSwapExactAmountOut": {
    aminoType: "zigchain/poolmanager/swap-exact-amount-out",
    toAmino: MsgSwapExactAmountOut.toAmino,
    fromAmino: MsgSwapExactAmountOut.fromAmino
  },
  "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn": {
    aminoType: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn",
    toAmino: MsgSplitRouteSwapExactAmountIn.toAmino,
    fromAmino: MsgSplitRouteSwapExactAmountIn.fromAmino
  },
  "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut": {
    aminoType: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut",
    toAmino: MsgSplitRouteSwapExactAmountOut.toAmino,
    fromAmino: MsgSplitRouteSwapExactAmountOut.fromAmino
  },
  "/zigchain.poolmanager.MsgSetDenomPairTakerFee": {
    aminoType: "/zigchain.poolmanager.MsgSetDenomPairTakerFee",
    toAmino: MsgSetDenomPairTakerFee.toAmino,
    fromAmino: MsgSetDenomPairTakerFee.fromAmino
  },
  "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenom": {
    aminoType: "zigchain/poolmanager/set-taker-fee-share-agreement-for-denom",
    toAmino: MsgSetTakerFeeShareAgreementForDenom.toAmino,
    fromAmino: MsgSetTakerFeeShareAgreementForDenom.fromAmino
  },
  "/zigchain.poolmanager.MsgSetRegisteredAlloyedPool": {
    aminoType: "zigchain/poolmanager/set-registered-alloyed-pool",
    toAmino: MsgSetRegisteredAlloyedPool.toAmino,
    fromAmino: MsgSetRegisteredAlloyedPool.fromAmino
  }
};