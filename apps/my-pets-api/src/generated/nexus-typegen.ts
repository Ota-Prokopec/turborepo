/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.
     */
    url<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "URL";
    coords<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Coords";
    petGender<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "PetGender";
    petType<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "PetType";
    stringOrNumber<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "StringOrNumber";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.
     */
    url<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "URL";
    coords<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Coords";
    petGender<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "PetGender";
    petType<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "PetType";
    stringOrNumber<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "StringOrNumber";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreatePetAddressInput: { // input type
    petAddress: string; // String!
    petAddressCoords: NexusGenScalars['Coords']; // Coords!
  }
  CreatePetDescriptionCustomField: { // input type
    text: string; // String!
    title: string; // String!
  }
  CreatePetInput: { // input type
    ownerPhoneNumber: string; // String!
    petAddress: NexusGenInputs['CreatePetAddressInput']; // CreatePetAddressInput!
    petAllergens: string[]; // [String!]!
    petDescriptionCustomFields: NexusGenInputs['CreatePetDescriptionCustomField'][]; // [CreatePetDescriptionCustomField!]!
    petGender: NexusGenScalars['PetGender']; // PetGender!
    petName: string; // String!
    petPicture: string; // String!
    petTreating: string; // String!
    petType: NexusGenScalars['PetType']; // PetType!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Coords: [number, number]
  PetGender: 'male' | 'female'
  PetType: 'cat' | 'dog'
  StringOrNumber: string | number
  URL: URL
}

