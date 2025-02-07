"use client";
import { useQuery } from "@apollo/client";
import { GET_BALANCE } from "../graph/queries";

export const useSuiBalance = (ownerAddress: string) => {
  return useQuery(GET_BALANCE, {
    variables: { owner: ownerAddress },
  });
};
