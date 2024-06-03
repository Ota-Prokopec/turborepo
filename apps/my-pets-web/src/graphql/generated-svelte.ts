import client from "./client";
import type {
        ApolloQueryResult, ObservableQuery, WatchQueryOptions
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
  StringOrNumber: { input: string|number; output: string|number; }
};

export type Account = {
  __typename?: 'Account';
  userId: Scalars['String']['output'];
};

export type Pet = {
  __typename?: 'Pet';
  petAddress: Scalars['String']['output'];
  petId: Scalars['String']['output'];
  petName: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAccount: Account;
  getListOfPets: Array<Pet>;
  setSession: Scalars['Boolean']['output'];
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

export type GetListOfPetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListOfPetsQuery = { __typename?: 'Query', getListOfPets: Array<{ __typename?: 'Pet', petAddress: string, petName: string, petId: string }> };


export const GetAccountDoc = gql`
    query getAccount {
  getAccount {
    userId
  }
}
    `;
export const SetSessionDoc = gql`
    query setSession($session: String!) {
  setSession(session: $session)
}
    `;
export const GetListOfPetsDoc = gql`
    query getListOfPets {
  getListOfPets {
    petAddress
    petName
    petId
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
        