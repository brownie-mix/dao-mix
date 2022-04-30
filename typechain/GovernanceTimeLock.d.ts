/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GovernanceTimeLockInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "EXECUTOR_ROLE()": FunctionFragment;
    "PROPOSER_ROLE()": FunctionFragment;
    "TIMELOCK_ADMIN_ROLE()": FunctionFragment;
    "cancel(bytes32)": FunctionFragment;
    "execute(address,uint256,bytes,bytes32,bytes32)": FunctionFragment;
    "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
    "getDataGrantExecutorRole(address)": FunctionFragment;
    "getDataGrantProposerRole(address)": FunctionFragment;
    "getDataMinDelay()": FunctionFragment;
    "getMinDelay()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getTimestamp(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "hashOperation(address,uint256,bytes,bytes32,bytes32)": FunctionFragment;
    "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
    "isOperation(bytes32)": FunctionFragment;
    "isOperationDone(bytes32)": FunctionFragment;
    "isOperationPending(bytes32)": FunctionFragment;
    "isOperationReady(bytes32)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "schedule(address,uint256,bytes,bytes32,bytes32,uint256)": FunctionFragment;
    "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateDelay(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXECUTOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TIMELOCK_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBatch",
    values: [string[], BigNumberish[], BytesLike[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDataGrantExecutorRole",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDataGrantProposerRole",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDataMinDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hashOperation",
    values: [string, BigNumberish, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashOperationBatch",
    values: [string[], BigNumberish[], BytesLike[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationDone",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationPending",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationReady",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "schedule",
    values: [
      string,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "scheduleBatch",
    values: [
      string[],
      BigNumberish[],
      BytesLike[],
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDelay",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXECUTOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TIMELOCK_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataGrantExecutorRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataGrantProposerRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataMinDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashOperationBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationDone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scheduleBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDelay",
    data: BytesLike
  ): Result;

  events: {
    "CallExecuted(bytes32,uint256,address,uint256,bytes)": EventFragment;
    "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": EventFragment;
    "Cancelled(bytes32)": EventFragment;
    "MinDelayChange(uint256,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallScheduled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Cancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinDelayChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export type CallExecutedEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string] & {
    id: string;
    index: BigNumber;
    target: string;
    value: BigNumber;
    data: string;
  }
>;

export type CallScheduledEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string, string, BigNumber] & {
    id: string;
    index: BigNumber;
    target: string;
    value: BigNumber;
    data: string;
    predecessor: string;
    delay: BigNumber;
  }
>;

export type CancelledEvent = TypedEvent<[string] & { id: string }>;

export type MinDelayChangeEvent = TypedEvent<
  [BigNumber, BigNumber] & { oldDuration: BigNumber; newDuration: BigNumber }
>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export class GovernanceTimeLock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GovernanceTimeLockInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    EXECUTOR_ROLE(overrides?: CallOverrides): Promise<[string]>;

    PROPOSER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDataGrantExecutorRole(
      account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDataGrantProposerRole(
      account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDataMinDelay(overrides?: CallOverrides): Promise<[string]>;

    getMinDelay(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { duration: BigNumber }>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getTimestamp(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hashOperation(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { hash: string }>;

    hashOperationBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { hash: string }>;

    isOperation(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { pending: boolean }>;

    isOperationDone(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { done: boolean }>;

    isOperationPending(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { pending: boolean }>;

    isOperationReady(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { ready: boolean }>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    schedule(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  EXECUTOR_ROLE(overrides?: CallOverrides): Promise<string>;

  PROPOSER_ROLE(overrides?: CallOverrides): Promise<string>;

  TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  cancel(
    id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    target: string,
    value: BigNumberish,
    data: BytesLike,
    predecessor: BytesLike,
    salt: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeBatch(
    targets: string[],
    values: BigNumberish[],
    datas: BytesLike[],
    predecessor: BytesLike,
    salt: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDataGrantExecutorRole(
    account: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getDataGrantProposerRole(
    account: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getDataMinDelay(overrides?: CallOverrides): Promise<string>;

  getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hashOperation(
    target: string,
    value: BigNumberish,
    data: BytesLike,
    predecessor: BytesLike,
    salt: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  hashOperationBatch(
    targets: string[],
    values: BigNumberish[],
    datas: BytesLike[],
    predecessor: BytesLike,
    salt: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  isOperation(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isOperationPending(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOperationReady(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  schedule(
    target: string,
    value: BigNumberish,
    data: BytesLike,
    predecessor: BytesLike,
    salt: BytesLike,
    delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  scheduleBatch(
    targets: string[],
    values: BigNumberish[],
    datas: BytesLike[],
    predecessor: BytesLike,
    salt: BytesLike,
    delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateDelay(
    newDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    EXECUTOR_ROLE(overrides?: CallOverrides): Promise<string>;

    PROPOSER_ROLE(overrides?: CallOverrides): Promise<string>;

    TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    cancel(id: BytesLike, overrides?: CallOverrides): Promise<void>;

    execute(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    executeBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getDataGrantExecutorRole(
      account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getDataGrantProposerRole(
      account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getDataMinDelay(overrides?: CallOverrides): Promise<string>;

    getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hashOperation(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    hashOperationBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    isOperation(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isOperationPending(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperationReady(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    schedule(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CallExecuted(bytes32,uint256,address,uint256,bytes)"(
      id?: BytesLike | null,
      index?: BigNumberish | null,
      target?: null,
      value?: null,
      data?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string],
      {
        id: string;
        index: BigNumber;
        target: string;
        value: BigNumber;
        data: string;
      }
    >;

    CallExecuted(
      id?: BytesLike | null,
      index?: BigNumberish | null,
      target?: null,
      value?: null,
      data?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string],
      {
        id: string;
        index: BigNumber;
        target: string;
        value: BigNumber;
        data: string;
      }
    >;

    "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)"(
      id?: BytesLike | null,
      index?: BigNumberish | null,
      target?: null,
      value?: null,
      data?: null,
      predecessor?: null,
      delay?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string, string, BigNumber],
      {
        id: string;
        index: BigNumber;
        target: string;
        value: BigNumber;
        data: string;
        predecessor: string;
        delay: BigNumber;
      }
    >;

    CallScheduled(
      id?: BytesLike | null,
      index?: BigNumberish | null,
      target?: null,
      value?: null,
      data?: null,
      predecessor?: null,
      delay?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber, string, string, BigNumber],
      {
        id: string;
        index: BigNumber;
        target: string;
        value: BigNumber;
        data: string;
        predecessor: string;
        delay: BigNumber;
      }
    >;

    "Cancelled(bytes32)"(
      id?: BytesLike | null
    ): TypedEventFilter<[string], { id: string }>;

    Cancelled(
      id?: BytesLike | null
    ): TypedEventFilter<[string], { id: string }>;

    "MinDelayChange(uint256,uint256)"(
      oldDuration?: null,
      newDuration?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldDuration: BigNumber; newDuration: BigNumber }
    >;

    MinDelayChange(
      oldDuration?: null,
      newDuration?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldDuration: BigNumber; newDuration: BigNumber }
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    EXECUTOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    PROPOSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDataGrantExecutorRole(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDataGrantProposerRole(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDataMinDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashOperation(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashOperationBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOperation(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isOperationDone(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOperationPending(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOperationReady(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    schedule(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    EXECUTOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROPOSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TIMELOCK_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDataGrantExecutorRole(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDataGrantProposerRole(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDataMinDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTimestamp(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashOperation(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashOperationBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperation(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperationDone(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperationPending(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperationReady(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    schedule(
      target: string,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
