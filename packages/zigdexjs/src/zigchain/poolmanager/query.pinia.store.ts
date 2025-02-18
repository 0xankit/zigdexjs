//@ts-nocheck
import { useEndpoint } from "../../pinia-endpoint";
import { QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryAllPoolsRequestSDKType, QueryAllPoolsResponseSDKType, QueryPoolRequestSDKType, QueryPoolResponseSDKType, QueryNumPoolRequestSDKType, QueryNumPoolResponseSDKType, QueryTradingPairTakerFeeRequestSDKType, QueryTradingPairTakerFeeResponseSDKType, QueryTakerFeeShareDenomsToAccruedValueRequestSDKType, QueryTakerFeeShareDenomsToAccruedValueResponseSDKType, QueryTakerFeeShareAgreementFromDenomRequestSDKType, QueryTakerFeeShareAgreementFromDenomResponseSDKType, QueryAllTakerFeeShareAgreementsRequestSDKType, QueryAllTakerFeeShareAgreementsResponseSDKType, QueryAllTakerFeeShareAccumulatorsRequestSDKType, QueryAllTakerFeeShareAccumulatorsResponseSDKType, QueryTotalVolumeForPoolRequestSDKType, QueryTotalVolumeForPoolResponseSDKType, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponseSDKType, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponseSDKType, QuerySpotPriceRequestSDKType, QuerySpotPriceResponseSDKType, QueryListPoolsByDenomRequestSDKType, QueryListPoolsByDenomResponseSDKType, QueryRegisteredAlloyedPoolFromPoolIdRequestSDKType, QueryRegisteredAlloyedPoolFromPoolIdResponseSDKType, QueryRegisteredAlloyedPoolFromDenomRequestSDKType, QueryRegisteredAlloyedPoolFromDenomResponseSDKType, QueryAllRegisteredAlloyedPoolsRequestSDKType, QueryAllRegisteredAlloyedPoolsResponseSDKType, QueryEstimateTradeBasedOnPriceImpactRequestSDKType, QueryEstimateTradeBasedOnPriceImpactResponseSDKType, QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType, QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseSDKType, QueryEstimateSwapExactAmountOutRequestSDKType, QueryEstimateSwapExactAmountOutResponseSDKType, QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType, QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseSDKType, QueryEstimateSwapExactAmountInRequestSDKType, QueryEstimateSwapExactAmountInResponseSDKType, QueryEstimateSinglePoolSwapExactAmountOutRequestSDKType, QueryEstimateSinglePoolSwapExactAmountOutResponseSDKType, QueryEstimateSinglePoolSwapExactAmountInRequestSDKType, QueryEstimateSinglePoolSwapExactAmountInResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('zigchain/poolmanager/query.proto', {
  state: () => {
    return {
      params: {} as QueryParamsResponseSDKType,
      allPools: {} as QueryAllPoolsResponseSDKType,
      pool: {} as QueryPoolResponseSDKType,
      numPool: {} as QueryNumPoolResponseSDKType,
      tradingPairTakerFee: {} as QueryTradingPairTakerFeeResponseSDKType,
      takerFeeShareDenomsToAccruedValue: {} as QueryTakerFeeShareDenomsToAccruedValueResponseSDKType,
      takerFeeShareAgreementFromDenom: {} as QueryTakerFeeShareAgreementFromDenomResponseSDKType,
      allTakerFeeShareAgreements: {} as QueryAllTakerFeeShareAgreementsResponseSDKType,
      allTakerFeeShareAccumulators: {} as QueryAllTakerFeeShareAccumulatorsResponseSDKType,
      totalVolumeForPool: {} as QueryTotalVolumeForPoolResponseSDKType,
      totalPoolLiquidity: {} as QueryTotalPoolLiquidityResponseSDKType,
      totalLiquidity: {} as QueryTotalLiquidityResponseSDKType,
      spotPrice: {} as QuerySpotPriceResponseSDKType,
      listPoolsByDenom: {} as QueryListPoolsByDenomResponseSDKType,
      registeredAlloyedPoolFromPoolId: {} as QueryRegisteredAlloyedPoolFromPoolIdResponseSDKType,
      registeredAlloyedPoolFromDenom: {} as QueryRegisteredAlloyedPoolFromDenomResponseSDKType,
      allRegisteredAlloyedPools: {} as QueryAllRegisteredAlloyedPoolsResponseSDKType,
      estimateTradeBasedOnPriceImpact: {} as QueryEstimateTradeBasedOnPriceImpactResponseSDKType,
      estimateSwapExactAmountOutWithPrimitiveTypes: {} as QueryEstimateSwapExactAmountOutWithPrimitiveTypesResponseSDKType,
      estimateSwapExactAmountOut: {} as QueryEstimateSwapExactAmountOutResponseSDKType,
      estimateSwapExactAmountInWithPrimitiveTypes: {} as QueryEstimateSwapExactAmountInWithPrimitiveTypesResponseSDKType,
      estimateSwapExactAmountIn: {} as QueryEstimateSwapExactAmountInResponseSDKType,
      estimateSinglePoolSwapExactAmountOut: {} as QueryEstimateSinglePoolSwapExactAmountOutResponseSDKType,
      estimateSinglePoolSwapExactAmountIn: {} as QueryEstimateSinglePoolSwapExactAmountInResponseSDKType
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
    async fetchAllPools(param: QueryAllPoolsRequestSDKType) {
      this.allPools = await this.lcdClient.allPools(param);
      return this.allPools;
    },
    async fetchPool(param: QueryPoolRequestSDKType) {
      this.pool = await this.lcdClient.pool(param);
      return this.pool;
    },
    async fetchNumPool(param: QueryNumPoolRequestSDKType) {
      this.numPool = await this.lcdClient.numPool(param);
      return this.numPool;
    },
    async fetchTradingPairTakerFee(param: QueryTradingPairTakerFeeRequestSDKType) {
      this.tradingPairTakerFee = await this.lcdClient.tradingPairTakerFee(param);
      return this.tradingPairTakerFee;
    },
    async fetchTakerFeeShareDenomsToAccruedValue(param: QueryTakerFeeShareDenomsToAccruedValueRequestSDKType) {
      this.takerFeeShareDenomsToAccruedValue = await this.lcdClient.takerFeeShareDenomsToAccruedValue(param);
      return this.takerFeeShareDenomsToAccruedValue;
    },
    async fetchTakerFeeShareAgreementFromDenom(param: QueryTakerFeeShareAgreementFromDenomRequestSDKType) {
      this.takerFeeShareAgreementFromDenom = await this.lcdClient.takerFeeShareAgreementFromDenom(param);
      return this.takerFeeShareAgreementFromDenom;
    },
    async fetchAllTakerFeeShareAgreements(param: QueryAllTakerFeeShareAgreementsRequestSDKType) {
      this.allTakerFeeShareAgreements = await this.lcdClient.allTakerFeeShareAgreements(param);
      return this.allTakerFeeShareAgreements;
    },
    async fetchAllTakerFeeShareAccumulators(param: QueryAllTakerFeeShareAccumulatorsRequestSDKType) {
      this.allTakerFeeShareAccumulators = await this.lcdClient.allTakerFeeShareAccumulators(param);
      return this.allTakerFeeShareAccumulators;
    },
    async fetchTotalVolumeForPool(param: QueryTotalVolumeForPoolRequestSDKType) {
      this.totalVolumeForPool = await this.lcdClient.totalVolumeForPool(param);
      return this.totalVolumeForPool;
    },
    async fetchTotalPoolLiquidity(param: QueryTotalPoolLiquidityRequestSDKType) {
      this.totalPoolLiquidity = await this.lcdClient.totalPoolLiquidity(param);
      return this.totalPoolLiquidity;
    },
    async fetchTotalLiquidity(param: QueryTotalLiquidityRequestSDKType) {
      this.totalLiquidity = await this.lcdClient.totalLiquidity(param);
      return this.totalLiquidity;
    },
    async fetchSpotPrice(param: QuerySpotPriceRequestSDKType) {
      this.spotPrice = await this.lcdClient.spotPrice(param);
      return this.spotPrice;
    },
    async fetchListPoolsByDenom(param: QueryListPoolsByDenomRequestSDKType) {
      this.listPoolsByDenom = await this.lcdClient.listPoolsByDenom(param);
      return this.listPoolsByDenom;
    },
    async fetchRegisteredAlloyedPoolFromPoolId(param: QueryRegisteredAlloyedPoolFromPoolIdRequestSDKType) {
      this.registeredAlloyedPoolFromPoolId = await this.lcdClient.registeredAlloyedPoolFromPoolId(param);
      return this.registeredAlloyedPoolFromPoolId;
    },
    async fetchRegisteredAlloyedPoolFromDenom(param: QueryRegisteredAlloyedPoolFromDenomRequestSDKType) {
      this.registeredAlloyedPoolFromDenom = await this.lcdClient.registeredAlloyedPoolFromDenom(param);
      return this.registeredAlloyedPoolFromDenom;
    },
    async fetchAllRegisteredAlloyedPools(param: QueryAllRegisteredAlloyedPoolsRequestSDKType) {
      this.allRegisteredAlloyedPools = await this.lcdClient.allRegisteredAlloyedPools(param);
      return this.allRegisteredAlloyedPools;
    },
    async fetchEstimateTradeBasedOnPriceImpact(param: QueryEstimateTradeBasedOnPriceImpactRequestSDKType) {
      this.estimateTradeBasedOnPriceImpact = await this.lcdClient.estimateTradeBasedOnPriceImpact(param);
      return this.estimateTradeBasedOnPriceImpact;
    },
    async fetchEstimateSwapExactAmountOutWithPrimitiveTypes(param: QueryEstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType) {
      this.estimateSwapExactAmountOutWithPrimitiveTypes = await this.lcdClient.estimateSwapExactAmountOutWithPrimitiveTypes(param);
      return this.estimateSwapExactAmountOutWithPrimitiveTypes;
    },
    async fetchEstimateSwapExactAmountOut(param: QueryEstimateSwapExactAmountOutRequestSDKType) {
      this.estimateSwapExactAmountOut = await this.lcdClient.estimateSwapExactAmountOut(param);
      return this.estimateSwapExactAmountOut;
    },
    async fetchEstimateSwapExactAmountInWithPrimitiveTypes(param: QueryEstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType) {
      this.estimateSwapExactAmountInWithPrimitiveTypes = await this.lcdClient.estimateSwapExactAmountInWithPrimitiveTypes(param);
      return this.estimateSwapExactAmountInWithPrimitiveTypes;
    },
    async fetchEstimateSwapExactAmountIn(param: QueryEstimateSwapExactAmountInRequestSDKType) {
      this.estimateSwapExactAmountIn = await this.lcdClient.estimateSwapExactAmountIn(param);
      return this.estimateSwapExactAmountIn;
    },
    async fetchEstimateSinglePoolSwapExactAmountOut(param: QueryEstimateSinglePoolSwapExactAmountOutRequestSDKType) {
      this.estimateSinglePoolSwapExactAmountOut = await this.lcdClient.estimateSinglePoolSwapExactAmountOut(param);
      return this.estimateSinglePoolSwapExactAmountOut;
    },
    async fetchEstimateSinglePoolSwapExactAmountIn(param: QueryEstimateSinglePoolSwapExactAmountInRequestSDKType) {
      this.estimateSinglePoolSwapExactAmountIn = await this.lcdClient.estimateSinglePoolSwapExactAmountIn(param);
      return this.estimateSinglePoolSwapExactAmountIn;
    }
  }
});