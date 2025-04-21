import type { MutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export const useCustomMutation = <ResponseType, ErrorType, PayloadType>(
  options: MutationOptions<ResponseType, ErrorType, PayloadType>
) => {
  const defaultSettings: MutationOptions<ResponseType, ErrorType, PayloadType> =
    {
      retry: 0,
      retryDelay: 0,
    };

  const combinedOptions = { ...defaultSettings, ...options };
  return useMutation<ResponseType, ErrorType, PayloadType>({
    ...combinedOptions,
  });
};
