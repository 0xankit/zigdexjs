//@ts-nocheck
import { MsgUpdateParams, MsgCreatePool, MsgSwap, MsgAddLiquidity, MsgRemoveLiquidity } from "./tx";
export const AminoConverter = {
  "/zigchain.dex.MsgUpdateParams": {
    aminoType: "zigchain/x/dex/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/zigchain.dex.MsgCreatePool": {
    aminoType: "/zigchain.dex.MsgCreatePool",
    toAmino: MsgCreatePool.toAmino,
    fromAmino: MsgCreatePool.fromAmino
  },
  "/zigchain.dex.MsgSwap": {
    aminoType: "/zigchain.dex.MsgSwap",
    toAmino: MsgSwap.toAmino,
    fromAmino: MsgSwap.fromAmino
  },
  "/zigchain.dex.MsgAddLiquidity": {
    aminoType: "/zigchain.dex.MsgAddLiquidity",
    toAmino: MsgAddLiquidity.toAmino,
    fromAmino: MsgAddLiquidity.fromAmino
  },
  "/zigchain.dex.MsgRemoveLiquidity": {
    aminoType: "/zigchain.dex.MsgRemoveLiquidity",
    toAmino: MsgRemoveLiquidity.toAmino,
    fromAmino: MsgRemoveLiquidity.fromAmino
  }
};