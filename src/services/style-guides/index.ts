import { STYLE_GUIDE } from "@/constants";
import { Api } from "@/lib/api";
import { useCustomMutation } from "@/lib/react-query/mutation";
import { useCustomQuery } from "@/lib/react-query/query";
import { StyleGuide } from "@/services/style-guides/types";
import { MutationOptions, QueryOptions } from "react-query";

const getStyleGuides = async (): Promise<any> => {
  try {
    const res = await Api.get(`${STYLE_GUIDE}`);
    return res;
  } catch (error) {
    throw error;
  }
};

const saveStyleGuide = async (data: StyleGuide): Promise<any> => {
  try {
    const res = await Api.post(`${STYLE_GUIDE}`, data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const useGetStyleGuides = (
  options: MutationOptions<any, Error, string> = {}
) =>
  useCustomMutation<any, Error, string>({
    mutationKey: "get-style-guides",
    mutationFn: getStyleGuides,
    ...options,
  });

export const useFetchStyleGuides = (options: QueryOptions<any, Error> = {}) =>
  useCustomQuery<any, Error, any>({
    queryKey: "fetch-style-guides",
    queryFn: getStyleGuides,
    ...options,
  });

export const useSaveStyleGuide = (
  options: MutationOptions<any, Error, StyleGuide> = {}
) =>
  useCustomMutation<any, Error, StyleGuide>({
    mutationKey: "save-style-guide",
    mutationFn: saveStyleGuide,
    ...options,
  });
