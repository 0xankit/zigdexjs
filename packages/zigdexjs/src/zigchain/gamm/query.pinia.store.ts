//@ts-nocheck
import { useEndpoint } from "../../pinia-endpoint";
import { QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryPoolsRequestSDKType, QueryPoolsResponseSDKType, QueryNumPoolsRequestSDKType, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponseSDKType, QueryPoolRequestSDKType, QueryPoolResponseSDKType, QueryPoolTypeRequestSDKType, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequestSDKType, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequestSDKType, QueryTotalSharesResponseSDKType, QuerySpotPriceRequestSDKType, QuerySpotPriceResponseSDKType, QueryEstimateSwapExactAmountInRequestSDKType, QueryEstimateSwapExactAmountInResponseSDKType, QueryConcentratedPoolIdLinkFromCfmmRequestSDKType, QueryConcentratedPoolIdLinkFromCfmmResponseSDKType, QueryCfmmconcentratedPoolLinksRequestSDKType, QueryCfmmconcentratedPoolLinksResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('zigchain/gamm/query.proto', {
  state: () => {
    return {
      params: {} as QueryParamsResponseSDKType,
      pools: {} as QueryPoolsResponseSDKType,
      numPools: {} as QueryNumPoolsResponseSDKType,
      totalLiquidity: {} as QueryTotalLiquidityResponseSDKType,
      poolsWithFilter: {} as QueryPoolsWithFilterResponseSDKType,
      pool: {} as QueryPoolResponseSDKType,
      poolType: {} as QueryPoolTypeResponseSDKType,
      calcJoinPoolNoSwapShares: {} as QueryCalcJoinPoolNoSwapSharesResponseSDKType,
      calcJoinPoolShares: {} as QueryCalcJoinPoolSharesResponseSDKType,
      calcExitPoolCoinsFromShares: {} as QueryCalcExitPoolCoinsFromSharesResponseSDKType,
      poolParams: {} as QueryPoolParamsResponseSDKType,
      totalPoolLiquidity: {} as QueryTotalPoolLiquidityResponseSDKType,
      totalShares: {} as QueryTotalSharesResponseSDKType,
      spotPrice: {} as QuerySpotPriceResponseSDKType,
      estimateSwapExactAmountIn: {} as QueryEstimateSwapExactAmountInResponseSDKType,
      concentratedPoolIdLinkFromCfmm: {} as QueryConcentratedPoolIdLinkFromCfmmResponseSDKType,
      cfmmconcentratedPoolLinks: {} as QueryCfmmconcentratedPoolLinksResponseSDKType
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({
        requestClient
      });
    }
  },
  actions: {
    async fetchParams(param: QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },
    async fetchPools(param: QueryPoolsRequestSDKType) {
      this.pools = await this.lcdClient.pools(param);
      return this.pools;
    },
    async fetchNumPools(param: QueryNumPoolsRequestSDKType) {
      this.numPools = await this.lcdClient.numPools(param);
      return this.numPools;
    },
    async fetchTotalLiquidity(param: QueryTotalLiquidityRequestSDKType) {
      this.totalLiquidity = await this.lcdClient.totalLiquidity(param);
      return this.totalLiquidity;
    },
    async fetchPoolsWithFilter(param: QueryPoolsWithFilterRequestSDKType) {
      this.poolsWithFilter = await this.lcdClient.poolsWithFilter(param);
      return this.poolsWithFilter;
    },
    async fetchPool(param: QueryPoolRequestSDKType) {
      this.pool = await this.lcdClient.pool(param);
      return this.pool;
    },
    async fetchPoolType(param: QueryPoolTypeRequestSDKType) {
      this.poolType = await this.lcdClient.poolType(param);
      return this.poolType;
    },
    async fetchCalcJoinPoolNoSwapShares(param: QueryCalcJoinPoolNoSwapSharesRequestSDKType) {
      this.calcJoinPoolNoSwapShares = await this.lcdClient.calcJoinPoolNoSwapShares(param);
      return this.calcJoinPoolNoSwapShares;
    },
    async fetchCalcJoinPoolShares(param: QueryCalcJoinPoolSharesRequestSDKType) {
      this.calcJoinPoolShares = await this.lcdClient.calcJoinPoolShares(param);
      return this.calcJoinPoolShares;
    },
    async fetchCalcExitPoolCoinsFromShares(param: QueryCalcExitPoolCoinsFromSharesRequestSDKType) {
      this.calcExitPoolCoinsFromShares = await this.lcdClient.calcExitPoolCoinsFromShares(param);
      return this.calcExitPoolCoinsFromShares;
    },
    async fetchPoolParams(param: QueryPoolParamsRequestSDKType) {
      this.poolParams = await this.lcdClient.poolParams(param);
      return this.poolParams;
    },
    async fetchTotalPoolLiquidity(param: QueryTotalPoolLiquidityRequestSDKType) {
      this.totalPoolLiquidity = await this.lcdClient.totalPoolLiquidity(param);
      return this.totalPoolLiquidity;
    },
    async fetchTotalShares(param: QueryTotalSharesRequestSDKType) {
      this.totalShares = await this.lcdClient.totalShares(param);
      return this.totalShares;
    },
    async fetchSpotPrice(param: QuerySpotPriceRequestSDKType) {
      this.spotPrice = await this.lcdClient.spotPrice(param);
      return this.spotPrice;
    },
    async fetchEstimateSwapExactAmountIn(param: QueryEstimateSwapExactAmountInRequestSDKType) {
      this.estimateSwapExactAmountIn = await this.lcdClient.estimateSwapExactAmountIn(param);
      return this.estimateSwapExactAmountIn;
    },
    async fetchConcentratedPoolIdLinkFromCfmm(param: QueryConcentratedPoolIdLinkFromCfmmRequestSDKType) {
      this.concentratedPoolIdLinkFromCfmm = await this.lcdClient.concentratedPoolIdLinkFromCfmm(param);
      return this.concentratedPoolIdLinkFromCfmm;
    },
    async fetchCfmmconcentratedPoolLinks(param: QueryCfmmconcentratedPoolLinksRequestSDKType) {
      this.cfmmconcentratedPoolLinks = await this.lcdClient.cfmmconcentratedPoolLinks(param);
      return this.cfmmconcentratedPoolLinks;
    }
  }
});