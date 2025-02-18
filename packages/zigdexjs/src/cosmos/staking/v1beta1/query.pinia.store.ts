//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryValidatorsRequestSDKType, QueryValidatorsResponseSDKType, QueryValidatorRequestSDKType, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequestSDKType, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequestSDKType, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponseSDKType, QueryPoolRequestSDKType, QueryPoolResponseSDKType, QueryParamsRequestSDKType, QueryParamsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/staking/v1beta1/query.proto', {
  state: () => {
    return {
      validators: {} as QueryValidatorsResponseSDKType,
      validator: {} as QueryValidatorResponseSDKType,
      validatorDelegations: {} as QueryValidatorDelegationsResponseSDKType,
      validatorUnbondingDelegations: {} as QueryValidatorUnbondingDelegationsResponseSDKType,
      delegation: {} as QueryDelegationResponseSDKType,
      unbondingDelegation: {} as QueryUnbondingDelegationResponseSDKType,
      delegatorDelegations: {} as QueryDelegatorDelegationsResponseSDKType,
      delegatorUnbondingDelegations: {} as QueryDelegatorUnbondingDelegationsResponseSDKType,
      redelegations: {} as QueryRedelegationsResponseSDKType,
      delegatorValidators: {} as QueryDelegatorValidatorsResponseSDKType,
      delegatorValidator: {} as QueryDelegatorValidatorResponseSDKType,
      historicalInfo: {} as QueryHistoricalInfoResponseSDKType,
      pool: {} as QueryPoolResponseSDKType,
      params: {} as QueryParamsResponseSDKType
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
    async fetchValidators(param: QueryValidatorsRequestSDKType) {
      this.validators = await this.lcdClient.validators(param);
      return this.validators;
    },
    async fetchValidator(param: QueryValidatorRequestSDKType) {
      this.validator = await this.lcdClient.validator(param);
      return this.validator;
    },
    async fetchValidatorDelegations(param: QueryValidatorDelegationsRequestSDKType) {
      this.validatorDelegations = await this.lcdClient.validatorDelegations(param);
      return this.validatorDelegations;
    },
    async fetchValidatorUnbondingDelegations(param: QueryValidatorUnbondingDelegationsRequestSDKType) {
      this.validatorUnbondingDelegations = await this.lcdClient.validatorUnbondingDelegations(param);
      return this.validatorUnbondingDelegations;
    },
    async fetchDelegation(param: QueryDelegationRequestSDKType) {
      this.delegation = await this.lcdClient.delegation(param);
      return this.delegation;
    },
    async fetchUnbondingDelegation(param: QueryUnbondingDelegationRequestSDKType) {
      this.unbondingDelegation = await this.lcdClient.unbondingDelegation(param);
      return this.unbondingDelegation;
    },
    async fetchDelegatorDelegations(param: QueryDelegatorDelegationsRequestSDKType) {
      this.delegatorDelegations = await this.lcdClient.delegatorDelegations(param);
      return this.delegatorDelegations;
    },
    async fetchDelegatorUnbondingDelegations(param: QueryDelegatorUnbondingDelegationsRequestSDKType) {
      this.delegatorUnbondingDelegations = await this.lcdClient.delegatorUnbondingDelegations(param);
      return this.delegatorUnbondingDelegations;
    },
    async fetchRedelegations(param: QueryRedelegationsRequestSDKType) {
      this.redelegations = await this.lcdClient.redelegations(param);
      return this.redelegations;
    },
    async fetchDelegatorValidators(param: QueryDelegatorValidatorsRequestSDKType) {
      this.delegatorValidators = await this.lcdClient.delegatorValidators(param);
      return this.delegatorValidators;
    },
    async fetchDelegatorValidator(param: QueryDelegatorValidatorRequestSDKType) {
      this.delegatorValidator = await this.lcdClient.delegatorValidator(param);
      return this.delegatorValidator;
    },
    async fetchHistoricalInfo(param: QueryHistoricalInfoRequestSDKType) {
      this.historicalInfo = await this.lcdClient.historicalInfo(param);
      return this.historicalInfo;
    },
    async fetchPool(param: QueryPoolRequestSDKType) {
      this.pool = await this.lcdClient.pool(param);
      return this.pool;
    },
    async fetchParams(param: QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    }
  }
});