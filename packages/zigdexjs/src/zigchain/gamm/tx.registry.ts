//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn, MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/zigchain.gamm.MsgUpdateParams", MsgUpdateParams], ["/zigchain.gamm.MsgJoinPool", MsgJoinPool], ["/zigchain.gamm.MsgExitPool", MsgExitPool], ["/zigchain.gamm.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/zigchain.gamm.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/zigchain.gamm.MsgJoinSwapExternAmountIn", MsgJoinSwapExternAmountIn], ["/zigchain.gamm.MsgJoinSwapShareAmountOut", MsgJoinSwapShareAmountOut], ["/zigchain.gamm.MsgExitSwapExternAmountOut", MsgExitSwapExternAmountOut], ["/zigchain.gamm.MsgExitSwapShareAmountIn", MsgExitSwapShareAmountIn], ["/zigchain.gamm.MsgCreateStableswapPool", MsgCreateStableswapPool], ["/zigchain.gamm.MsgStableSwapAdjustScalingFactors", MsgStableSwapAdjustScalingFactors]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.gamm.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinPool",
        value: MsgJoinPool.encode(value).finish()
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitPool",
        value: MsgExitPool.encode(value).finish()
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.encode(value).finish()
      };
    },
    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinSwapExternAmountIn",
        value: MsgJoinSwapExternAmountIn.encode(value).finish()
      };
    },
    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinSwapShareAmountOut",
        value: MsgJoinSwapShareAmountOut.encode(value).finish()
      };
    },
    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitSwapExternAmountOut",
        value: MsgExitSwapExternAmountOut.encode(value).finish()
      };
    },
    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitSwapShareAmountIn",
        value: MsgExitSwapShareAmountIn.encode(value).finish()
      };
    },
    createStableswapPool(value: MsgCreateStableswapPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgCreateStableswapPool",
        value: MsgCreateStableswapPool.encode(value).finish()
      };
    },
    stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors) {
      return {
        typeUrl: "/zigchain.gamm.MsgStableSwapAdjustScalingFactors",
        value: MsgStableSwapAdjustScalingFactors.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.gamm.MsgUpdateParams",
        value
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinPool",
        value
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitPool",
        value
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgSwapExactAmountIn",
        value
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgSwapExactAmountOut",
        value
      };
    },
    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinSwapExternAmountIn",
        value
      };
    },
    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinSwapShareAmountOut",
        value
      };
    },
    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitSwapExternAmountOut",
        value
      };
    },
    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitSwapShareAmountIn",
        value
      };
    },
    createStableswapPool(value: MsgCreateStableswapPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgCreateStableswapPool",
        value
      };
    },
    stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors) {
      return {
        typeUrl: "/zigchain.gamm.MsgStableSwapAdjustScalingFactors",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.gamm.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinPool",
        value: MsgJoinPool.fromPartial(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitPool",
        value: MsgExitPool.fromPartial(value)
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromPartial(value)
      };
    },
    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinSwapExternAmountIn",
        value: MsgJoinSwapExternAmountIn.fromPartial(value)
      };
    },
    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgJoinSwapShareAmountOut",
        value: MsgJoinSwapShareAmountOut.fromPartial(value)
      };
    },
    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitSwapExternAmountOut",
        value: MsgExitSwapExternAmountOut.fromPartial(value)
      };
    },
    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
      return {
        typeUrl: "/zigchain.gamm.MsgExitSwapShareAmountIn",
        value: MsgExitSwapShareAmountIn.fromPartial(value)
      };
    },
    createStableswapPool(value: MsgCreateStableswapPool) {
      return {
        typeUrl: "/zigchain.gamm.MsgCreateStableswapPool",
        value: MsgCreateStableswapPool.fromPartial(value)
      };
    },
    stableSwapAdjustScalingFactors(value: MsgStableSwapAdjustScalingFactors) {
      return {
        typeUrl: "/zigchain.gamm.MsgStableSwapAdjustScalingFactors",
        value: MsgStableSwapAdjustScalingFactors.fromPartial(value)
      };
    }
  }
};