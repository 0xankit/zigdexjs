//@ts-nocheck
import { useEndpoint } from "../../../../pinia-endpoint";
import { QueryChannelRequestSDKType, QueryChannelResponseSDKType, QueryChannelsRequestSDKType, QueryChannelsResponseSDKType, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/core/channel/v1/query.proto', {
  state: () => {
    return {
      channel: {} as QueryChannelResponseSDKType,
      channels: {} as QueryChannelsResponseSDKType,
      connectionChannels: {} as QueryConnectionChannelsResponseSDKType,
      channelClientState: {} as QueryChannelClientStateResponseSDKType,
      channelConsensusState: {} as QueryChannelConsensusStateResponseSDKType,
      packetCommitment: {} as QueryPacketCommitmentResponseSDKType,
      packetCommitments: {} as QueryPacketCommitmentsResponseSDKType,
      packetReceipt: {} as QueryPacketReceiptResponseSDKType,
      packetAcknowledgement: {} as QueryPacketAcknowledgementResponseSDKType,
      packetAcknowledgements: {} as QueryPacketAcknowledgementsResponseSDKType,
      unreceivedPackets: {} as QueryUnreceivedPacketsResponseSDKType,
      unreceivedAcks: {} as QueryUnreceivedAcksResponseSDKType,
      nextSequenceReceive: {} as QueryNextSequenceReceiveResponseSDKType
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
    async fetchChannel(param: QueryChannelRequestSDKType) {
      this.channel = await this.lcdClient.channel(param);
      return this.channel;
    },
    async fetchChannels(param: QueryChannelsRequestSDKType) {
      this.channels = await this.lcdClient.channels(param);
      return this.channels;
    },
    async fetchConnectionChannels(param: QueryConnectionChannelsRequestSDKType) {
      this.connectionChannels = await this.lcdClient.connectionChannels(param);
      return this.connectionChannels;
    },
    async fetchChannelClientState(param: QueryChannelClientStateRequestSDKType) {
      this.channelClientState = await this.lcdClient.channelClientState(param);
      return this.channelClientState;
    },
    async fetchChannelConsensusState(param: QueryChannelConsensusStateRequestSDKType) {
      this.channelConsensusState = await this.lcdClient.channelConsensusState(param);
      return this.channelConsensusState;
    },
    async fetchPacketCommitment(param: QueryPacketCommitmentRequestSDKType) {
      this.packetCommitment = await this.lcdClient.packetCommitment(param);
      return this.packetCommitment;
    },
    async fetchPacketCommitments(param: QueryPacketCommitmentsRequestSDKType) {
      this.packetCommitments = await this.lcdClient.packetCommitments(param);
      return this.packetCommitments;
    },
    async fetchPacketReceipt(param: QueryPacketReceiptRequestSDKType) {
      this.packetReceipt = await this.lcdClient.packetReceipt(param);
      return this.packetReceipt;
    },
    async fetchPacketAcknowledgement(param: QueryPacketAcknowledgementRequestSDKType) {
      this.packetAcknowledgement = await this.lcdClient.packetAcknowledgement(param);
      return this.packetAcknowledgement;
    },
    async fetchPacketAcknowledgements(param: QueryPacketAcknowledgementsRequestSDKType) {
      this.packetAcknowledgements = await this.lcdClient.packetAcknowledgements(param);
      return this.packetAcknowledgements;
    },
    async fetchUnreceivedPackets(param: QueryUnreceivedPacketsRequestSDKType) {
      this.unreceivedPackets = await this.lcdClient.unreceivedPackets(param);
      return this.unreceivedPackets;
    },
    async fetchUnreceivedAcks(param: QueryUnreceivedAcksRequestSDKType) {
      this.unreceivedAcks = await this.lcdClient.unreceivedAcks(param);
      return this.unreceivedAcks;
    },
    async fetchNextSequenceReceive(param: QueryNextSequenceReceiveRequestSDKType) {
      this.nextSequenceReceive = await this.lcdClient.nextSequenceReceive(param);
      return this.nextSequenceReceive;
    }
  }
});