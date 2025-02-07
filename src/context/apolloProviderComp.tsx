"use client";
import { FC, ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rpc.mainnet.sui.io/graphql",
  cache: new InMemoryCache(),
});
interface ApolloProviderProps {
  children: ReactNode;
}
const ApolloProviderComp: FC<ApolloProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderComp;
