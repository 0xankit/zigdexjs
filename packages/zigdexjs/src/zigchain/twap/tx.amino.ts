//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/zigchain.twap.MsgUpdateParams": {
    aminoType: "zigchain/x/twap/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};