import { GENERATE_IDEAS, REMOVE_SAVED_IDEA, SAVE_IDEA } from "@/constants";
import { Api } from "@/lib/api";
import { useCustomMutation } from "@/lib/react-query/mutation";
import { useCustomQuery } from "@/lib/react-query/query";
import { MutationOptions, QueryOptions } from "react-query";

const getIdeas = async (data: string): Promise<any> => {
  try {
    const res = await Api.get(`${GENERATE_IDEAS}?title=${data}`);
    return res;
  } catch (error) {
    throw error;
  }
};

const saveIdea = async (data: string): Promise<any> => {
  try {
    const res = await Api.post(`${SAVE_IDEA}`, { title: data });
    return res;
  } catch (error) {
    throw error;
  }
};

const getSavedIdeas = async (): Promise<any> => {
  try {
    const res = await Api.get(`${SAVE_IDEA}`);
    return res;
  } catch (error) {
    throw error;
  }
};

const removeSavedIdea = async (data: string): Promise<any> => {
  try {
    const res = await Api.delete(`${REMOVE_SAVED_IDEA}`, {
      data: { title: data },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const useGetIdeas = (
  options: MutationOptions<any, Error, string> = {}
) =>
  useCustomMutation<any, Error, string>({
    mutationKey: "generate-ideas",
    mutationFn: getIdeas,
    ...options,
  });

export const useSaveIdea = (
  options: MutationOptions<any, Error, string> = {}
) =>
  useCustomMutation<any, Error, string>({
    mutationKey: "save-idea",
    mutationFn: saveIdea,
    ...options,
  });

export const useSavedIdeas = (options: QueryOptions<any, Error> = {}) =>
  useCustomQuery<any, Error, any>({
    queryKey: "saved-ideas",
    queryFn: getSavedIdeas,
    ...options,
  });

export const useRemoveSavedIdea = (
  options: MutationOptions<any, Error, string> = {}
) =>
  useCustomMutation<any, Error, string>({
    mutationKey: "remove-saved-idea",
    mutationFn: removeSavedIdea,
    ...options,
  });
