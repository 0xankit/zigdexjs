//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, TakerFeesTracker, TakerFeesTrackerAmino, TakerFeesTrackerSDKType, PoolVolume, PoolVolumeAmino, PoolVolumeSDKType } from "./params";
import { ModuleRoute, ModuleRouteAmino, ModuleRouteSDKType } from "./module_route";
import { DenomPairTakerFee, DenomPairTakerFeeAmino, DenomPairTakerFeeSDKType } from "./tx";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisState {
  /** the next_pool_id */
  nextPoolId: bigint;
  /** params is the container of poolmanager parameters. */
  params: Params;
  /** pool_routes is the container of the mappings from pool id to pool type. */
  poolRoutes: ModuleRoute[];
  /** KVStore state */
  takerFeesTracker?: TakerFeesTracker;
  poolVolumes: PoolVolume[];
  denomPairTakerFeeStore: DenomPairTakerFee[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/zigchain.poolmanager.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateAmino {
  /** the next_pool_id */
  next_pool_id?: string;
  /** params is the container of poolmanager parameters. */
  params?: ParamsAmino;
  /** pool_routes is the container of the mappings from pool id to pool type. */
  pool_routes?: ModuleRouteAmino[];
  /** KVStore state */
  taker_fees_tracker?: TakerFeesTrackerAmino;
  pool_volumes?: PoolVolumeAmino[];
  denom_pair_taker_fee_store?: DenomPairTakerFeeAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/zigchain.poolmanager.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the poolmanager module's genesis state. */
export interface GenesisStateSDKType {
  next_pool_id: bigint;
  params: ParamsSDKType;
  pool_routes: ModuleRouteSDKType[];
  taker_fees_tracker?: TakerFeesTrackerSDKType;
  pool_volumes: PoolVolumeSDKType[];
  denom_pair_taker_fee_store: DenomPairTakerFeeSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    nextPoolId: BigInt(0),
    params: Params.fromPartial({}),
    poolRoutes: [],
    takerFeesTracker: undefined,
    poolVolumes: [],
    denomPairTakerFeeStore: []
  };
}
export const GenesisState = {
  typeUrl: "/zigchain.poolmanager.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextPoolId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolRoutes) {
      ModuleRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.takerFeesTracker !== undefined) {
      TakerFeesTracker.encode(message.takerFeesTracker, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolVolumes) {
      PoolVolume.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.denomPairTakerFeeStore) {
      DenomPairTakerFee.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextPoolId = reader.uint64();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.poolRoutes.push(ModuleRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.takerFeesTracker = TakerFeesTracker.decode(reader, reader.uint32());
          break;
        case 5:
          message.poolVolumes.push(PoolVolume.decode(reader, reader.uint32()));
          break;
        case 6:
          message.denomPairTakerFeeStore.push(DenomPairTakerFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? BigInt(object.nextPoolId.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolRoutes = object.poolRoutes?.map(e => ModuleRoute.fromPartial(e)) || [];
    message.takerFeesTracker = object.takerFeesTracker !== undefined && object.takerFeesTracker !== null ? TakerFeesTracker.fromPartial(object.takerFeesTracker) : undefined;
    message.poolVolumes = object.poolVolumes?.map(e => PoolVolume.fromPartial(e)) || [];
    message.denomPairTakerFeeStore = object.denomPairTakerFeeStore?.map(e => DenomPairTakerFee.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.next_pool_id !== undefined && object.next_pool_id !== null) {
      message.nextPoolId = BigInt(object.next_pool_id);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolRoutes = object.pool_routes?.map(e => ModuleRoute.fromAmino(e)) || [];
    if (object.taker_fees_tracker !== undefined && object.taker_fees_tracker !== null) {
      message.takerFeesTracker = TakerFeesTracker.fromAmino(object.taker_fees_tracker);
    }
    message.poolVolumes = object.pool_volumes?.map(e => PoolVolume.fromAmino(e)) || [];
    message.denomPairTakerFeeStore = object.denom_pair_taker_fee_store?.map(e => DenomPairTakerFee.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.next_pool_id = message.nextPoolId !== BigInt(0) ? message.nextPoolId?.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolRoutes) {
      obj.pool_routes = message.poolRoutes.map(e => e ? ModuleRoute.toAmino(e) : undefined);
    } else {
      obj.pool_routes = message.poolRoutes;
    }
    obj.taker_fees_tracker = message.takerFeesTracker ? TakerFeesTracker.toAmino(message.takerFeesTracker) : undefined;
    if (message.poolVolumes) {
      obj.pool_volumes = message.poolVolumes.map(e => e ? PoolVolume.toAmino(e) : undefined);
    } else {
      obj.pool_volumes = message.poolVolumes;
    }
    if (message.denomPairTakerFeeStore) {
      obj.denom_pair_taker_fee_store = message.denomPairTakerFeeStore.map(e => e ? DenomPairTakerFee.toAmino(e) : undefined);
    } else {
      obj.denom_pair_taker_fee_store = message.denomPairTakerFeeStore;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/zigchain.poolmanager.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};