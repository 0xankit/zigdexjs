//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreatePool, MsgSwap, MsgAddLiquidity, MsgRemoveLiquidity } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/zigchain.dex.MsgUpdateParams", MsgUpdateParams], ["/zigchain.dex.MsgCreatePool", MsgCreatePool], ["/zigchain.dex.MsgSwap", MsgSwap], ["/zigchain.dex.MsgAddLiquidity", MsgAddLiquidity], ["/zigchain.dex.MsgRemoveLiquidity", MsgRemoveLiquidity]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.dex.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/zigchain.dex.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    swap(value: MsgSwap) {
      return {
        typeUrl: "/zigchain.dex.MsgSwap",
        value: MsgSwap.encode(value).finish()
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/zigchain.dex.MsgAddLiquidity",
        value: MsgAddLiquidity.encode(value).finish()
      };
    },
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/zigchain.dex.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.dex.MsgUpdateParams",
        value
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/zigchain.dex.MsgCreatePool",
        value
      };
    },
    swap(value: MsgSwap) {
      return {
        typeUrl: "/zigchain.dex.MsgSwap",
        value
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/zigchain.dex.MsgAddLiquidity",
        value
      };
    },
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/zigchain.dex.MsgRemoveLiquidity",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.dex.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/zigchain.dex.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    swap(value: MsgSwap) {
      return {
        typeUrl: "/zigchain.dex.MsgSwap",
        value: MsgSwap.fromPartial(value)
      };
    },
    addLiquidity(value: MsgAddLiquidity) {
      return {
        typeUrl: "/zigchain.dex.MsgAddLiquidity",
        value: MsgAddLiquidity.fromPartial(value)
      };
    },
    removeLiquidity(value: MsgRemoveLiquidity) {
      return {
        typeUrl: "/zigchain.dex.MsgRemoveLiquidity",
        value: MsgRemoveLiquidity.fromPartial(value)
      };
    }
  }
};