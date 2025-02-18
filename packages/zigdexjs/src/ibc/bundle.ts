//@ts-nocheck
import * as _78 from "./applications/transfer/v1/genesis";
import * as _79 from "./applications/transfer/v1/query";
import * as _80 from "./applications/transfer/v1/transfer";
import * as _81 from "./applications/transfer/v1/tx";
import * as _82 from "./applications/transfer/v2/packet";
import * as _83 from "./core/channel/v1/channel";
import * as _84 from "./core/channel/v1/genesis";
import * as _85 from "./core/channel/v1/query";
import * as _86 from "./core/channel/v1/tx";
import * as _87 from "./core/client/v1/client";
import * as _88 from "./core/client/v1/genesis";
import * as _89 from "./core/client/v1/query";
import * as _90 from "./core/client/v1/tx";
import * as _91 from "./core/commitment/v1/commitment";
import * as _92 from "./core/connection/v1/connection";
import * as _93 from "./core/connection/v1/genesis";
import * as _94 from "./core/connection/v1/query";
import * as _95 from "./core/connection/v1/tx";
import * as _96 from "./lightclients/localhost/v1/localhost";
import * as _97 from "./lightclients/solomachine/v1/solomachine";
import * as _98 from "./lightclients/solomachine/v2/solomachine";
import * as _99 from "./lightclients/tendermint/v1/tendermint";
import * as _219 from "./applications/transfer/v1/tx.amino";
import * as _220 from "./core/channel/v1/tx.amino";
import * as _221 from "./core/client/v1/tx.amino";
import * as _222 from "./core/connection/v1/tx.amino";
import * as _223 from "./applications/transfer/v1/tx.registry";
import * as _224 from "./core/channel/v1/tx.registry";
import * as _225 from "./core/client/v1/tx.registry";
import * as _226 from "./core/connection/v1/tx.registry";
import * as _227 from "./applications/transfer/v1/query.lcd";
import * as _228 from "./core/channel/v1/query.lcd";
import * as _229 from "./core/client/v1/query.lcd";
import * as _230 from "./core/connection/v1/query.lcd";
import * as _231 from "./applications/transfer/v1/query.rpc.Query";
import * as _232 from "./core/channel/v1/query.rpc.Query";
import * as _233 from "./core/client/v1/query.rpc.Query";
import * as _234 from "./core/connection/v1/query.rpc.Query";
import * as _235 from "./applications/transfer/v1/tx.rpc.msg";
import * as _236 from "./core/channel/v1/tx.rpc.msg";
import * as _237 from "./core/client/v1/tx.rpc.msg";
import * as _238 from "./core/connection/v1/tx.rpc.msg";
import * as _239 from "./applications/transfer/v1/query.pinia.store";
import * as _240 from "./core/channel/v1/query.pinia.store";
import * as _241 from "./core/client/v1/query.pinia.store";
import * as _242 from "./core/connection/v1/query.pinia.store";
import * as _279 from "./lcd";
import * as _280 from "./rpc.query";
import * as _281 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._78,
        ..._79,
        ..._80,
        ..._81,
        ..._219,
        ..._223,
        ..._227,
        ..._231,
        ..._235,
        ..._239
      };
      export const v2 = {
        ..._82
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._83,
        ..._84,
        ..._85,
        ..._86,
        ..._220,
        ..._224,
        ..._228,
        ..._232,
        ..._236,
        ..._240
      };
    }
    export namespace client {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._221,
        ..._225,
        ..._229,
        ..._233,
        ..._237,
        ..._241
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._91
      };
    }
    export namespace connection {
      export const v1 = {
        ..._92,
        ..._93,
        ..._94,
        ..._95,
        ..._222,
        ..._226,
        ..._230,
        ..._234,
        ..._238,
        ..._242
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._96
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._97
      };
      export const v2 = {
        ..._98
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._99
      };
    }
  }
  export const ClientFactory = {
    ..._279,
    ..._280,
    ..._281
  };
}