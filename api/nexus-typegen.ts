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
  Community: { // root type
    id: string; // String!
    name: string; // String!
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
  Profile: { // root type
    bio: string; // String!
    id: number; // Int!
    matchingPoint: number; // Int!
    name: string; // String!
  }
  Query: {};
  Skill: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Subscription: {};
  User: { // root type
    githubBio: string; // String!
    githubId: string; // String!
    githubLogin: string; // String!
    id: number; // Int!
  }
  Video: { // root type
    accessToken: string; // String!
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
  Community: { // field return type
    id: string; // String!
    name: string; // String!
    profiles: NexusGenRootTypes['Profile'][]; // [Profile!]!
  }
  Message: { // field return type
    content: string; // String!
    createdBy: NexusGenRootTypes['Profile']; // Profile!
    id: number; // Int!
    post: NexusGenRootTypes['Post']; // Post!
  }
  Mutation: { // field return type
    authGithub: NexusGenRootTypes['AuthPayLoad']; // AuthPayLoad!
    createCommunity: NexusGenRootTypes['Community']; // Community!
    createMessage: NexusGenRootTypes['Message']; // Message!
    deleteCommunity: NexusGenRootTypes['Community']; // Community!
    deletePost: NexusGenRootTypes['Post']; // Post!
    joinCommunity: NexusGenRootTypes['AuthPayLoad']; // AuthPayLoad!
    post: NexusGenRootTypes['Post']; // Post!
    registerNavigator: NexusGenRootTypes['Post']; // Post!
    updateCommunity: NexusGenRootTypes['Community']; // Community!
    updateMyProfile: NexusGenRootTypes['Profile'] | null; // Profile
    updatePost: NexusGenRootTypes['Post']; // Post!
  }
  Post: { // field return type
    completedAt: NexusGenScalars['DateTime'] | null; // DateTime
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    driver: NexusGenRootTypes['Profile'] | null; // Profile
    id: string; // String!
    messages: NexusGenRootTypes['Message'][]; // [Message!]!
    navigator: NexusGenRootTypes['Profile'] | null; // Profile
    requiredSkills: NexusGenRootTypes['Skill'][]; // [Skill!]!
    title: string; // String!
  }
  Profile: { // field return type
    bio: string; // String!
    community: NexusGenRootTypes['Community']; // Community!
    driverPost: NexusGenRootTypes['Post'][]; // [Post!]!
    id: number; // Int!
    matchingPoint: number; // Int!
    name: string; // String!
    navigatorPost: NexusGenRootTypes['Post'][]; // [Post!]!
    user: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    accessToken: NexusGenRootTypes['Video']; // Video!
    communities: NexusGenRootTypes['Community'][]; // [Community!]!
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    messagesByPostId: NexusGenRootTypes['Message'][]; // [Message!]!
    myCommunities: NexusGenRootTypes['Community'][]; // [Community!]!
    myCurrentCommunity: NexusGenRootTypes['Community'] | null; // Community
    myDrivingPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    myMatchedPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    myProfile: NexusGenRootTypes['Profile']; // Profile!
    post: NexusGenRootTypes['Post'] | null; // Post
    profile: NexusGenRootTypes['Profile'] | null; // Profile
    profiles: NexusGenRootTypes['Profile'][]; // [Profile!]!
    skills: NexusGenRootTypes['Skill'][]; // [Skill!]!
    unmatchedPosts: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
  }
  Skill: { // field return type
    id: number; // Int!
    name: string; // String!
  }
  Subscription: { // field return type
    waitForMessage: NexusGenRootTypes['Message'] | null; // Message
  }
  User: { // field return type
    githubBio: string; // String!
    githubId: string; // String!
    githubLogin: string; // String!
    id: number; // Int!
    profiles: NexusGenRootTypes['Profile'][]; // [Profile!]!
  }
  Video: { // field return type
    accessToken: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayLoad: { // field return type name
    token: 'String'
    user: 'User'
  }
  Community: { // field return type name
    id: 'String'
    name: 'String'
    profiles: 'Profile'
  }
  Message: { // field return type name
    content: 'String'
    createdBy: 'Profile'
    id: 'Int'
    post: 'Post'
  }
  Mutation: { // field return type name
    authGithub: 'AuthPayLoad'
    createCommunity: 'Community'
    createMessage: 'Message'
    deleteCommunity: 'Community'
    deletePost: 'Post'
    joinCommunity: 'AuthPayLoad'
    post: 'Post'
    registerNavigator: 'Post'
    updateCommunity: 'Community'
    updateMyProfile: 'Profile'
    updatePost: 'Post'
  }
  Post: { // field return type name
    completedAt: 'DateTime'
    createdAt: 'DateTime'
    description: 'String'
    driver: 'Profile'
    id: 'String'
    messages: 'Message'
    navigator: 'Profile'
    requiredSkills: 'Skill'
    title: 'String'
  }
  Profile: { // field return type name
    bio: 'String'
    community: 'Community'
    driverPost: 'Post'
    id: 'Int'
    matchingPoint: 'Int'
    name: 'String'
    navigatorPost: 'Post'
    user: 'User'
  }
  Query: { // field return type name
    accessToken: 'Video'
    communities: 'Community'
    feed: 'Post'
    messagesByPostId: 'Message'
    myCommunities: 'Community'
    myCurrentCommunity: 'Community'
    myDrivingPosts: 'Post'
    myMatchedPosts: 'Post'
    myProfile: 'Profile'
    post: 'Post'
    profile: 'Profile'
    profiles: 'Profile'
    skills: 'Skill'
    unmatchedPosts: 'Post'
  }
  Skill: { // field return type name
    id: 'Int'
    name: 'String'
  }
  Subscription: { // field return type name
    waitForMessage: 'Message'
  }
  User: { // field return type name
    githubBio: 'String'
    githubId: 'String'
    githubLogin: 'String'
    id: 'Int'
    profiles: 'Profile'
  }
  Video: { // field return type name
    accessToken: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    authGithub: { // args
      code: string; // String!
    }
    createCommunity: { // args
      name: string; // String!
    }
    createMessage: { // args
      content: string; // String!
      postId: string; // String!
    }
    deleteCommunity: { // args
      communityId: string; // String!
    }
    deletePost: { // args
      id: string; // String!
    }
    joinCommunity: { // args
      communityId: string; // String!
    }
    post: { // args
      description: string; // String!
      requiredSkillsId: number[]; // [Int!]!
      title: string; // String!
    }
    registerNavigator: { // args
      navigatorId: number; // Int!
      postId: string; // String!
    }
    updateCommunity: { // args
      id: string; // String!
      name: string; // String!
    }
    updateMyProfile: { // args
      bio?: string | null; // String
      name?: string | null; // String
    }
    updatePost: { // args
      description?: string | null; // String
      id: string; // String!
      requiredSkillsIds?: Array<number | null> | null; // [Int]
      title?: string | null; // String
    }
  }
  Query: {
    accessToken: { // args
      identity?: string | null; // String
      room?: string | null; // String
    }
    messagesByPostId: { // args
      postId: string; // String!
    }
    post: { // args
      id: string; // String!
    }
    profile: { // args
      id: number; // Int!
    }
  }
  Subscription: {
    waitForMessage: { // args
      postId: string; // String!
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