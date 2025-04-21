import { Api } from "@/lib/api";
import { useCustomMutation } from "@/lib/react-query/mutation";
import { MutationOptions } from "react-query";
import { OnboardPayload, OnboardResponse } from "./types";

const CREATE_PROFILE_ENDPOINT = "/v1/profile";

const createProfile = async (data: any) => {
  try {
    const res = await Api.post(CREATE_PROFILE_ENDPOINT, data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const useCreateProfile = (
  options: MutationOptions<OnboardResponse, Error, OnboardPayload> = {}
) =>
  useCustomMutation<any, Error, OnboardPayload>({
    mutationKey: "create-profile",
    mutationFn: createProfile,
    ...options,
  });
