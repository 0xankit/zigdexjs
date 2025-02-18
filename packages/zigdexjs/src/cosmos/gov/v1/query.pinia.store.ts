//@ts-nocheck
import { useEndpoint } from "../../../pinia-endpoint";
import { QueryProposalRequestSDKType, QueryProposalResponseSDKType, QueryProposalsRequestSDKType, QueryProposalsResponseSDKType, QueryVoteRequestSDKType, QueryVoteResponseSDKType, QueryVotesRequestSDKType, QueryVotesResponseSDKType, QueryParamsRequestSDKType, QueryParamsResponseSDKType, QueryDepositRequestSDKType, QueryDepositResponseSDKType, QueryDepositsRequestSDKType, QueryDepositsResponseSDKType, QueryTallyResultRequestSDKType, QueryTallyResultResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/gov/v1/query.proto', {
  state: () => {
    return {
      proposal: {} as QueryProposalResponseSDKType,
      proposals: {} as QueryProposalsResponseSDKType,
      vote: {} as QueryVoteResponseSDKType,
      votes: {} as QueryVotesResponseSDKType,
      params: {} as QueryParamsResponseSDKType,
      deposit: {} as QueryDepositResponseSDKType,
      deposits: {} as QueryDepositsResponseSDKType,
      tallyResult: {} as QueryTallyResultResponseSDKType
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
    async fetchProposal(param: QueryProposalRequestSDKType) {
      this.proposal = await this.lcdClient.proposal(param);
      return this.proposal;
    },
    async fetchProposals(param: QueryProposalsRequestSDKType) {
      this.proposals = await this.lcdClient.proposals(param);
      return this.proposals;
    },
    async fetchVote(param: QueryVoteRequestSDKType) {
      this.vote = await this.lcdClient.vote(param);
      return this.vote;
    },
    async fetchVotes(param: QueryVotesRequestSDKType) {
      this.votes = await this.lcdClient.votes(param);
      return this.votes;
    },
    async fetchParams(param: QueryParamsRequestSDKType) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },
    async fetchDeposit(param: QueryDepositRequestSDKType) {
      this.deposit = await this.lcdClient.deposit(param);
      return this.deposit;
    },
    async fetchDeposits(param: QueryDepositsRequestSDKType) {
      this.deposits = await this.lcdClient.deposits(param);
      return this.deposits;
    },
    async fetchTallyResult(param: QueryTallyResultRequestSDKType) {
      this.tallyResult = await this.lcdClient.tallyResult(param);
      return this.tallyResult;
    }
  }
});