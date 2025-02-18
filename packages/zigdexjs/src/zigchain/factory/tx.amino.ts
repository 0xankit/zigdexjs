//@ts-nocheck
import { MsgUpdateParams, MsgCreateDenom, MsgSetDenomMetadata, MsgUpdateDenomURI, MsgUpdateDenomMaxSupply, MsgUpdateDenomAuth, MsgUpdateDenomMetadataAuth, MsgMintAndSendTokens, MsgBurnTokens } from "./tx";
export const AminoConverter = {
  "/zigchain.factory.MsgUpdateParams": {
    aminoType: "zigchain/x/factory/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/zigchain.factory.MsgCreateDenom": {
    aminoType: "/zigchain.factory.MsgCreateDenom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/zigchain.factory.MsgSetDenomMetadata": {
    aminoType: "/zigchain.factory.MsgSetDenomMetadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  },
  "/zigchain.factory.MsgUpdateDenomURI": {
    aminoType: "/zigchain.factory.MsgUpdateDenomURI",
    toAmino: MsgUpdateDenomURI.toAmino,
    fromAmino: MsgUpdateDenomURI.fromAmino
  },
  "/zigchain.factory.MsgUpdateDenomMaxSupply": {
    aminoType: "/zigchain.factory.MsgUpdateDenomMaxSupply",
    toAmino: MsgUpdateDenomMaxSupply.toAmino,
    fromAmino: MsgUpdateDenomMaxSupply.fromAmino
  },
  "/zigchain.factory.MsgUpdateDenomAuth": {
    aminoType: "/zigchain.factory.MsgUpdateDenomAuth",
    toAmino: MsgUpdateDenomAuth.toAmino,
    fromAmino: MsgUpdateDenomAuth.fromAmino
  },
  "/zigchain.factory.MsgUpdateDenomMetadataAuth": {
    aminoType: "/zigchain.factory.MsgUpdateDenomMetadataAuth",
    toAmino: MsgUpdateDenomMetadataAuth.toAmino,
    fromAmino: MsgUpdateDenomMetadataAuth.fromAmino
  },
  "/zigchain.factory.MsgMintAndSendTokens": {
    aminoType: "/zigchain.factory.MsgMintAndSendTokens",
    toAmino: MsgMintAndSendTokens.toAmino,
    fromAmino: MsgMintAndSendTokens.fromAmino
  },
  "/zigchain.factory.MsgBurnTokens": {
    aminoType: "/zigchain.factory.MsgBurnTokens",
    toAmino: MsgBurnTokens.toAmino,
    fromAmino: MsgBurnTokens.fromAmino
  }
};