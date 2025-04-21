import { CONTENT_PATH } from "@/constants";
import { Api } from "@/lib/api";
import { useCustomMutation } from "@/lib/react-query/mutation";

const createContentPlanning = async (data: any) => {
  try {
    const res: any = await Api.post(`${CONTENT_PATH}`, data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const useCreateContentPlanning = () =>
  useCustomMutation<any, string, any>({
    mutationFn: createContentPlanning,
  });
