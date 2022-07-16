/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayLoad: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Message: { // root type
    content: string; // String!
    id: number; // Int!
  }
  Mutation: {};
  Post: { // root type
    completedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // String!
    title: string; // String!
  }
  Query: {};
  Skill: { // root type
    id: number; // Int!
    name: string; // String!
  }
  User: { // root type
    bio: string; // String!
    githubId: string; // String!
    githubLogin: string; // String!
    id: number; // Int!
    matchingPoint: number; // Int!
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayLoad: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Message: { // field return type
    content: string; // String!
    id: number; // Int!
  }
  Mutation: { // field return type
    authGithub: NexusGenRootTypes['AuthPayLoad']; // AuthPayLoad!
    deletePost: NexusGenRootTypes['Post']; // Post!
    post: NexusGenRootTypes['Post']; // Post!
    updateMe: NexusGenRootTypes['User'] | null; // User
  }
  Post: { // field return type
    completedAt: NexusGenScalars['DateTime'] | null; // DateTime
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    driver: NexusGenRootTypes['User'] | null; // User
    id: string; // String!
    messages: NexusGenRootTypes['Message'][]; // [Message!]!
    navigator: NexusGenRootTypes['User'] | null; // User
    requiredSkills: NexusGenRootTypes['Skill'][]; // [Skill!]!
    title: string; // String!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    me: NexusGenRootTypes['User']; // User!
    myDrivingPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    myMatchedPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    post: NexusGenRootTypes['Post'] | null; // Post
    skills: NexusGenRootTypes['Skill'][]; // [Skill!]!
    unmatchedPosts: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Skill: { // field return type
    id: number; // Int!
    name: string; // String!
  }
  User: { // field return type
    bio: string; // String!
    driverPost: NexusGenRootTypes['Post'][]; // [Post!]!
    githubId: string; // String!
    githubLogin: string; // String!
    id: number; // Int!
    matchingPoint: number; // Int!
    name: string; // String!
    navigatorPost: NexusGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayLoad: { // field return type name
    token: 'String'
    user: 'User'
  }
  Message: { // field return type name
    content: 'String'
    id: 'Int'
  }
  Mutation: { // field return type name
    authGithub: 'AuthPayLoad'
    deletePost: 'Post'
    post: 'Post'
    updateMe: 'User'
  }
  Post: { // field return type name
    completedAt: 'DateTime'
    createdAt: 'DateTime'
    description: 'String'
    driver: 'User'
    id: 'String'
    messages: 'Message'
    navigator: 'User'
    requiredSkills: 'Skill'
    title: 'String'
  }
  Query: { // field return type name
    feed: 'Post'
    me: 'User'
    myDrivingPosts: 'Post'
    myMatchedPosts: 'Post'
    post: 'Post'
    skills: 'Skill'
    unmatchedPosts: 'Post'
    user: 'User'
    users: 'User'
  }
  Skill: { // field return type name
    id: 'Int'
    name: 'String'
  }
  User: { // field return type name
    bio: 'String'
    driverPost: 'Post'
    githubId: 'String'
    githubLogin: 'String'
    id: 'Int'
    matchingPoint: 'Int'
    name: 'String'
    navigatorPost: 'Post'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    authGithub: { // args
      code: string; // String!
    }
    deletePost: { // args
      id: string; // String!
    }
    post: { // args
      description: string; // String!
      requiredSkillsId: number[]; // [Int!]!
      title: string; // String!
    }
    updateMe: { // args
      bio?: string | null; // String
      name?: string | null; // String
    }
  }
  Query: {
    post: { // args
      id: string; // String!
    }
    user: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}