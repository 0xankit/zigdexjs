//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateDenom, MsgCreateDenomResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgUpdateDenomURI, MsgUpdateDenomURIResponse, MsgUpdateDenomMaxSupply, MsgUpdateDenomMaxSupplyResponse, MsgUpdateDenomAuth, MsgUpdateDenomAuthResponse, MsgUpdateDenomMetadataAuth, MsgUpdateDenomMetadataAuthResponse, MsgMintAndSendTokens, MsgMintAndSendTokensResponse, MsgBurnTokens, MsgBurnTokensResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** Create token */
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  /** Set the metadata of a denom */
  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
  /** UpdateDenomURI updates the URI of a denom and its sha256 hash, only bank admin can do it. */
  updateDenomURI(request: MsgUpdateDenomURI): Promise<MsgUpdateDenomURIResponse>;
  /** UpdateDenomMaxSupply updates the max supply and options o lock max supply changes on a denom, only bank admin can do it. */
  updateDenomMaxSupply(request: MsgUpdateDenomMaxSupply): Promise<MsgUpdateDenomMaxSupplyResponse>;
  /** UpdateDenomAuth updates the admins address: bank, and metadata of a denom, only bank admin can do it. */
  updateDenomAuth(request: MsgUpdateDenomAuth): Promise<MsgUpdateDenomAuthResponse>;
  /** UpdateDenomMetadataAuth updates the metadata admin of a denom, needed for case when bank admin is disabled */
  updateDenomMetadataAuth(request: MsgUpdateDenomMetadataAuth): Promise<MsgUpdateDenomMetadataAuthResponse>;
  /** Mint and send tokens to a recipient */
  mintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>;
  /** BurnTokens - Burn tokens from the signer's account, signer has to be bank admin to do it. */
  burnTokens(request: MsgBurnTokens): Promise<MsgBurnTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createDenom = this.createDenom.bind(this);
    this.setDenomMetadata = this.setDenomMetadata.bind(this);
    this.updateDenomURI = this.updateDenomURI.bind(this);
    this.updateDenomMaxSupply = this.updateDenomMaxSupply.bind(this);
    this.updateDenomAuth = this.updateDenomAuth.bind(this);
    this.updateDenomMetadataAuth = this.updateDenomMetadataAuth.bind(this);
    this.mintAndSendTokens = this.mintAndSendTokens.bind(this);
    this.burnTokens = this.burnTokens.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new BinaryReader(data)));
  }
  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse> {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "SetDenomMetadata", data);
    return promise.then(data => MsgSetDenomMetadataResponse.decode(new BinaryReader(data)));
  }
  updateDenomURI(request: MsgUpdateDenomURI): Promise<MsgUpdateDenomURIResponse> {
    const data = MsgUpdateDenomURI.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "UpdateDenomURI", data);
    return promise.then(data => MsgUpdateDenomURIResponse.decode(new BinaryReader(data)));
  }
  updateDenomMaxSupply(request: MsgUpdateDenomMaxSupply): Promise<MsgUpdateDenomMaxSupplyResponse> {
    const data = MsgUpdateDenomMaxSupply.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "UpdateDenomMaxSupply", data);
    return promise.then(data => MsgUpdateDenomMaxSupplyResponse.decode(new BinaryReader(data)));
  }
  updateDenomAuth(request: MsgUpdateDenomAuth): Promise<MsgUpdateDenomAuthResponse> {
    const data = MsgUpdateDenomAuth.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "UpdateDenomAuth", data);
    return promise.then(data => MsgUpdateDenomAuthResponse.decode(new BinaryReader(data)));
  }
  updateDenomMetadataAuth(request: MsgUpdateDenomMetadataAuth): Promise<MsgUpdateDenomMetadataAuthResponse> {
    const data = MsgUpdateDenomMetadataAuth.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "UpdateDenomMetadataAuth", data);
    return promise.then(data => MsgUpdateDenomMetadataAuthResponse.decode(new BinaryReader(data)));
  }
  mintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse> {
    const data = MsgMintAndSendTokens.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "MintAndSendTokens", data);
    return promise.then(data => MsgMintAndSendTokensResponse.decode(new BinaryReader(data)));
  }
  burnTokens(request: MsgBurnTokens): Promise<MsgBurnTokensResponse> {
    const data = MsgBurnTokens.encode(request).finish();
    const promise = this.rpc.request("zigchain.factory.Msg", "BurnTokens", data);
    return promise.then(data => MsgBurnTokensResponse.decode(new BinaryReader(data)));
  }
}