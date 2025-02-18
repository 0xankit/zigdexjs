//@ts-nocheck
import * as _111 from "./dex/genesis";
import * as _112 from "./dex/packet";
import * as _113 from "./dex/params";
import * as _114 from "./dex/pool_uids";
import * as _115 from "./dex/pool";
import * as _116 from "./dex/pools_meta";
import * as _117 from "./dex/query";
import * as _118 from "./dex/tx";
import * as _119 from "./factory/denom_auth";
import * as _120 from "./factory/denom";
import * as _121 from "./factory/genesis";
import * as _122 from "./factory/params";
import * as _123 from "./factory/query";
import * as _124 from "./factory/tx";
import * as _125 from "./gamm/genesis";
import * as _126 from "./gamm/params";
import * as _127 from "./gamm/query";
import * as _128 from "./gamm/shared";
import * as _129 from "./gamm/stableswap_pool";
import * as _130 from "./gamm/tx";
import * as _131 from "./poolmanager/genesis";
import * as _132 from "./poolmanager/module_route";
import * as _133 from "./poolmanager/params";
import * as _134 from "./poolmanager/query";
import * as _135 from "./poolmanager/swap_route";
import * as _136 from "./poolmanager/taker_fee_share";
import * as _137 from "./poolmanager/tracked_volume";
import * as _138 from "./poolmanager/tx";
import * as _139 from "./twap/genesis";
import * as _140 from "./twap/params";
import * as _141 from "./twap/query";
import * as _142 from "./twap/twap_record";
import * as _143 from "./twap/tx";
import * as _243 from "./dex/tx.amino";
import * as _244 from "./factory/tx.amino";
import * as _245 from "./gamm/tx.amino";
import * as _246 from "./poolmanager/tx.amino";
import * as _247 from "./twap/tx.amino";
import * as _248 from "./dex/tx.registry";
import * as _249 from "./factory/tx.registry";
import * as _250 from "./gamm/tx.registry";
import * as _251 from "./poolmanager/tx.registry";
import * as _252 from "./twap/tx.registry";
import * as _253 from "./dex/query.lcd";
import * as _254 from "./factory/query.lcd";
import * as _255 from "./gamm/query.lcd";
import * as _256 from "./poolmanager/query.lcd";
import * as _257 from "./twap/query.lcd";
import * as _258 from "./dex/query.rpc.Query";
import * as _259 from "./factory/query.rpc.Query";
import * as _260 from "./gamm/query.rpc.Query";
import * as _261 from "./poolmanager/query.rpc.Query";
import * as _262 from "./twap/query.rpc.Query";
import * as _263 from "./dex/tx.rpc.msg";
import * as _264 from "./factory/tx.rpc.msg";
import * as _265 from "./gamm/tx.rpc.msg";
import * as _266 from "./poolmanager/tx.rpc.msg";
import * as _267 from "./twap/tx.rpc.msg";
import * as _268 from "./dex/query.pinia.store";
import * as _269 from "./factory/query.pinia.store";
import * as _270 from "./gamm/query.pinia.store";
import * as _271 from "./poolmanager/query.pinia.store";
import * as _272 from "./twap/query.pinia.store";
import * as _282 from "./lcd";
import * as _283 from "./rpc.query";
import * as _284 from "./rpc.tx";
export namespace zigchain {
  export const dex = {
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._243,
    ..._248,
    ..._253,
    ..._258,
    ..._263,
    ..._268
  };
  export const factory = {
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._244,
    ..._249,
    ..._254,
    ..._259,
    ..._264,
    ..._269
  };
  export const gamm = {
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._245,
    ..._250,
    ..._255,
    ..._260,
    ..._265,
    ..._270
  };
  export const poolmanager = {
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._246,
    ..._251,
    ..._256,
    ..._261,
    ..._266,
    ..._271
  };
  export const twap = {
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._247,
    ..._252,
    ..._257,
    ..._262,
    ..._267,
    ..._272
  };
  export const ClientFactory = {
    ..._282,
    ..._283,
    ..._284
  };
}