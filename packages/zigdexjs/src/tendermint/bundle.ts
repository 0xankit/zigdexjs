//@ts-nocheck
import * as _100 from "./abci/types";
import * as _101 from "./crypto/keys";
import * as _102 from "./crypto/proof";
import * as _103 from "./libs/bits/types";
import * as _104 from "./p2p/types";
import * as _105 from "./types/block";
import * as _106 from "./types/evidence";
import * as _107 from "./types/params";
import * as _108 from "./types/types";
import * as _109 from "./types/validator";
import * as _110 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._100
  };
  export const crypto = {
    ..._101,
    ..._102
  };
  export namespace libs {
    export const bits = {
      ..._103
    };
  }
  export const p2p = {
    ..._104
  };
  export const types = {
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._109
  };
  export const version = {
    ..._110
  };
}