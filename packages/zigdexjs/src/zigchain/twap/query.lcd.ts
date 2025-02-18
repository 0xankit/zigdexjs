//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryArithmeticTwapRequest, QueryArithmeticTwapResponseSDKType, QueryArithmeticTwapToNowRequest, QueryArithmeticTwapToNowResponseSDKType, QueryGeometricTwapRequest, QueryGeometricTwapResponseSDKType, QueryGeometricTwapToNowRequest, QueryGeometricTwapToNowResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
    this.geometricTwap = this.geometricTwap.bind(this);
    this.geometricTwapToNow = this.geometricTwapToNow.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `zigchain/twap/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of ArithmeticTwap items. */
  async arithmeticTwap(params: QueryArithmeticTwapRequest): Promise<QueryArithmeticTwapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.baseAsset !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof params?.quoteAsset !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof params?.startTime !== "undefined") {
      options.params.start_time = params.startTime;
    }
    if (typeof params?.endTime !== "undefined") {
      options.params.end_time = params.endTime;
    }
    const endpoint = `zigchain/twap/arithmetic_twap`;
    return await this.req.get<QueryArithmeticTwapResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ArithmeticTwapToNow items. */
  async arithmeticTwapToNow(params: QueryArithmeticTwapToNowRequest): Promise<QueryArithmeticTwapToNowResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.baseAsset !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof params?.quoteAsset !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof params?.startTime !== "undefined") {
      options.params.start_time = params.startTime;
    }
    const endpoint = `zigchain/twap/arithmetic_twap_to_now`;
    return await this.req.get<QueryArithmeticTwapToNowResponseSDKType>(endpoint, options);
  }
  /* Queries a list of GeometricTwap items. */
  async geometricTwap(params: QueryGeometricTwapRequest): Promise<QueryGeometricTwapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.baseAsset !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof params?.quoteAsset !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof params?.startTime !== "undefined") {
      options.params.start_time = params.startTime;
    }
    if (typeof params?.endTime !== "undefined") {
      options.params.end_time = params.endTime;
    }
    const endpoint = `zigchain/twap/geometric_twap`;
    return await this.req.get<QueryGeometricTwapResponseSDKType>(endpoint, options);
  }
  /* Queries a list of GeometricTwapToNow items. */
  async geometricTwapToNow(params: QueryGeometricTwapToNowRequest): Promise<QueryGeometricTwapToNowResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.baseAsset !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof params?.quoteAsset !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof params?.startTime !== "undefined") {
      options.params.start_time = params.startTime;
    }
    const endpoint = `zigchain/twap/geometric_twap_to_now`;
    return await this.req.get<QueryGeometricTwapToNowResponseSDKType>(endpoint, options);
  }
}