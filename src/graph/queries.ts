import { gql } from "@apollo/client";

export const GET_BALANCE = gql`
  query GetBalance($owner: String!) {
    balance(owner: $owner) {
      coinType
      totalBalance
      lockedBalance
    }
  }
`;
