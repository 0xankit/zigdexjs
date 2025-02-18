//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Pool is a struct that contains the poolId, base, quote, lpToken, creator, fee, and formula */
export interface Pool {
  poolId: string;
  /**
   * we allow for list of coins that is auto sorted by denom,
   * but also allowing for more then two coins in pool in future, like tripools
   */
  lpToken: Coin;
  creator: string;
  /** fee is per 100,000 */
  fee: number;
  formula: string;
  coins: Coin[];
}
export interface PoolProtoMsg {
  typeUrl: "/zigchain.dex.Pool";
  value: Uint8Array;
}
/** Pool is a struct that contains the poolId, base, quote, lpToken, creator, fee, and formula */
export interface PoolAmino {
  poolId?: string;
  /**
   * we allow for list of coins that is auto sorted by denom,
   * but also allowing for more then two coins in pool in future, like tripools
   */
  lpToken?: CoinAmino;
  creator?: string;
  /** fee is per 100,000 */
  fee?: number;
  formula?: string;
  coins?: CoinAmino[];
}
export interface PoolAminoMsg {
  type: "/zigchain.dex.Pool";
  value: PoolAmino;
}
/** Pool is a struct that contains the poolId, base, quote, lpToken, creator, fee, and formula */
export interface PoolSDKType {
  poolId: string;
  lpToken: CoinSDKType;
  creator: string;
  fee: number;
  formula: string;
  coins: CoinSDKType[];
}
/** PoolsPair is a struct that contains the poolId only, used as secondary index into pools */
export interface PoolPair {
  poolId: string;
}
export interface PoolPairProtoMsg {
  typeUrl: "/zigchain.dex.PoolPair";
  value: Uint8Array;
}
/** PoolsPair is a struct that contains the poolId only, used as secondary index into pools */
export interface PoolPairAmino {
  poolId?: string;
}
export interface PoolPairAminoMsg {
  type: "/zigchain.dex.PoolPair";
  value: PoolPairAmino;
}
/** PoolsPair is a struct that contains the poolId only, used as secondary index into pools */
export interface PoolPairSDKType {
  poolId: string;
}
function createBasePool(): Pool {
  return {
    poolId: "",
    lpToken: Coin.fromPartial({}),
    creator: "",
    fee: 0,
    formula: "",
    coins: []
  };
}
export const Pool = {
  typeUrl: "/zigchain.dex.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.lpToken !== undefined) {
      Coin.encode(message.lpToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.fee !== 0) {
      writer.uint32(32).uint32(message.fee);
    }
    if (message.formula !== "") {
      writer.uint32(42).string(message.formula);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.lpToken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.fee = reader.uint32();
          break;
        case 5:
          message.formula = reader.string();
          break;
        case 6:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.poolId = object.poolId ?? "";
    message.lpToken = object.lpToken !== undefined && object.lpToken !== null ? Coin.fromPartial(object.lpToken) : undefined;
    message.creator = object.creator ?? "";
    message.fee = object.fee ?? 0;
    message.formula = object.formula ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    }
    if (object.lpToken !== undefined && object.lpToken !== null) {
      message.lpToken = Coin.fromAmino(object.lpToken);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.formula !== undefined && object.formula !== null) {
      message.formula = object.formula;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.poolId = message.poolId === "" ? undefined : message.poolId;
    obj.lpToken = message.lpToken ? Coin.toAmino(message.lpToken) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.fee = message.fee === 0 ? undefined : message.fee;
    obj.formula = message.formula === "" ? undefined : message.formula;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/zigchain.dex.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBasePoolPair(): PoolPair {
  return {
    poolId: ""
  };
}
export const PoolPair = {
  typeUrl: "/zigchain.dex.PoolPair",
  encode(message: PoolPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolPair>): PoolPair {
    const message = createBasePoolPair();
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: PoolPairAmino): PoolPair {
    const message = createBasePoolPair();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    }
    return message;
  },
  toAmino(message: PoolPair): PoolPairAmino {
    const obj: any = {};
    obj.poolId = message.poolId === "" ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: PoolPairAminoMsg): PoolPair {
    return PoolPair.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolPairProtoMsg): PoolPair {
    return PoolPair.decode(message.value);
  },
  toProto(message: PoolPair): Uint8Array {
    return PoolPair.encode(message).finish();
  },
  toProtoMsg(message: PoolPair): PoolPairProtoMsg {
    return {
      typeUrl: "/zigchain.dex.PoolPair",
      value: PoolPair.encode(message).finish()
    };
  }
};