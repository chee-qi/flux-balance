"use client";
import { FC, ReactNode } from "react";
import client from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
interface ApolloProviderProps {
  children: ReactNode;
}
const ApolloProviderComp: FC<ApolloProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderComp;
