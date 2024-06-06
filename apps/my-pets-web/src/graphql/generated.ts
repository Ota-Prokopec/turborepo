import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  PetGender: { input: male|female; output: male|female; }
  PetType: { input: cat|dog; output: cat|dog; }
  StringOrNumber: { input: string|number; output: string|number; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  userId: Scalars['String']['output'];
};

export type CreatePetDescriptionCustomField = {
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePetInput = {
  ownerPhoneNumber: Scalars['String']['input'];
  petAddress: Scalars['String']['input'];
  petAllergens: Array<Scalars['String']['input']>;
  petDescriptionCustomFields: Array<CreatePetDescriptionCustomField>;
  petGender: Scalars['PetGender']['input'];
  petName: Scalars['String']['input'];
  petPicture: Scalars['String']['input'];
  petTreating: Scalars['String']['input'];
  petType: Scalars['PetType']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPet: Pet;
};


export type MutationCreatePetArgs = {
  input: CreatePetInput;
};

export type Pet = {
  __typename?: 'Pet';
  _collectionId: Scalars['String']['output'];
  _createdAt: Scalars['String']['output'];
  _databaseId: Scalars['String']['output'];
  _id: Scalars['String']['output'];
  _permissions: Array<Scalars['String']['output']>;
  _updatedAt: Scalars['String']['output'];
  ownerPhoneNumber: Scalars['String']['output'];
  petAddress: Scalars['String']['output'];
  petAllergens: Array<Scalars['String']['output']>;
  petDescriptionCustomFieldIds: Array<Scalars['String']['output']>;
  petDescriptionCustomFields: Array<PetDescriptionCustomField>;
  petGender: Scalars['PetGender']['output'];
  petName: Scalars['String']['output'];
  /** Pet Picture is pet pictures URL */
  petPicture: Scalars['String']['output'];
  petTreating: Scalars['String']['output'];
  petType: Scalars['PetType']['output'];
};

export type PetDescriptionCustomField = {
  __typename?: 'PetDescriptionCustomField';
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAccount: Account;
  getListOfPets: Array<Pet>;
  getPet: Pet;
  setSession: Scalars['Boolean']['output'];
};


export type QueryGetPetArgs = {
  petId: Scalars['String']['input'];
};


export type QuerySetSessionArgs = {
  session: Scalars['String']['input'];
};

export type Session = {
  __typename?: 'Session';
  session: Scalars['String']['output'];
};

export type GetAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountQuery = { __typename?: 'Query', getAccount: { __typename?: 'Account', userId: string } };

export type SetSessionQueryVariables = Exact<{
  session: Scalars['String']['input'];
}>;


export type SetSessionQuery = { __typename?: 'Query', setSession: boolean };

export type CreatePetMutationVariables = Exact<{
  input: CreatePetInput;
}>;


export type CreatePetMutation = { __typename?: 'Mutation', createPet: { __typename?: 'Pet', _id: string, petAddress: string, petName: string, petType: cat|dog, petAllergens: Array<string>, ownerPhoneNumber: string, petTreating: string, petDescriptionCustomFieldIds: Array<string>, petGender: male|female, petPicture: string, petDescriptionCustomFields: Array<{ __typename?: 'PetDescriptionCustomField', title: string, text: string }> } };

export type GetListOfPetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListOfPetsQuery = { __typename?: 'Query', getListOfPets: Array<{ __typename?: 'Pet', _id: string, petAddress: string, petName: string, petType: cat|dog, petAllergens: Array<string>, ownerPhoneNumber: string, petTreating: string, petDescriptionCustomFieldIds: Array<string>, petGender: male|female, petPicture: string, _permissions: Array<string>, _databaseId: string, _collectionId: string, _updatedAt: string, _createdAt: string, petDescriptionCustomFields: Array<{ __typename?: 'PetDescriptionCustomField', title: string, text: string }> }> };

export type GetPetQueryVariables = Exact<{
  petId: Scalars['String']['input'];
}>;


export type GetPetQuery = { __typename?: 'Query', getPet: { __typename?: 'Pet', _createdAt: string, _updatedAt: string, _collectionId: string, _id: string, _permissions: Array<string>, _databaseId: string, petAddress: string, petName: string, petType: cat|dog, petAllergens: Array<string>, ownerPhoneNumber: string, petTreating: string, petPicture: string, petDescriptionCustomFieldIds: Array<string>, petGender: male|female, petDescriptionCustomFields: Array<{ __typename?: 'PetDescriptionCustomField', title: string, text: string }> } };


export const GetAccountDocument = gql`
    query getAccount {
  getAccount {
    userId
  }
}
    `;
export const SetSessionDocument = gql`
    query setSession($session: String!) {
  setSession(session: $session)
}
    `;
export const CreatePetDocument = gql`
    mutation createPet($input: CreatePetInput!) {
  createPet(input: $input) {
    _id
    petAddress
    petName
    petType
    petAllergens
    ownerPhoneNumber
    petTreating
    petDescriptionCustomFieldIds
    petGender
    petDescriptionCustomFields {
      title
      text
    }
    petPicture
  }
}
    `;
export const GetListOfPetsDocument = gql`
    query getListOfPets {
  getListOfPets {
    _id
    petAddress
    petName
    petType
    petAllergens
    ownerPhoneNumber
    petTreating
    petDescriptionCustomFieldIds
    petGender
    petDescriptionCustomFields {
      title
      text
    }
    petPicture
    _permissions
    _databaseId
    _collectionId
    _updatedAt
    _createdAt
  }
}
    `;
export const GetPetDocument = gql`
    query getPet($petId: String!) {
  getPet(petId: $petId) {
    _createdAt
    _updatedAt
    _collectionId
    _id
    _permissions
    _databaseId
    petAddress
    petName
    petType
    petAllergens
    ownerPhoneNumber
    petTreating
    petPicture
    petDescriptionCustomFieldIds
    petGender
    petDescriptionCustomFields {
      title
      text
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAccount(variables?: GetAccountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAccountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAccountQuery>(GetAccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAccount', 'query');
    },
    setSession(variables: SetSessionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetSessionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetSessionQuery>(SetSessionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setSession', 'query');
    },
    createPet(variables: CreatePetMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePetMutation>(CreatePetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPet', 'mutation');
    },
    getListOfPets(variables?: GetListOfPetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetListOfPetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListOfPetsQuery>(GetListOfPetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListOfPets', 'query');
    },
    getPet(variables: GetPetQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPetQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPetQuery>(GetPetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPet', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;