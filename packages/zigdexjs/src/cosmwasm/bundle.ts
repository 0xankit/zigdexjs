//@ts-nocheck
import * as _65 from "./wasm/v1/authz";
import * as _66 from "./wasm/v1/genesis";
import * as _67 from "./wasm/v1/ibc";
import * as _68 from "./wasm/v1/proposal";
import * as _69 from "./wasm/v1/query";
import * as _70 from "./wasm/v1/tx";
import * as _71 from "./wasm/v1/types";
import * as _213 from "./wasm/v1/tx.amino";
import * as _214 from "./wasm/v1/tx.registry";
import * as _215 from "./wasm/v1/query.lcd";
import * as _216 from "./wasm/v1/query.rpc.Query";
import * as _217 from "./wasm/v1/tx.rpc.msg";
import * as _218 from "./wasm/v1/query.pinia.store";
import * as _276 from "./lcd";
import * as _277 from "./rpc.query";
import * as _278 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218
    };
  }
  export const ClientFactory = {
    ..._276,
    ..._277,
    ..._278
  };
}