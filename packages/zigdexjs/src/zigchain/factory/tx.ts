//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Metadata, MetadataAmino, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "zigchain/x/factory/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/zigchain.factory.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgCreateDenom used to create new denom via factory */
export interface MsgCreateDenom {
  creator: string;
  subDenom: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
  /** metadata */
  uRI: string;
  /** sha256 hash of the JSON metadata file */
  uRIHash: string;
}
export interface MsgCreateDenomProtoMsg {
  typeUrl: "/zigchain.factory.MsgCreateDenom";
  value: Uint8Array;
}
/** MsgCreateDenom used to create new denom via factory */
export interface MsgCreateDenomAmino {
  creator?: string;
  subDenom?: string;
  maxSupply: string;
  canChangeMaxSupply?: boolean;
  /** metadata */
  URI?: string;
  /** sha256 hash of the JSON metadata file */
  URIHash?: string;
}
export interface MsgCreateDenomAminoMsg {
  type: "/zigchain.factory.MsgCreateDenom";
  value: MsgCreateDenomAmino;
}
/** MsgCreateDenom used to create new denom via factory */
export interface MsgCreateDenomSDKType {
  creator: string;
  subDenom: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
  URI: string;
  URIHash: string;
}
/** MsgCreateDenomResponse is conformation on created denom. */
export interface MsgCreateDenomResponse {
  creator: string;
  bankAdmin: string;
  metadataAdmin: string;
  denom: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
  uRI: string;
  uRIHash: string;
}
export interface MsgCreateDenomResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgCreateDenomResponse";
  value: Uint8Array;
}
/** MsgCreateDenomResponse is conformation on created denom. */
export interface MsgCreateDenomResponseAmino {
  creator?: string;
  bankAdmin?: string;
  metadataAdmin?: string;
  denom?: string;
  maxSupply: string;
  canChangeMaxSupply?: boolean;
  URI?: string;
  URIHash?: string;
}
export interface MsgCreateDenomResponseAminoMsg {
  type: "/zigchain.factory.MsgCreateDenomResponse";
  value: MsgCreateDenomResponseAmino;
}
/** MsgCreateDenomResponse is conformation on created denom. */
export interface MsgCreateDenomResponseSDKType {
  creator: string;
  bankAdmin: string;
  metadataAdmin: string;
  denom: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
  URI: string;
  URIHash: string;
}
/** MsgMintAndSendTokens mints tokens and sends them to a recipient */
export interface MsgMintAndSendTokens {
  signer: string;
  token: Coin;
  recipient: string;
}
export interface MsgMintAndSendTokensProtoMsg {
  typeUrl: "/zigchain.factory.MsgMintAndSendTokens";
  value: Uint8Array;
}
/** MsgMintAndSendTokens mints tokens and sends them to a recipient */
export interface MsgMintAndSendTokensAmino {
  signer?: string;
  token?: CoinAmino;
  recipient?: string;
}
export interface MsgMintAndSendTokensAminoMsg {
  type: "/zigchain.factory.MsgMintAndSendTokens";
  value: MsgMintAndSendTokensAmino;
}
/** MsgMintAndSendTokens mints tokens and sends them to a recipient */
export interface MsgMintAndSendTokensSDKType {
  signer: string;
  token: CoinSDKType;
  recipient: string;
}
/** MsgMintAndSendTokensResponse is conformation on minted and sent tokens. */
export interface MsgMintAndSendTokensResponse {
  tokenMinted?: Coin;
  recipient: string;
  newSupply?: Coin;
}
export interface MsgMintAndSendTokensResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgMintAndSendTokensResponse";
  value: Uint8Array;
}
/** MsgMintAndSendTokensResponse is conformation on minted and sent tokens. */
export interface MsgMintAndSendTokensResponseAmino {
  tokenMinted?: CoinAmino;
  recipient?: string;
  newSupply?: CoinAmino;
}
export interface MsgMintAndSendTokensResponseAminoMsg {
  type: "/zigchain.factory.MsgMintAndSendTokensResponse";
  value: MsgMintAndSendTokensResponseAmino;
}
/** MsgMintAndSendTokensResponse is conformation on minted and sent tokens. */
export interface MsgMintAndSendTokensResponseSDKType {
  tokenMinted?: CoinSDKType;
  recipient: string;
  newSupply?: CoinSDKType;
}
/** MsgUpdateDenomAuth updates the admins address: bank, and metadata of a denom */
export interface MsgUpdateDenomAuth {
  signer: string;
  denom: string;
  bankAdmin: string;
  metadataAdmin: string;
}
export interface MsgUpdateDenomAuthProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateDenomAuth";
  value: Uint8Array;
}
/** MsgUpdateDenomAuth updates the admins address: bank, and metadata of a denom */
export interface MsgUpdateDenomAuthAmino {
  signer?: string;
  denom?: string;
  bankAdmin?: string;
  metadataAdmin?: string;
}
export interface MsgUpdateDenomAuthAminoMsg {
  type: "/zigchain.factory.MsgUpdateDenomAuth";
  value: MsgUpdateDenomAuthAmino;
}
/** MsgUpdateDenomAuth updates the admins address: bank, and metadata of a denom */
export interface MsgUpdateDenomAuthSDKType {
  signer: string;
  denom: string;
  bankAdmin: string;
  metadataAdmin: string;
}
/** MsgUpdateDenomAuthResponse is conformation on updated metadata. */
export interface MsgUpdateDenomAuthResponse {
  denom: string;
  bankAdmin: string;
  metadataAdmin: string;
}
export interface MsgUpdateDenomAuthResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateDenomAuthResponse";
  value: Uint8Array;
}
/** MsgUpdateDenomAuthResponse is conformation on updated metadata. */
export interface MsgUpdateDenomAuthResponseAmino {
  denom?: string;
  bankAdmin?: string;
  metadataAdmin?: string;
}
export interface MsgUpdateDenomAuthResponseAminoMsg {
  type: "/zigchain.factory.MsgUpdateDenomAuthResponse";
  value: MsgUpdateDenomAuthResponseAmino;
}
/** MsgUpdateDenomAuthResponse is conformation on updated metadata. */
export interface MsgUpdateDenomAuthResponseSDKType {
  denom: string;
  bankAdmin: string;
  metadataAdmin: string;
}
/** MsgUpdateDenomURI updates the URI of a denom and its sha256 hash */
export interface MsgUpdateDenomURI {
  signer: string;
  denom: string;
  uRI: string;
  uRIHash: string;
}
export interface MsgUpdateDenomURIProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateDenomURI";
  value: Uint8Array;
}
/** MsgUpdateDenomURI updates the URI of a denom and its sha256 hash */
export interface MsgUpdateDenomURIAmino {
  signer?: string;
  denom?: string;
  URI?: string;
  URIHash?: string;
}
export interface MsgUpdateDenomURIAminoMsg {
  type: "/zigchain.factory.MsgUpdateDenomURI";
  value: MsgUpdateDenomURIAmino;
}
/** MsgUpdateDenomURI updates the URI of a denom and its sha256 hash */
export interface MsgUpdateDenomURISDKType {
  signer: string;
  denom: string;
  URI: string;
  URIHash: string;
}
/** MsgUpdateDenomURIResponse is conformation on updated metadata. */
export interface MsgUpdateDenomURIResponse {
  denom: string;
  uRI: string;
  uRIHash: string;
}
export interface MsgUpdateDenomURIResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateDenomURIResponse";
  value: Uint8Array;
}
/** MsgUpdateDenomURIResponse is conformation on updated metadata. */
export interface MsgUpdateDenomURIResponseAmino {
  denom?: string;
  URI?: string;
  URIHash?: string;
}
export interface MsgUpdateDenomURIResponseAminoMsg {
  type: "/zigchain.factory.MsgUpdateDenomURIResponse";
  value: MsgUpdateDenomURIResponseAmino;
}
/** MsgUpdateDenomURIResponse is conformation on updated metadata. */
export interface MsgUpdateDenomURIResponseSDKType {
  denom: string;
  URI: string;
  URIHash: string;
}
/** MsgUpdateDenomMaxSupply updates the max supply and options o lock max supply changes on a denom */
export interface MsgUpdateDenomMaxSupply {
  signer: string;
  denom: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
}
export interface MsgUpdateDenomMaxSupplyProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupply";
  value: Uint8Array;
}
/** MsgUpdateDenomMaxSupply updates the max supply and options o lock max supply changes on a denom */
export interface MsgUpdateDenomMaxSupplyAmino {
  signer?: string;
  denom?: string;
  maxSupply: string;
  canChangeMaxSupply?: boolean;
}
export interface MsgUpdateDenomMaxSupplyAminoMsg {
  type: "/zigchain.factory.MsgUpdateDenomMaxSupply";
  value: MsgUpdateDenomMaxSupplyAmino;
}
/** MsgUpdateDenomMaxSupply updates the max supply and options o lock max supply changes on a denom */
export interface MsgUpdateDenomMaxSupplySDKType {
  signer: string;
  denom: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
}
/** MsgUpdateDenomMaxSupplyResponse is conformation on updated metadata. */
export interface MsgUpdateDenomMaxSupplyResponse {
  denom: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
}
export interface MsgUpdateDenomMaxSupplyResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupplyResponse";
  value: Uint8Array;
}
/** MsgUpdateDenomMaxSupplyResponse is conformation on updated metadata. */
export interface MsgUpdateDenomMaxSupplyResponseAmino {
  denom?: string;
  maxSupply: string;
  canChangeMaxSupply?: boolean;
}
export interface MsgUpdateDenomMaxSupplyResponseAminoMsg {
  type: "/zigchain.factory.MsgUpdateDenomMaxSupplyResponse";
  value: MsgUpdateDenomMaxSupplyResponseAmino;
}
/** MsgUpdateDenomMaxSupplyResponse is conformation on updated metadata. */
export interface MsgUpdateDenomMaxSupplyResponseSDKType {
  denom: string;
  maxSupply: string;
  canChangeMaxSupply: boolean;
}
/** MsgUpdateDenomMetadataAuth updates the metadata admin of a denom, needed for case when bank admin is disabled */
export interface MsgUpdateDenomMetadataAuth {
  signer: string;
  denom: string;
  metadataAdmin: string;
}
export interface MsgUpdateDenomMetadataAuthProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuth";
  value: Uint8Array;
}
/** MsgUpdateDenomMetadataAuth updates the metadata admin of a denom, needed for case when bank admin is disabled */
export interface MsgUpdateDenomMetadataAuthAmino {
  signer?: string;
  denom?: string;
  metadataAdmin?: string;
}
export interface MsgUpdateDenomMetadataAuthAminoMsg {
  type: "/zigchain.factory.MsgUpdateDenomMetadataAuth";
  value: MsgUpdateDenomMetadataAuthAmino;
}
/** MsgUpdateDenomMetadataAuth updates the metadata admin of a denom, needed for case when bank admin is disabled */
export interface MsgUpdateDenomMetadataAuthSDKType {
  signer: string;
  denom: string;
  metadataAdmin: string;
}
/** MsgUpdateDenomMetadataAuthResponse is conformation on updated metadata. */
export interface MsgUpdateDenomMetadataAuthResponse {
  denom: string;
  metadataAdmin: string;
}
export interface MsgUpdateDenomMetadataAuthResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuthResponse";
  value: Uint8Array;
}
/** MsgUpdateDenomMetadataAuthResponse is conformation on updated metadata. */
export interface MsgUpdateDenomMetadataAuthResponseAmino {
  denom?: string;
  metadataAdmin?: string;
}
export interface MsgUpdateDenomMetadataAuthResponseAminoMsg {
  type: "/zigchain.factory.MsgUpdateDenomMetadataAuthResponse";
  value: MsgUpdateDenomMetadataAuthResponseAmino;
}
/** MsgUpdateDenomMetadataAuthResponse is conformation on updated metadata. */
export interface MsgUpdateDenomMetadataAuthResponseSDKType {
  denom: string;
  metadataAdmin: string;
}
/** MsgBurnTokens burns tokens from the signer's account, signer has to be bank admin to do it. */
export interface MsgBurnTokens {
  signer: string;
  token: Coin;
}
export interface MsgBurnTokensProtoMsg {
  typeUrl: "/zigchain.factory.MsgBurnTokens";
  value: Uint8Array;
}
/** MsgBurnTokens burns tokens from the signer's account, signer has to be bank admin to do it. */
export interface MsgBurnTokensAmino {
  signer?: string;
  token?: CoinAmino;
}
export interface MsgBurnTokensAminoMsg {
  type: "/zigchain.factory.MsgBurnTokens";
  value: MsgBurnTokensAmino;
}
/** MsgBurnTokens burns tokens from the signer's account, signer has to be bank admin to do it. */
export interface MsgBurnTokensSDKType {
  signer: string;
  token: CoinSDKType;
}
/** MsgBurnTokensResponse is conformation on burned tokens. */
export interface MsgBurnTokensResponse {
  amountBurned: Coin;
}
export interface MsgBurnTokensResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgBurnTokensResponse";
  value: Uint8Array;
}
/** MsgBurnTokensResponse is conformation on burned tokens. */
export interface MsgBurnTokensResponseAmino {
  amountBurned?: CoinAmino;
}
export interface MsgBurnTokensResponseAminoMsg {
  type: "/zigchain.factory.MsgBurnTokensResponse";
  value: MsgBurnTokensResponseAmino;
}
/** MsgBurnTokensResponse is conformation on burned tokens. */
export interface MsgBurnTokensResponseSDKType {
  amountBurned: CoinSDKType;
}
/**
 * REPLACE_TS_CLIENT_FIX_FROM_BODY
 * MsgSetDenomMetadata sets the metadata of a token
 */