export interface NexusGenObjects {
  Account: { // root type
    userId: string; // String!
  }
  LostPetsLocation: { // root type
    _collectionId: string; // String!
    _createdAt: string; // String!
    _databaseId: string; // String!
    _id: string; // String!
    _permissions: string[]; // [String!]!
    _updatedAt: string; // String!
    coords: NexusGenScalars['Coords']; // Coords!
  }
  Mutation: {};
  Pet: { // root type
    _collectionId: string; // String!
    _createdAt: string; // String!
    _databaseId: string; // String!
    _id: string; // String!
    _permissions: string[]; // [String!]!
    _updatedAt: string; // String!
    ownerPhoneNumber: string; // String!
    petAddressId: string; // String!
    petAllergens: string[]; // [String!]!
    petDescriptionCustomFieldIds: string[]; // [String!]!
    petGender: NexusGenScalars['PetGender']; // PetGender!
    petName: string; // String!
    petPicture: string; // String!
    petTreating: string; // String!
    petType: NexusGenScalars['PetType']; // PetType!
    userId: string; // String!
  }
  PetAddress: { // root type
    petAddress: string; // String!
    petAddressCoords: NexusGenScalars['Coords']; // Coords!
  }
  PetDescriptionCustomField: { // root type
    _collectionId: string; // String!
    _createdAt: string; // String!
    _databaseId: string; // String!
    _id: string; // String!
    _permissions: string[]; // [String!]!
    _updatedAt: string; // String!
    text: string; // String!
    title: string; // String!
  }
  Query: {};
  Session: { // root type
    session: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Account: { // field return type
    userId: string; // String!
  }
  LostPetsLocation: { // field return type
    _collectionId: string; // String!
    _createdAt: string; // String!
    _databaseId: string; // String!
    _id: string; // String!
    _permissions: string[]; // [String!]!
    _updatedAt: string; // String!
    coords: NexusGenScalars['Coords']; // Coords!
  }
  Mutation: { // field return type
    createPet: NexusGenRootTypes['Pet']; // Pet!
    createRecordToLostPetsLocation: boolean; // Boolean!
    deletePet: boolean; // Boolean!
    deleteRecordToLostPetsLocation: boolean; // Boolean!
    logout: boolean; // Boolean!
    updatePet: NexusGenRootTypes['Pet']; // Pet!
  }
  Pet: { // field return type
    _collectionId: string; // String!
    _createdAt: string; // String!
    _databaseId: string; // String!
    _id: string; // String!
    _permissions: string[]; // [String!]!
    _updatedAt: string; // String!
    linkId: string; // String!
    lostPetLocations: NexusGenRootTypes['LostPetsLocation'][]; // [LostPetsLocation!]!
    ownerPhoneNumber: string; // String!
    petAddress: NexusGenRootTypes['PetAddress']; // PetAddress!
    petAddressId: string; // String!
    petAllergens: string[]; // [String!]!
    petDescriptionCustomFieldIds: string[]; // [String!]!
    petDescriptionCustomFields: NexusGenRootTypes['PetDescriptionCustomField'][]; // [PetDescriptionCustomField!]!
    petGender: NexusGenScalars['PetGender']; // PetGender!
    petName: string; // String!
    petPicture: string; // String!
    petTreating: string; // String!
    petType: NexusGenScalars['PetType']; // PetType!
    userId: string; // String!
  }
  PetAddress: { // field return type
    petAddress: string; // String!
    petAddressCoords: NexusGenScalars['Coords']; // Coords!
  }
  PetDescriptionCustomField: { // field return type
    _collectionId: string; // String!
    _createdAt: string; // String!
    _databaseId: string; // String!
    _id: string; // String!
    _permissions: string[]; // [String!]!
    _updatedAt: string; // String!
    text: string; // String!
    title: string; // String!
  }
  Query: { // field return type
    getAccount: NexusGenRootTypes['Account']; // Account!
    getListOfPets: NexusGenRootTypes['Pet'][]; // [Pet!]!
    getPet: NexusGenRootTypes['Pet']; // Pet!
    setSession: boolean; // Boolean!
  }
  Session: { // field return type
    session: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    userId: 'String'
  }
  LostPetsLocation: { // field return type name
    _collectionId: 'String'
    _createdAt: 'String'
    _databaseId: 'String'
    _id: 'String'
    _permissions: 'String'
    _updatedAt: 'String'
    coords: 'Coords'
  }
  Mutation: { // field return type name
    createPet: 'Pet'
    createRecordToLostPetsLocation: 'Boolean'
    deletePet: 'Boolean'
    deleteRecordToLostPetsLocation: 'Boolean'
    logout: 'Boolean'
    updatePet: 'Pet'
  }
  Pet: { // field return type name
    _collectionId: 'String'
    _createdAt: 'String'
    _databaseId: 'String'
    _id: 'String'
    _permissions: 'String'
    _updatedAt: 'String'
    linkId: 'String'
    lostPetLocations: 'LostPetsLocation'
    ownerPhoneNumber: 'String'
    petAddress: 'PetAddress'
    petAddressId: 'String'
    petAllergens: 'String'
    petDescriptionCustomFieldIds: 'String'
    petDescriptionCustomFields: 'PetDescriptionCustomField'
    petGender: 'PetGender'
    petName: 'String'
    petPicture: 'String'
    petTreating: 'String'
    petType: 'PetType'
    userId: 'String'
  }
  PetAddress: { // field return type name
    petAddress: 'String'
    petAddressCoords: 'Coords'
  }
  PetDescriptionCustomField: { // field return type name
    _collectionId: 'String'
    _createdAt: 'String'
    _databaseId: 'String'
    _id: 'String'
    _permissions: 'String'
    _updatedAt: 'String'
    text: 'String'
    title: 'String'
  }
  Query: { // field return type name
    getAccount: 'Account'
    getListOfPets: 'Pet'
    getPet: 'Pet'
    setSession: 'Boolean'
  }
  Session: { // field return type name
    session: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPet: { // args
      input: NexusGenInputs['CreatePetInput']; // CreatePetInput!
    }
    createRecordToLostPetsLocation: { // args
      coords: NexusGenScalars['Coords']; // Coords!
      ownerUserId: string; // String!
      petId: string; // String!
    }
    deletePet: { // args
      petId: string; // String!
    }
    deleteRecordToLostPetsLocation: { // args
      documentId: string; // String!
    }
    updatePet: { // args
      data: NexusGenInputs['CreatePetInput']; // CreatePetInput!
      petId: string; // String!
    }
  }
  Query: {
    getPet: { // args
      petLinkId: string; // String!
    }
    setSession: { // args
      session: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

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