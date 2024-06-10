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
  Coords: { input: [number, number]; output: [number, number]; }
  PetGender: { input: 'male'|'female'; output: 'male'|'female'; }
  PetType: { input: 'cat'|'dog'; output: 'cat'|'dog'; }
  StringOrNumber: { input: string|number; output: string|number; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  userId: Scalars['String']['output'];
};

export type CreatePetAddressInput = {
  petAddress: Scalars['String']['input'];
  petAddressCoords: Scalars['Coords']['input'];
};

export type CreatePetDescriptionCustomField = {
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePetInput = {
  ownerPhoneNumber: Scalars['String']['input'];
  petAddress: CreatePetAddressInput;
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
  deletePet: Scalars['Boolean']['output'];
  logout: Scalars['Boolean']['output'];
  updatePet: Pet;
};


export type MutationCreatePetArgs = {
  input: CreatePetInput;
};


export type MutationDeletePetArgs = {
  petId: Scalars['String']['input'];
};


export type MutationUpdatePetArgs = {
  data: CreatePetInput;
  petId: Scalars['String']['input'];
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
  petAddress: PetAddress;
  petAddressId: Scalars['String']['output'];
  petAllergens: Array<Scalars['String']['output']>;
  petDescriptionCustomFieldIds: Array<Scalars['String']['output']>;
  petDescriptionCustomFields: Array<PetDescriptionCustomField>;
  petGender: Scalars['PetGender']['output'];
  petName: Scalars['String']['output'];
  /** Pet Picture is pet pictures URL */
  petPicture: Scalars['String']['output'];
  petTreating: Scalars['String']['output'];
  petType: Scalars['PetType']['output'];
  userId: Scalars['String']['output'];
};

export type PetAddress = {
  __typename?: 'PetAddress';
  petAddress: Scalars['String']['output'];
  petAddressCoords: Scalars['Coords']['output'];
};

export type PetDescriptionCustomField = {
  __typename?: 'PetDescriptionCustomField';
  _collectionId: Scalars['String']['output'];
  _createdAt: Scalars['String']['output'];
  _databaseId: Scalars['String']['output'];
  _id: Scalars['String']['output'];
  _permissions: Array<Scalars['String']['output']>;
  _updatedAt: Scalars['String']['output'];
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

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logout: boolean };

export type SetSessionQueryVariables = Exact<{
  session: Scalars['String']['input'];
}>;


export type SetSessionQuery = { __typename?: 'Query', setSession: boolean };

export type CreatePetMutationVariables = Exact<{
  input: CreatePetInput;
}>;


export type CreatePetMutation = { __typename?: 'Mutation', createPet: { __typename?: 'Pet', _id: string, petName: string, petType: 'cat'|'dog', petAllergens: Array<string>, ownerPhoneNumber: string, petTreating: string, petDescriptionCustomFieldIds: Array<string>, petGender: 'male'|'female', petPicture: string, petAddressId: string, userId: string, petDescriptionCustomFields: Array<{ __typename?: 'PetDescriptionCustomField', title: string, text: string }>, petAddress: { __typename?: 'PetAddress', petAddress: string, petAddressCoords: [number, number] } } };

export type DeletePetMutationVariables = Exact<{
  petId: Scalars['String']['input'];
}>;


export type DeletePetMutation = { __typename?: 'Mutation', deletePet: boolean };

export type UpdatePetMutationVariables = Exact<{
  petId: Scalars['String']['input'];
  data: CreatePetInput;
}>;


export type UpdatePetMutation = { __typename?: 'Mutation', updatePet: { __typename?: 'Pet', _createdAt: string, _updatedAt: string, _collectionId: string, _id: string, _permissions: Array<string>, _databaseId: string, userId: string, petName: string, petType: 'cat'|'dog', petAllergens: Array<string>, ownerPhoneNumber: string, petTreating: string, petPicture: string, petDescriptionCustomFieldIds: Array<string>, petGender: 'male'|'female', petAddressId: string, petDescriptionCustomFields: Array<{ __typename?: 'PetDescriptionCustomField', _createdAt: string, _updatedAt: string, _collectionId: string, _id: string, _permissions: Array<string>, _databaseId: string, title: string, text: string }>, petAddress: { __typename?: 'PetAddress', petAddress: string, petAddressCoords: [number, number] } } };

export type GetListOfPetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListOfPetsQuery = { __typename?: 'Query', getListOfPets: Array<{ __typename?: 'Pet', _id: string, petName: string, petType: 'cat'|'dog', petAllergens: Array<string>, ownerPhoneNumber: string, petTreating: string, userId: string, petDescriptionCustomFieldIds: Array<string>, petGender: 'male'|'female', petPicture: string, _permissions: Array<string>, _databaseId: string, _collectionId: string, _updatedAt: string, _createdAt: string, petAddressId: string, petDescriptionCustomFields: Array<{ __typename?: 'PetDescriptionCustomField', title: string, text: string }>, petAddress: { __typename?: 'PetAddress', petAddress: string, petAddressCoords: [number, number] } }> };

export type GetPetQueryVariables = Exact<{
  petId: Scalars['String']['input'];
}>;


export type GetPetQuery = { __typename?: 'Query', getPet: { __typename?: 'Pet', _createdAt: string, _updatedAt: string, _collectionId: string, _id: string, _permissions: Array<string>, _databaseId: string, userId: string, petName: string, petType: 'cat'|'dog', petAllergens: Array<string>, ownerPhoneNumber: string, petTreating: string, petPicture: string, petDescriptionCustomFieldIds: Array<string>, petGender: 'male'|'female', petAddressId: string, petDescriptionCustomFields: Array<{ __typename?: 'PetDescriptionCustomField', _createdAt: string, _updatedAt: string, _collectionId: string, _id: string, _permissions: Array<string>, _databaseId: string, title: string, text: string }>, petAddress: { __typename?: 'PetAddress', petAddress: string, petAddressCoords: [number, number] } } };


export const GetAccountDocument = gql`
    query getAccount {
  getAccount {
    userId
  }
}
    `;
export const LogOutDocument = gql`
    mutation logOut {
  logout
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
    petAddressId
    userId
    petAddress {
      petAddress
      petAddressCoords
    }
  }
}
    `;
export const DeletePetDocument = gql`
    mutation deletePet($petId: String!) {
  deletePet(petId: $petId)
}
    `;
export const UpdatePetDocument = gql`
    mutation updatePet($petId: String!, $data: CreatePetInput!) {
  updatePet(petId: $petId, data: $data) {
    _createdAt
    _updatedAt
    _collectionId
    _id
    _permissions
    _databaseId
    userId
    petName
    petType
    petAllergens
    ownerPhoneNumber
    petTreating
    petPicture
    petDescriptionCustomFieldIds
    petGender
    petDescriptionCustomFields {
      _createdAt
      _updatedAt
      _collectionId
      _id
      _permissions
      _databaseId
      title
      text
    }
    petAddressId
    petAddress {
      petAddress
      petAddressCoords
    }
  }
}
    `;
export const GetListOfPetsDocument = gql`
    query getListOfPets {
  getListOfPets {
    _id
    petName
    petType
    petAllergens
    ownerPhoneNumber
    petTreating
    userId
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
    petAddressId
    petAddress {
      petAddress
      petAddressCoords
    }
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
    userId
    petName
    petType
    petAllergens
    ownerPhoneNumber
    petTreating
    petPicture
    petDescriptionCustomFieldIds
    petGender
    petDescriptionCustomFields {
      _createdAt
      _updatedAt
      _collectionId
      _id
      _permissions
      _databaseId
      title
      text
    }
    petAddressId
    petAddress {
      petAddress
      petAddressCoords
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
    logOut(variables?: LogOutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LogOutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogOutMutation>(LogOutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logOut', 'mutation');
    },
    setSession(variables: SetSessionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SetSessionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetSessionQuery>(SetSessionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setSession', 'query');
    },
    createPet(variables: CreatePetMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePetMutation>(CreatePetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPet', 'mutation');
    },
    deletePet(variables: DeletePetMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeletePetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePetMutation>(DeletePetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deletePet', 'mutation');
    },
    updatePet(variables: UpdatePetMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdatePetMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePetMutation>(UpdatePetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatePet', 'mutation');
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