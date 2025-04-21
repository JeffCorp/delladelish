import { CONTENT_PLAN, REWRITE_CONTENT, SCHEDULE_CONTENT } from "@/constants";
import { Api } from "@/lib/api";
import { useCustomMutation } from "@/lib/react-query/mutation";
import { ScheduleContentData } from "@/services/content-planning/types";
import { MutationOptions } from "react-query";

const getContentPlans = async (): Promise<any> => {
  try {
    const res = await Api.get(`${CONTENT_PLAN}`);
    return res;
  } catch (error) {
    throw error;
  }
};

const saveContentPlan = async (data: any): Promise<any> => {
  try {
    const res = await Api.post(`${CONTENT_PLAN}`, data);
    return res;
  } catch (error) {
    throw error;
  }
};

const rewriteContent = async (data: any): Promise<any> => {
  try {
    const res = await Api.post(`${REWRITE_CONTENT}`, data);
    return res;
  } catch (error) {
    throw error;
  }
};

const scheduleContent = async (data: ScheduleContentData): Promise<any> => {
  try {
    const res = await Api.post(SCHEDULE_CONTENT, data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const useGetContentPlans = (
  options: MutationOptions<any, Error, string> = {}
) =>
  useCustomMutation<any, Error, string>({
    mutationKey: "get-content-plans",
    mutationFn: getContentPlans,
    ...options,
  });

export const useSaveContentPlan = (
  options: MutationOptions<any, Error, any> = {}
) =>
  useCustomMutation<any, Error, any>({
    mutationKey: "save-content-plan",
    mutationFn: saveContentPlan,
    ...options,
  });

export const useRewriteContent = (
  options: MutationOptions<any, Error, any> = {}
) =>
  useCustomMutation<any, Error, any>({
    mutationKey: "rewrite-content-plan",
    mutationFn: rewriteContent,
    ...options,
  });

export const useScheduleContent = (
  options: MutationOptions<any, Error, ScheduleContentData> = {}
) =>
  useCustomMutation<any, Error, ScheduleContentData>({
    mutationKey: "schedule-content",
    mutationFn: scheduleContent,
    ...options,
  });
