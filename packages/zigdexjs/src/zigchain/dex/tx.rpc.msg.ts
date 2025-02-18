//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreatePool, MsgCreatePoolResponse, MsgSwap, MsgSwapResponse, MsgAddLiquidity, MsgAddLiquidityResponse, MsgRemoveLiquidity, MsgRemoveLiquidityResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** CreatePool create new pool from base and quote tokens */
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  /** Swap swaps tokens from one to another */
  swap(request: MsgSwap): Promise<MsgSwapResponse>;
  /** AddLiquidity adds liquidity to the pool, from the base and quote tokens send in */
  addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
  /** RemoveLiquidity removes liquidity from the pool, from the lptoken send in */
  removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createPool = this.createPool.bind(this);
    this.swap = this.swap.bind(this);
    this.addLiquidity = this.addLiquidity.bind(this);
    this.removeLiquidity = this.removeLiquidity.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new BinaryReader(data)));
  }
  swap(request: MsgSwap): Promise<MsgSwapResponse> {
    const data = MsgSwap.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Msg", "Swap", data);
    return promise.then(data => MsgSwapResponse.decode(new BinaryReader(data)));
  }
  addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Msg", "AddLiquidity", data);
    return promise.then(data => MsgAddLiquidityResponse.decode(new BinaryReader(data)));
  }
  removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse> {
    const data = MsgRemoveLiquidity.encode(request).finish();
    const promise = this.rpc.request("zigchain.dex.Msg", "RemoveLiquidity", data);
    return promise.then(data => MsgRemoveLiquidityResponse.decode(new BinaryReader(data)));
  }
}