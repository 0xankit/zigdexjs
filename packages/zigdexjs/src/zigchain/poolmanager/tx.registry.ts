//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut, MsgSetDenomPairTakerFee, MsgSetTakerFeeShareAgreementForDenom, MsgSetRegisteredAlloyedPool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/zigchain.poolmanager.MsgUpdateParams", MsgUpdateParams], ["/zigchain.poolmanager.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/zigchain.poolmanager.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn", MsgSplitRouteSwapExactAmountIn], ["/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut", MsgSplitRouteSwapExactAmountOut], ["/zigchain.poolmanager.MsgSetDenomPairTakerFee", MsgSetDenomPairTakerFee], ["/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenom", MsgSetTakerFeeShareAgreementForDenom], ["/zigchain.poolmanager.MsgSetRegisteredAlloyedPool", MsgSetRegisteredAlloyedPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.encode(value).finish()
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.encode(value).finish()
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.encode(value).finish()
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.encode(value).finish()
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.encode(value).finish()
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgUpdateParams",
        value
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountIn",
        value
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOut",
        value
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn",
        value
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut",
        value
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFee",
        value
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenom",
        value
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPool",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromPartial(value)
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.fromPartial(value)
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.fromPartial(value)
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.fromPartial(value)
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.fromPartial(value)
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/zigchain.poolmanager.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.fromPartial(value)
      };
    }
  }
};