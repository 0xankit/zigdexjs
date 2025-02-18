//@ts-nocheck
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/v1beta1/coin";
import * as _20 from "./crypto/ed25519/keys";
import * as _21 from "./crypto/hd/v1/hd";
import * as _22 from "./crypto/keyring/v1/record";
import * as _23 from "./crypto/multisig/keys";
import * as _24 from "./crypto/secp256k1/keys";
import * as _25 from "./crypto/secp256r1/keys";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./feegrant/v1beta1/feegrant";
import * as _31 from "./feegrant/v1beta1/genesis";
import * as _32 from "./feegrant/v1beta1/query";
import * as _33 from "./feegrant/v1beta1/tx";
import * as _34 from "./gov/v1/genesis";
import * as _35 from "./gov/v1/gov";
import * as _36 from "./gov/v1/query";
import * as _37 from "./gov/v1/tx";
import * as _38 from "./gov/v1beta1/genesis";
import * as _39 from "./gov/v1beta1/gov";
import * as _40 from "./gov/v1beta1/query";
import * as _41 from "./gov/v1beta1/tx";
import * as _42 from "./group/v1/events";
import * as _43 from "./group/v1/genesis";
import * as _44 from "./group/v1/query";
import * as _45 from "./group/v1/tx";
import * as _46 from "./group/v1/types";
import * as _47 from "./mint/v1beta1/genesis";
import * as _48 from "./mint/v1beta1/mint";
import * as _49 from "./mint/v1beta1/query";
import * as _50 from "./params/v1beta1/params";
import * as _51 from "./params/v1beta1/query";
import * as _52 from "./staking/v1beta1/authz";
import * as _53 from "./staking/v1beta1/genesis";
import * as _54 from "./staking/v1beta1/query";
import * as _55 from "./staking/v1beta1/staking";
import * as _56 from "./staking/v1beta1/tx";
import * as _57 from "./tx/signing/v1beta1/signing";
import * as _58 from "./tx/v1beta1/service";
import * as _59 from "./tx/v1beta1/tx";
import * as _60 from "./upgrade/v1beta1/query";
import * as _61 from "./upgrade/v1beta1/tx";
import * as _62 from "./upgrade/v1beta1/upgrade";
import * as _63 from "./vesting/v1beta1/tx";
import * as _64 from "./vesting/v1beta1/vesting";
import * as _144 from "./authz/v1beta1/tx.amino";
import * as _145 from "./bank/v1beta1/tx.amino";
import * as _146 from "./distribution/v1beta1/tx.amino";
import * as _147 from "./feegrant/v1beta1/tx.amino";
import * as _148 from "./gov/v1/tx.amino";
import * as _149 from "./gov/v1beta1/tx.amino";
import * as _150 from "./group/v1/tx.amino";
import * as _151 from "./staking/v1beta1/tx.amino";
import * as _152 from "./upgrade/v1beta1/tx.amino";
import * as _153 from "./vesting/v1beta1/tx.amino";
import * as _154 from "./authz/v1beta1/tx.registry";
import * as _155 from "./bank/v1beta1/tx.registry";
import * as _156 from "./distribution/v1beta1/tx.registry";
import * as _157 from "./feegrant/v1beta1/tx.registry";
import * as _158 from "./gov/v1/tx.registry";
import * as _159 from "./gov/v1beta1/tx.registry";
import * as _160 from "./group/v1/tx.registry";
import * as _161 from "./staking/v1beta1/tx.registry";
import * as _162 from "./upgrade/v1beta1/tx.registry";
import * as _163 from "./vesting/v1beta1/tx.registry";
import * as _164 from "./auth/v1beta1/query.lcd";
import * as _165 from "./authz/v1beta1/query.lcd";
import * as _166 from "./bank/v1beta1/query.lcd";
import * as _167 from "./distribution/v1beta1/query.lcd";
import * as _168 from "./feegrant/v1beta1/query.lcd";
import * as _169 from "./gov/v1/query.lcd";
import * as _170 from "./gov/v1beta1/query.lcd";
import * as _171 from "./group/v1/query.lcd";
import * as _172 from "./mint/v1beta1/query.lcd";
import * as _173 from "./params/v1beta1/query.lcd";
import * as _174 from "./staking/v1beta1/query.lcd";
import * as _175 from "./tx/v1beta1/service.lcd";
import * as _176 from "./upgrade/v1beta1/query.lcd";
import * as _177 from "./auth/v1beta1/query.rpc.Query";
import * as _178 from "./authz/v1beta1/query.rpc.Query";
import * as _179 from "./bank/v1beta1/query.rpc.Query";
import * as _180 from "./distribution/v1beta1/query.rpc.Query";
import * as _181 from "./feegrant/v1beta1/query.rpc.Query";
import * as _182 from "./gov/v1/query.rpc.Query";
import * as _183 from "./gov/v1beta1/query.rpc.Query";
import * as _184 from "./group/v1/query.rpc.Query";
import * as _185 from "./mint/v1beta1/query.rpc.Query";
import * as _186 from "./params/v1beta1/query.rpc.Query";
import * as _187 from "./staking/v1beta1/query.rpc.Query";
import * as _188 from "./tx/v1beta1/service.rpc.Service";
import * as _189 from "./upgrade/v1beta1/query.rpc.Query";
import * as _190 from "./authz/v1beta1/tx.rpc.msg";
import * as _191 from "./bank/v1beta1/tx.rpc.msg";
import * as _192 from "./distribution/v1beta1/tx.rpc.msg";
import * as _193 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _194 from "./gov/v1/tx.rpc.msg";
import * as _195 from "./gov/v1beta1/tx.rpc.msg";
import * as _196 from "./group/v1/tx.rpc.msg";
import * as _197 from "./staking/v1beta1/tx.rpc.msg";
import * as _198 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _199 from "./vesting/v1beta1/tx.rpc.msg";
import * as _200 from "./auth/v1beta1/query.pinia.store";
import * as _201 from "./authz/v1beta1/query.pinia.store";
import * as _202 from "./bank/v1beta1/query.pinia.store";
import * as _203 from "./distribution/v1beta1/query.pinia.store";
import * as _204 from "./feegrant/v1beta1/query.pinia.store";
import * as _205 from "./gov/v1/query.pinia.store";
import * as _206 from "./gov/v1beta1/query.pinia.store";
import * as _207 from "./group/v1/query.pinia.store";
import * as _208 from "./mint/v1beta1/query.pinia.store";
import * as _209 from "./params/v1beta1/query.pinia.store";
import * as _210 from "./staking/v1beta1/query.pinia.store";
import * as _211 from "./tx/v1beta1/service.pinia.store";
import * as _212 from "./upgrade/v1beta1/query.pinia.store";
import * as _273 from "./lcd";
import * as _274 from "./rpc.query";
import * as _275 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._164,
      ..._177,
      ..._200
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._144,
      ..._154,
      ..._165,
      ..._178,
      ..._190,
      ..._201
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._145,
      ..._155,
      ..._166,
      ..._179,
      ..._191,
      ..._202
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._20
    };
    export namespace hd {
      export const v1 = {
        ..._21
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._22
      };
    }
    export const multisig = {
      ..._23
    };
    export const secp256k1 = {
      ..._24
    };
    export const secp256r1 = {
      ..._25
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._146,
      ..._156,
      ..._167,
      ..._180,
      ..._192,
      ..._203
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._147,
      ..._157,
      ..._168,
      ..._181,
      ..._193,
      ..._204
    };
  }
  export namespace gov {
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._148,
      ..._158,
      ..._169,
      ..._182,
      ..._194,
      ..._205
    };
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._149,
      ..._159,
      ..._170,
      ..._183,
      ..._195,
      ..._206
    };
  }
  export namespace group {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._150,
      ..._160,
      ..._171,
      ..._184,
      ..._196,
      ..._207
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._172,
      ..._185,
      ..._208
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._173,
      ..._186,
      ..._209
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._151,
      ..._161,
      ..._174,
      ..._187,
      ..._197,
      ..._210
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._175,
      ..._188,
      ..._211
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._152,
      ..._162,
      ..._176,
      ..._189,
      ..._198,
      ..._212
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._153,
      ..._163,
      ..._199
    };
  }
  export const ClientFactory = {
    ..._273,
    ..._274,
    ..._275
  };
}