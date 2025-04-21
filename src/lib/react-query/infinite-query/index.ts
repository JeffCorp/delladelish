import type { UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useBiingeInfiniteQuery = <ResponseType, ErrorType, PayloadType>(
  options: UseInfiniteQueryOptions<ResponseType, ErrorType, PayloadType>
) => {
  const defaultSettings: UseInfiniteQueryOptions<
    ResponseType,
    ErrorType,
    PayloadType
  > = {
    retry: 0,
    retryDelay: 0,
    staleTime: 5 * 60 * 1000, // 5 min
    refetchOnWindowFocus: false,
    enabled: true,
    queryKey: [],
    getNextPageParam: function (
      lastPage: ResponseType,
      allPages: ResponseType[],
      lastPageParam: unknown,
      allPageParams: unknown[]
    ): unknown | undefined | null {
      throw new Error("Function not implemented.");
    },
    initialPageParam: undefined,
  };

  const combinedOptions = { ...defaultSettings, ...options };
  return useInfiniteQuery<ResponseType, ErrorType, PayloadType>({
    ...combinedOptions,
  });
};