export interface MsgSetDenomMetadata {
  signer: string;
  /** Uncomment me for ts-client, until better solution is found */
  metadata: Metadata;
}
export interface MsgSetDenomMetadataProtoMsg {
  typeUrl: "/zigchain.factory.MsgSetDenomMetadata";
  value: Uint8Array;
}
/**
 * REPLACE_TS_CLIENT_FIX_FROM_BODY
 * MsgSetDenomMetadata sets the metadata of a token
 */
export interface MsgSetDenomMetadataAmino {
  signer?: string;
  /** Uncomment me for ts-client, until better solution is found */
  metadata?: MetadataAmino;
}
export interface MsgSetDenomMetadataAminoMsg {
  type: "/zigchain.factory.MsgSetDenomMetadata";
  value: MsgSetDenomMetadataAmino;
}
/**
 * REPLACE_TS_CLIENT_FIX_FROM_BODY
 * MsgSetDenomMetadata sets the metadata of a token
 */
export interface MsgSetDenomMetadataSDKType {
  signer: string;
  metadata: MetadataSDKType;
}
/** MsgSetDenomMetadataResponse is conformation on updated metadata. */
export interface MsgSetDenomMetadataResponse {
  /** Uncomment me for ts-client, until better solution is found */
  metadata?: Metadata;
}
export interface MsgSetDenomMetadataResponseProtoMsg {
  typeUrl: "/zigchain.factory.MsgSetDenomMetadataResponse";
  value: Uint8Array;
}
/** MsgSetDenomMetadataResponse is conformation on updated metadata. */
export interface MsgSetDenomMetadataResponseAmino {
  /** Uncomment me for ts-client, until better solution is found */
  metadata?: MetadataAmino;
}
export interface MsgSetDenomMetadataResponseAminoMsg {
  type: "/zigchain.factory.MsgSetDenomMetadataResponse";
  value: MsgSetDenomMetadataResponseAmino;
}
/** MsgSetDenomMetadataResponse is conformation on updated metadata. */
export interface MsgSetDenomMetadataResponseSDKType {
  metadata?: MetadataSDKType;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/zigchain.factory.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "zigchain/x/factory/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/zigchain.factory.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    creator: "",
    subDenom: "",
    maxSupply: "",
    canChangeMaxSupply: false,
    uRI: "",
    uRIHash: ""
  };
}
export const MsgCreateDenom = {
  typeUrl: "/zigchain.factory.MsgCreateDenom",
  encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subDenom !== "") {
      writer.uint32(18).string(message.subDenom);
    }
    if (message.maxSupply !== "") {
      writer.uint32(26).string(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(32).bool(message.canChangeMaxSupply);
    }
    if (message.uRI !== "") {
      writer.uint32(42).string(message.uRI);
    }
    if (message.uRIHash !== "") {
      writer.uint32(50).string(message.uRIHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subDenom = reader.string();
          break;
        case 3:
          message.maxSupply = reader.string();
          break;
        case 4:
          message.canChangeMaxSupply = reader.bool();
          break;
        case 5:
          message.uRI = reader.string();
          break;
        case 6:
          message.uRIHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.creator = object.creator ?? "";
    message.subDenom = object.subDenom ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    message.uRI = object.uRI ?? "";
    message.uRIHash = object.uRIHash ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.subDenom !== undefined && object.subDenom !== null) {
      message.subDenom = object.subDenom;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply;
    }
    if (object.URI !== undefined && object.URI !== null) {
      message.uRI = object.URI;
    }
    if (object.URIHash !== undefined && object.URIHash !== null) {
      message.uRIHash = object.URIHash;
    }
    return message;
  },
  toAmino(message: MsgCreateDenom): MsgCreateDenomAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.subDenom = message.subDenom === "" ? undefined : message.subDenom;
    obj.maxSupply = message.maxSupply ?? "";
    obj.canChangeMaxSupply = message.canChangeMaxSupply === false ? undefined : message.canChangeMaxSupply;
    obj.URI = message.uRI === "" ? undefined : message.uRI;
    obj.URIHash = message.uRIHash === "" ? undefined : message.uRIHash;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom {
    return MsgCreateDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom {
    return MsgCreateDenom.decode(message.value);
  },
  toProto(message: MsgCreateDenom): Uint8Array {
    return MsgCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgCreateDenom",
      value: MsgCreateDenom.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    creator: "",
    bankAdmin: "",
    metadataAdmin: "",
    denom: "",
    maxSupply: "",
    canChangeMaxSupply: false,
    uRI: "",
    uRIHash: ""
  };
}
export const MsgCreateDenomResponse = {
  typeUrl: "/zigchain.factory.MsgCreateDenomResponse",
  encode(message: MsgCreateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bankAdmin !== "") {
      writer.uint32(18).string(message.bankAdmin);
    }
    if (message.metadataAdmin !== "") {
      writer.uint32(26).string(message.metadataAdmin);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.maxSupply !== "") {
      writer.uint32(42).string(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(48).bool(message.canChangeMaxSupply);
    }
    if (message.uRI !== "") {
      writer.uint32(58).string(message.uRI);
    }
    if (message.uRIHash !== "") {
      writer.uint32(66).string(message.uRIHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bankAdmin = reader.string();
          break;
        case 3:
          message.metadataAdmin = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.maxSupply = reader.string();
          break;
        case 6:
          message.canChangeMaxSupply = reader.bool();
          break;
        case 7:
          message.uRI = reader.string();
          break;
        case 8:
          message.uRIHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.creator = object.creator ?? "";
    message.bankAdmin = object.bankAdmin ?? "";
    message.metadataAdmin = object.metadataAdmin ?? "";
    message.denom = object.denom ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    message.uRI = object.uRI ?? "";
    message.uRIHash = object.uRIHash ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bankAdmin !== undefined && object.bankAdmin !== null) {
      message.bankAdmin = object.bankAdmin;
    }
    if (object.metadataAdmin !== undefined && object.metadataAdmin !== null) {
      message.metadataAdmin = object.metadataAdmin;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply;
    }
    if (object.URI !== undefined && object.URI !== null) {
      message.uRI = object.URI;
    }
    if (object.URIHash !== undefined && object.URIHash !== null) {
      message.uRIHash = object.URIHash;
    }
    return message;
  },
  toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bankAdmin = message.bankAdmin === "" ? undefined : message.bankAdmin;
    obj.metadataAdmin = message.metadataAdmin === "" ? undefined : message.metadataAdmin;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.maxSupply = message.maxSupply ?? "";
    obj.canChangeMaxSupply = message.canChangeMaxSupply === false ? undefined : message.canChangeMaxSupply;
    obj.URI = message.uRI === "" ? undefined : message.uRI;
    obj.URIHash = message.uRIHash === "" ? undefined : message.uRIHash;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomResponse): Uint8Array {
    return MsgCreateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgCreateDenomResponse",
      value: MsgCreateDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintAndSendTokens(): MsgMintAndSendTokens {
  return {
    signer: "",
    token: Coin.fromPartial({}),
    recipient: ""
  };
}
export const MsgMintAndSendTokens = {
  typeUrl: "/zigchain.factory.MsgMintAndSendTokens",
  encode(message: MsgMintAndSendTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintAndSendTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintAndSendTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMintAndSendTokens>): MsgMintAndSendTokens {
    const message = createBaseMsgMintAndSendTokens();
    message.signer = object.signer ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgMintAndSendTokensAmino): MsgMintAndSendTokens {
    const message = createBaseMsgMintAndSendTokens();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgMintAndSendTokens): MsgMintAndSendTokensAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgMintAndSendTokensAminoMsg): MsgMintAndSendTokens {
    return MsgMintAndSendTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintAndSendTokensProtoMsg): MsgMintAndSendTokens {
    return MsgMintAndSendTokens.decode(message.value);
  },
  toProto(message: MsgMintAndSendTokens): Uint8Array {
    return MsgMintAndSendTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgMintAndSendTokens): MsgMintAndSendTokensProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgMintAndSendTokens",
      value: MsgMintAndSendTokens.encode(message).finish()
    };
  }
};
function createBaseMsgMintAndSendTokensResponse(): MsgMintAndSendTokensResponse {
  return {
    tokenMinted: undefined,
    recipient: "",
    newSupply: undefined
  };
}
export const MsgMintAndSendTokensResponse = {
  typeUrl: "/zigchain.factory.MsgMintAndSendTokensResponse",
  encode(message: MsgMintAndSendTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenMinted !== undefined) {
      Coin.encode(message.tokenMinted, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.newSupply !== undefined) {
      Coin.encode(message.newSupply, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintAndSendTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintAndSendTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenMinted = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.newSupply = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMintAndSendTokensResponse>): MsgMintAndSendTokensResponse {
    const message = createBaseMsgMintAndSendTokensResponse();
    message.tokenMinted = object.tokenMinted !== undefined && object.tokenMinted !== null ? Coin.fromPartial(object.tokenMinted) : undefined;
    message.recipient = object.recipient ?? "";
    message.newSupply = object.newSupply !== undefined && object.newSupply !== null ? Coin.fromPartial(object.newSupply) : undefined;
    return message;
  },
  fromAmino(object: MsgMintAndSendTokensResponseAmino): MsgMintAndSendTokensResponse {
    const message = createBaseMsgMintAndSendTokensResponse();
    if (object.tokenMinted !== undefined && object.tokenMinted !== null) {
      message.tokenMinted = Coin.fromAmino(object.tokenMinted);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.newSupply !== undefined && object.newSupply !== null) {
      message.newSupply = Coin.fromAmino(object.newSupply);
    }
    return message;
  },
  toAmino(message: MsgMintAndSendTokensResponse): MsgMintAndSendTokensResponseAmino {
    const obj: any = {};
    obj.tokenMinted = message.tokenMinted ? Coin.toAmino(message.tokenMinted) : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.newSupply = message.newSupply ? Coin.toAmino(message.newSupply) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintAndSendTokensResponseAminoMsg): MsgMintAndSendTokensResponse {
    return MsgMintAndSendTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintAndSendTokensResponseProtoMsg): MsgMintAndSendTokensResponse {
    return MsgMintAndSendTokensResponse.decode(message.value);
  },
  toProto(message: MsgMintAndSendTokensResponse): Uint8Array {
    return MsgMintAndSendTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintAndSendTokensResponse): MsgMintAndSendTokensResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgMintAndSendTokensResponse",
      value: MsgMintAndSendTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomAuth(): MsgUpdateDenomAuth {
  return {
    signer: "",
    denom: "",
    bankAdmin: "",
    metadataAdmin: ""
  };
}
export const MsgUpdateDenomAuth = {
  typeUrl: "/zigchain.factory.MsgUpdateDenomAuth",
  encode(message: MsgUpdateDenomAuth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.bankAdmin !== "") {
      writer.uint32(26).string(message.bankAdmin);
    }
    if (message.metadataAdmin !== "") {
      writer.uint32(34).string(message.metadataAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomAuth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.bankAdmin = reader.string();
          break;
        case 4:
          message.metadataAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomAuth>): MsgUpdateDenomAuth {
    const message = createBaseMsgUpdateDenomAuth();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.bankAdmin = object.bankAdmin ?? "";
    message.metadataAdmin = object.metadataAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDenomAuthAmino): MsgUpdateDenomAuth {
    const message = createBaseMsgUpdateDenomAuth();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.bankAdmin !== undefined && object.bankAdmin !== null) {
      message.bankAdmin = object.bankAdmin;
    }
    if (object.metadataAdmin !== undefined && object.metadataAdmin !== null) {
      message.metadataAdmin = object.metadataAdmin;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomAuth): MsgUpdateDenomAuthAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.bankAdmin = message.bankAdmin === "" ? undefined : message.bankAdmin;
    obj.metadataAdmin = message.metadataAdmin === "" ? undefined : message.metadataAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomAuthAminoMsg): MsgUpdateDenomAuth {
    return MsgUpdateDenomAuth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomAuthProtoMsg): MsgUpdateDenomAuth {
    return MsgUpdateDenomAuth.decode(message.value);
  },
  toProto(message: MsgUpdateDenomAuth): Uint8Array {
    return MsgUpdateDenomAuth.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomAuth): MsgUpdateDenomAuthProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateDenomAuth",
      value: MsgUpdateDenomAuth.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomAuthResponse(): MsgUpdateDenomAuthResponse {
  return {
    denom: "",
    bankAdmin: "",
    metadataAdmin: ""
  };
}
export const MsgUpdateDenomAuthResponse = {
  typeUrl: "/zigchain.factory.MsgUpdateDenomAuthResponse",
  encode(message: MsgUpdateDenomAuthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.bankAdmin !== "") {
      writer.uint32(18).string(message.bankAdmin);
    }
    if (message.metadataAdmin !== "") {
      writer.uint32(26).string(message.metadataAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomAuthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.bankAdmin = reader.string();
          break;
        case 3:
          message.metadataAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomAuthResponse>): MsgUpdateDenomAuthResponse {
    const message = createBaseMsgUpdateDenomAuthResponse();
    message.denom = object.denom ?? "";
    message.bankAdmin = object.bankAdmin ?? "";
    message.metadataAdmin = object.metadataAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDenomAuthResponseAmino): MsgUpdateDenomAuthResponse {
    const message = createBaseMsgUpdateDenomAuthResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.bankAdmin !== undefined && object.bankAdmin !== null) {
      message.bankAdmin = object.bankAdmin;
    }
    if (object.metadataAdmin !== undefined && object.metadataAdmin !== null) {
      message.metadataAdmin = object.metadataAdmin;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomAuthResponse): MsgUpdateDenomAuthResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.bankAdmin = message.bankAdmin === "" ? undefined : message.bankAdmin;
    obj.metadataAdmin = message.metadataAdmin === "" ? undefined : message.metadataAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomAuthResponseAminoMsg): MsgUpdateDenomAuthResponse {
    return MsgUpdateDenomAuthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomAuthResponseProtoMsg): MsgUpdateDenomAuthResponse {
    return MsgUpdateDenomAuthResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDenomAuthResponse): Uint8Array {
    return MsgUpdateDenomAuthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomAuthResponse): MsgUpdateDenomAuthResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateDenomAuthResponse",
      value: MsgUpdateDenomAuthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomURI(): MsgUpdateDenomURI {
  return {
    signer: "",
    denom: "",
    uRI: "",
    uRIHash: ""
  };
}
export const MsgUpdateDenomURI = {
  typeUrl: "/zigchain.factory.MsgUpdateDenomURI",
  encode(message: MsgUpdateDenomURI, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.uRI !== "") {
      writer.uint32(26).string(message.uRI);
    }
    if (message.uRIHash !== "") {
      writer.uint32(34).string(message.uRIHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomURI {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomURI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.uRI = reader.string();
          break;
        case 4:
          message.uRIHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomURI>): MsgUpdateDenomURI {
    const message = createBaseMsgUpdateDenomURI();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.uRI = object.uRI ?? "";
    message.uRIHash = object.uRIHash ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDenomURIAmino): MsgUpdateDenomURI {
    const message = createBaseMsgUpdateDenomURI();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.URI !== undefined && object.URI !== null) {
      message.uRI = object.URI;
    }
    if (object.URIHash !== undefined && object.URIHash !== null) {
      message.uRIHash = object.URIHash;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomURI): MsgUpdateDenomURIAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.URI = message.uRI === "" ? undefined : message.uRI;
    obj.URIHash = message.uRIHash === "" ? undefined : message.uRIHash;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomURIAminoMsg): MsgUpdateDenomURI {
    return MsgUpdateDenomURI.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomURIProtoMsg): MsgUpdateDenomURI {
    return MsgUpdateDenomURI.decode(message.value);
  },
  toProto(message: MsgUpdateDenomURI): Uint8Array {
    return MsgUpdateDenomURI.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomURI): MsgUpdateDenomURIProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateDenomURI",
      value: MsgUpdateDenomURI.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomURIResponse(): MsgUpdateDenomURIResponse {
  return {
    denom: "",
    uRI: "",
    uRIHash: ""
  };
}
export const MsgUpdateDenomURIResponse = {
  typeUrl: "/zigchain.factory.MsgUpdateDenomURIResponse",
  encode(message: MsgUpdateDenomURIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.uRI !== "") {
      writer.uint32(18).string(message.uRI);
    }
    if (message.uRIHash !== "") {
      writer.uint32(26).string(message.uRIHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomURIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomURIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.uRI = reader.string();
          break;
        case 3:
          message.uRIHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomURIResponse>): MsgUpdateDenomURIResponse {
    const message = createBaseMsgUpdateDenomURIResponse();
    message.denom = object.denom ?? "";
    message.uRI = object.uRI ?? "";
    message.uRIHash = object.uRIHash ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDenomURIResponseAmino): MsgUpdateDenomURIResponse {
    const message = createBaseMsgUpdateDenomURIResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.URI !== undefined && object.URI !== null) {
      message.uRI = object.URI;
    }
    if (object.URIHash !== undefined && object.URIHash !== null) {
      message.uRIHash = object.URIHash;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomURIResponse): MsgUpdateDenomURIResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.URI = message.uRI === "" ? undefined : message.uRI;
    obj.URIHash = message.uRIHash === "" ? undefined : message.uRIHash;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomURIResponseAminoMsg): MsgUpdateDenomURIResponse {
    return MsgUpdateDenomURIResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomURIResponseProtoMsg): MsgUpdateDenomURIResponse {
    return MsgUpdateDenomURIResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDenomURIResponse): Uint8Array {
    return MsgUpdateDenomURIResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomURIResponse): MsgUpdateDenomURIResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateDenomURIResponse",
      value: MsgUpdateDenomURIResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomMaxSupply(): MsgUpdateDenomMaxSupply {
  return {
    signer: "",
    denom: "",
    maxSupply: "",
    canChangeMaxSupply: false
  };
}
export const MsgUpdateDenomMaxSupply = {
  typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupply",
  encode(message: MsgUpdateDenomMaxSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.maxSupply !== "") {
      writer.uint32(26).string(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(32).bool(message.canChangeMaxSupply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomMaxSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomMaxSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.maxSupply = reader.string();
          break;
        case 4:
          message.canChangeMaxSupply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomMaxSupply>): MsgUpdateDenomMaxSupply {
    const message = createBaseMsgUpdateDenomMaxSupply();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateDenomMaxSupplyAmino): MsgUpdateDenomMaxSupply {
    const message = createBaseMsgUpdateDenomMaxSupply();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomMaxSupply): MsgUpdateDenomMaxSupplyAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.maxSupply = message.maxSupply ?? "";
    obj.canChangeMaxSupply = message.canChangeMaxSupply === false ? undefined : message.canChangeMaxSupply;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomMaxSupplyAminoMsg): MsgUpdateDenomMaxSupply {
    return MsgUpdateDenomMaxSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomMaxSupplyProtoMsg): MsgUpdateDenomMaxSupply {
    return MsgUpdateDenomMaxSupply.decode(message.value);
  },
  toProto(message: MsgUpdateDenomMaxSupply): Uint8Array {
    return MsgUpdateDenomMaxSupply.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomMaxSupply): MsgUpdateDenomMaxSupplyProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupply",
      value: MsgUpdateDenomMaxSupply.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomMaxSupplyResponse(): MsgUpdateDenomMaxSupplyResponse {
  return {
    denom: "",
    maxSupply: "",
    canChangeMaxSupply: false
  };
}
export const MsgUpdateDenomMaxSupplyResponse = {
  typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupplyResponse",
  encode(message: MsgUpdateDenomMaxSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.maxSupply !== "") {
      writer.uint32(18).string(message.maxSupply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(24).bool(message.canChangeMaxSupply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomMaxSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomMaxSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.maxSupply = reader.string();
          break;
        case 3:
          message.canChangeMaxSupply = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomMaxSupplyResponse>): MsgUpdateDenomMaxSupplyResponse {
    const message = createBaseMsgUpdateDenomMaxSupplyResponse();
    message.denom = object.denom ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateDenomMaxSupplyResponseAmino): MsgUpdateDenomMaxSupplyResponse {
    const message = createBaseMsgUpdateDenomMaxSupplyResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply;
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomMaxSupplyResponse): MsgUpdateDenomMaxSupplyResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.maxSupply = message.maxSupply ?? "";
    obj.canChangeMaxSupply = message.canChangeMaxSupply === false ? undefined : message.canChangeMaxSupply;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomMaxSupplyResponseAminoMsg): MsgUpdateDenomMaxSupplyResponse {
    return MsgUpdateDenomMaxSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomMaxSupplyResponseProtoMsg): MsgUpdateDenomMaxSupplyResponse {
    return MsgUpdateDenomMaxSupplyResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDenomMaxSupplyResponse): Uint8Array {
    return MsgUpdateDenomMaxSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomMaxSupplyResponse): MsgUpdateDenomMaxSupplyResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateDenomMaxSupplyResponse",
      value: MsgUpdateDenomMaxSupplyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomMetadataAuth(): MsgUpdateDenomMetadataAuth {
  return {
    signer: "",
    denom: "",
    metadataAdmin: ""
  };
}
export const MsgUpdateDenomMetadataAuth = {
  typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuth",
  encode(message: MsgUpdateDenomMetadataAuth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.metadataAdmin !== "") {
      writer.uint32(26).string(message.metadataAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomMetadataAuth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomMetadataAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.metadataAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomMetadataAuth>): MsgUpdateDenomMetadataAuth {
    const message = createBaseMsgUpdateDenomMetadataAuth();
    message.signer = object.signer ?? "";
    message.denom = object.denom ?? "";
    message.metadataAdmin = object.metadataAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDenomMetadataAuthAmino): MsgUpdateDenomMetadataAuth {
    const message = createBaseMsgUpdateDenomMetadataAuth();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.metadataAdmin !== undefined && object.metadataAdmin !== null) {
      message.metadataAdmin = object.metadataAdmin;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomMetadataAuth): MsgUpdateDenomMetadataAuthAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.metadataAdmin = message.metadataAdmin === "" ? undefined : message.metadataAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomMetadataAuthAminoMsg): MsgUpdateDenomMetadataAuth {
    return MsgUpdateDenomMetadataAuth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomMetadataAuthProtoMsg): MsgUpdateDenomMetadataAuth {
    return MsgUpdateDenomMetadataAuth.decode(message.value);
  },
  toProto(message: MsgUpdateDenomMetadataAuth): Uint8Array {
    return MsgUpdateDenomMetadataAuth.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomMetadataAuth): MsgUpdateDenomMetadataAuthProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuth",
      value: MsgUpdateDenomMetadataAuth.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDenomMetadataAuthResponse(): MsgUpdateDenomMetadataAuthResponse {
  return {
    denom: "",
    metadataAdmin: ""
  };
}
export const MsgUpdateDenomMetadataAuthResponse = {
  typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuthResponse",
  encode(message: MsgUpdateDenomMetadataAuthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.metadataAdmin !== "") {
      writer.uint32(18).string(message.metadataAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomMetadataAuthResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomMetadataAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.metadataAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateDenomMetadataAuthResponse>): MsgUpdateDenomMetadataAuthResponse {
    const message = createBaseMsgUpdateDenomMetadataAuthResponse();
    message.denom = object.denom ?? "";
    message.metadataAdmin = object.metadataAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDenomMetadataAuthResponseAmino): MsgUpdateDenomMetadataAuthResponse {
    const message = createBaseMsgUpdateDenomMetadataAuthResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.metadataAdmin !== undefined && object.metadataAdmin !== null) {
      message.metadataAdmin = object.metadataAdmin;
    }
    return message;
  },
  toAmino(message: MsgUpdateDenomMetadataAuthResponse): MsgUpdateDenomMetadataAuthResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.metadataAdmin = message.metadataAdmin === "" ? undefined : message.metadataAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDenomMetadataAuthResponseAminoMsg): MsgUpdateDenomMetadataAuthResponse {
    return MsgUpdateDenomMetadataAuthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDenomMetadataAuthResponseProtoMsg): MsgUpdateDenomMetadataAuthResponse {
    return MsgUpdateDenomMetadataAuthResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDenomMetadataAuthResponse): Uint8Array {
    return MsgUpdateDenomMetadataAuthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDenomMetadataAuthResponse): MsgUpdateDenomMetadataAuthResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgUpdateDenomMetadataAuthResponse",
      value: MsgUpdateDenomMetadataAuthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnTokens(): MsgBurnTokens {
  return {
    signer: "",
    token: Coin.fromPartial({})
  };
}
export const MsgBurnTokens = {
  typeUrl: "/zigchain.factory.MsgBurnTokens",
  encode(message: MsgBurnTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurnTokens>): MsgBurnTokens {
    const message = createBaseMsgBurnTokens();
    message.signer = object.signer ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnTokensAmino): MsgBurnTokens {
    const message = createBaseMsgBurnTokens();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: MsgBurnTokens): MsgBurnTokensAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBurnTokensAminoMsg): MsgBurnTokens {
    return MsgBurnTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnTokensProtoMsg): MsgBurnTokens {
    return MsgBurnTokens.decode(message.value);
  },
  toProto(message: MsgBurnTokens): Uint8Array {
    return MsgBurnTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnTokens): MsgBurnTokensProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgBurnTokens",
      value: MsgBurnTokens.encode(message).finish()
    };
  }
};
function createBaseMsgBurnTokensResponse(): MsgBurnTokensResponse {
  return {
    amountBurned: Coin.fromPartial({})
  };
}
export const MsgBurnTokensResponse = {
  typeUrl: "/zigchain.factory.MsgBurnTokensResponse",
  encode(message: MsgBurnTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountBurned !== undefined) {
      Coin.encode(message.amountBurned, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountBurned = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurnTokensResponse>): MsgBurnTokensResponse {
    const message = createBaseMsgBurnTokensResponse();
    message.amountBurned = object.amountBurned !== undefined && object.amountBurned !== null ? Coin.fromPartial(object.amountBurned) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnTokensResponseAmino): MsgBurnTokensResponse {
    const message = createBaseMsgBurnTokensResponse();
    if (object.amountBurned !== undefined && object.amountBurned !== null) {
      message.amountBurned = Coin.fromAmino(object.amountBurned);
    }
    return message;
  },
  toAmino(message: MsgBurnTokensResponse): MsgBurnTokensResponseAmino {
    const obj: any = {};
    obj.amountBurned = message.amountBurned ? Coin.toAmino(message.amountBurned) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBurnTokensResponseAminoMsg): MsgBurnTokensResponse {
    return MsgBurnTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnTokensResponseProtoMsg): MsgBurnTokensResponse {
    return MsgBurnTokensResponse.decode(message.value);
  },
  toProto(message: MsgBurnTokensResponse): Uint8Array {
    return MsgBurnTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnTokensResponse): MsgBurnTokensResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgBurnTokensResponse",
      value: MsgBurnTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return {
    signer: "",
    metadata: Metadata.fromPartial({})
  };
}
export const MsgSetDenomMetadata = {
  typeUrl: "/zigchain.factory.MsgSetDenomMetadata",
  encode(message: MsgSetDenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDenomMetadata>): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.signer = object.signer ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadata): Uint8Array {
    return MsgSetDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgSetDenomMetadata",
      value: MsgSetDenomMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {
    metadata: undefined
  };
}
export const MsgSetDenomMetadataResponse = {
  typeUrl: "/zigchain.factory.MsgSetDenomMetadataResponse",
  encode(message: MsgSetDenomMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataResponseAminoMsg): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadataResponse): Uint8Array {
    return MsgSetDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg {
    return {
      typeUrl: "/zigchain.factory.MsgSetDenomMetadataResponse",
      value: MsgSetDenomMetadataResponse.encode(message).finish()
    };
  }
};