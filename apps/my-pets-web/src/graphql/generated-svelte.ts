import client from "./client";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions, MutationOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
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


export const GetAccountDoc = gql`
    query getAccount {
  getAccount {
    userId
  }
}
    `;
export const LogOutDoc = gql`
    mutation logOut {
  logout
}
    `;
export const SetSessionDoc = gql`
    query setSession($session: String!) {
  setSession(session: $session)
}
    `;
export const CreatePetDoc = gql`
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
export const DeletePetDoc = gql`
    mutation deletePet($petId: String!) {
  deletePet(petId: $petId)
}
    `;
export const UpdatePetDoc = gql`
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
export const GetListOfPetsDoc = gql`
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
export const GetPetDoc = gql`
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
export const getAccount = (
            options: Omit<
              WatchQueryOptions<GetAccountQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetAccountQuery> & {
              query: ObservableQuery<
                GetAccountQuery,
                GetAccountQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetAccountDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetAccountQuery> & {
                query: ObservableQuery<
                  GetAccountQuery,
                  GetAccountQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const logOut = (
            options: Omit<
              MutationOptions<any, LogOutMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<LogOutMutation, LogOutMutationVariables>({
              mutation: LogOutDoc,
              ...options,
            });
            return m;
          }
export const setSession = (
            options: Omit<
              WatchQueryOptions<SetSessionQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<SetSessionQuery> & {
              query: ObservableQuery<
                SetSessionQuery,
                SetSessionQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: SetSessionDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<SetSessionQuery> & {
                query: ObservableQuery<
                  SetSessionQuery,
                  SetSessionQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const createPet = (
            options: Omit<
              MutationOptions<any, CreatePetMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<CreatePetMutation, CreatePetMutationVariables>({
              mutation: CreatePetDoc,
              ...options,
            });
            return m;
          }
export const deletePet = (
            options: Omit<
              MutationOptions<any, DeletePetMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<DeletePetMutation, DeletePetMutationVariables>({
              mutation: DeletePetDoc,
              ...options,
            });
            return m;
          }
export const updatePet = (
            options: Omit<
              MutationOptions<any, UpdatePetMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<UpdatePetMutation, UpdatePetMutationVariables>({
              mutation: UpdatePetDoc,
              ...options,
            });
            return m;
          }
export const getListOfPets = (
            options: Omit<
              WatchQueryOptions<GetListOfPetsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetListOfPetsQuery> & {
              query: ObservableQuery<
                GetListOfPetsQuery,
                GetListOfPetsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetListOfPetsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetListOfPetsQuery> & {
                query: ObservableQuery<
                  GetListOfPetsQuery,
                  GetListOfPetsQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const getPet = (
            options: Omit<
              WatchQueryOptions<GetPetQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetPetQuery> & {
              query: ObservableQuery<
                GetPetQuery,
                GetPetQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetPetDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetPetQuery> & {
                query: ObservableQuery<
                  GetPetQuery,
                  GetPetQueryVariables
                >;
              }
            >(
              { data: {} as any, loading: true, error: undefined, networkStatus: 1, query: q },
              (set) => {
                q.subscribe((v: any) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        