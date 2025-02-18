//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateDenom, MsgSetDenomMetadata, MsgUpdateDenomURI, MsgUpdateDenomMaxSupply, MsgUpdateDenomAuth, MsgUpdateDenomMetadataAuth, MsgMintAndSendTokens, MsgBurnTokens } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/zigchain.factory.MsgUpdateParams", MsgUpdateParams], ["/zigchain.factory.MsgCreateDenom", MsgCreateDenom], ["/zigchain.factory.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/zigchain.factory.MsgUpdateDenomURI", MsgUpdateDenomURI], ["/zigchain.factory.MsgUpdateDenomMaxSupply", MsgUpdateDenomMaxSupply], ["/zigchain.factory.MsgUpdateDenomAuth", MsgUpdateDenomAuth], ["/zigchain.factory.MsgUpdateDenomMetadataAuth", MsgUpdateDenomMetadataAuth], ["/zigchain.factory.MsgMintAndSendTokens", MsgMintAndSendTokens], ["/zigchain.factory.MsgBurnTokens", MsgBurnTokens]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/zigchain.factory.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/zigchain.factory.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    },
    updateDenomURI(value: MsgUpdateDenomURI) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomURI",
        value: MsgUpdateDenomURI.encode(value).finish()
      };
    },
    updateDenomMaxSupply(value: MsgUpdateDenomMaxSupply) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupply",
        value: MsgUpdateDenomMaxSupply.encode(value).finish()
      };
    },
    updateDenomAuth(value: MsgUpdateDenomAuth) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomAuth",
        value: MsgUpdateDenomAuth.encode(value).finish()
      };
    },
    updateDenomMetadataAuth(value: MsgUpdateDenomMetadataAuth) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuth",
        value: MsgUpdateDenomMetadataAuth.encode(value).finish()
      };
    },
    mintAndSendTokens(value: MsgMintAndSendTokens) {
      return {
        typeUrl: "/zigchain.factory.MsgMintAndSendTokens",
        value: MsgMintAndSendTokens.encode(value).finish()
      };
    },
    burnTokens(value: MsgBurnTokens) {
      return {
        typeUrl: "/zigchain.factory.MsgBurnTokens",
        value: MsgBurnTokens.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateParams",
        value
      };
    },
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/zigchain.factory.MsgCreateDenom",
        value
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/zigchain.factory.MsgSetDenomMetadata",
        value
      };
    },
    updateDenomURI(value: MsgUpdateDenomURI) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomURI",
        value
      };
    },
    updateDenomMaxSupply(value: MsgUpdateDenomMaxSupply) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupply",
        value
      };
    },
    updateDenomAuth(value: MsgUpdateDenomAuth) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomAuth",
        value
      };
    },
    updateDenomMetadataAuth(value: MsgUpdateDenomMetadataAuth) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuth",
        value
      };
    },
    mintAndSendTokens(value: MsgMintAndSendTokens) {
      return {
        typeUrl: "/zigchain.factory.MsgMintAndSendTokens",
        value
      };
    },
    burnTokens(value: MsgBurnTokens) {
      return {
        typeUrl: "/zigchain.factory.MsgBurnTokens",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/zigchain.factory.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/zigchain.factory.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    },
    updateDenomURI(value: MsgUpdateDenomURI) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomURI",
        value: MsgUpdateDenomURI.fromPartial(value)
      };
    },
    updateDenomMaxSupply(value: MsgUpdateDenomMaxSupply) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupply",
        value: MsgUpdateDenomMaxSupply.fromPartial(value)
      };
    },
    updateDenomAuth(value: MsgUpdateDenomAuth) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomAuth",
        value: MsgUpdateDenomAuth.fromPartial(value)
      };
    },
    updateDenomMetadataAuth(value: MsgUpdateDenomMetadataAuth) {
      return {
        typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuth",
        value: MsgUpdateDenomMetadataAuth.fromPartial(value)
      };
    },
    mintAndSendTokens(value: MsgMintAndSendTokens) {
      return {
        typeUrl: "/zigchain.factory.MsgMintAndSendTokens",
        value: MsgMintAndSendTokens.fromPartial(value)
      };
    },
    burnTokens(value: MsgBurnTokens) {
      return {
        typeUrl: "/zigchain.factory.MsgBurnTokens",
        value: MsgBurnTokens.fromPartial(value)
      };
    }
  }
};