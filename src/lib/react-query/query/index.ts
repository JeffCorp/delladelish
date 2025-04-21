import type { QueryObserverOptions } from "react-query";
import { useQuery } from "react-query";

export const useCustomQuery = <ResponseType, ErrorType, PayloadType>(
  options: QueryObserverOptions<ResponseType, ErrorType, PayloadType>
) => {
  const defaultSettings: QueryObserverOptions<
    ResponseType,
    ErrorType,
    PayloadType
  > = {
    retry: 0,
    retryDelay: 0,
    staleTime: 5 * 60 * 1000, // 5 min
    refetchOnWindowFocus: false,
    enabled: true,
  };

  const combinedOptions = { ...defaultSettings, ...options };
  return useQuery<ResponseType, ErrorType, PayloadType>({
    ...combinedOptions,
  });
};
