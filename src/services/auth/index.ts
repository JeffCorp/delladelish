import {
  BASE_AUTH_PATH,
  BASE_PROFILE_PATH,
  PROFILE_PATH,
  USER_TOKEN_KEY,
} from "@/constants";
import { Api } from "@/lib/api";
import { useCustomMutation } from "@/lib/react-query/mutation";
import { useCustomQuery } from "@/lib/react-query/query";
import { Cookies } from "react-cookie";
import { QueryObserverOptions } from "react-query";
import {
  CreateProfilePayload,
  IAuthenticateResponse,
  IAuthToken,
  ISignIn,
  ISignInPayload,
  IYoutubeProfilePayload,
  IYoutubeProfileResponse,
} from "./types";

const cookies = new Cookies();

export const loadAuthToken = (): IAuthToken | null => {
  const sToken = cookies.get(USER_TOKEN_KEY);

  if (sToken) {
    return sToken;
  }
  return null;
};

export const saveAuthToken = (token: {
  accessToken: string;
  refreshToken: string;
}): void => {
  const sToken = cookies.get(USER_TOKEN_KEY);

  console.log(token);

  cookies.set(USER_TOKEN_KEY, JSON.stringify({ ...sToken, ...token }), {
    path: "/",
  });
};

export const deleteAuthToken = (): void => cookies.remove(USER_TOKEN_KEY);

const signinUser = async (data: ISignInPayload) => {
  try {
    const res: ISignIn = await Api.post(`${BASE_AUTH_PATH}/register/google`, {
      token: data.token,
    });
    if (res) {
      const token = {
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      };
      saveAuthToken(token);
    }

    return res;
  } catch (error) {
    throw error;
  }
};

const getUserProfile = async () => {
  try {
    const res: IAuthenticateResponse = await Api.get(`${PROFILE_PATH}`);
    // if (res.data.token) {
    //   saveAuthToken(res.data.token);
    // }

    return res;
  } catch (error) {
    throw error;
  }
};

const getYoutubeProfile = async ({ username }: IYoutubeProfilePayload) => {
  try {
    const res: IYoutubeProfileResponse = await Api.get(
      `${BASE_PROFILE_PATH}/channel/${username}`
    );

    return res;
  } catch (error) {
    throw error;
  }
};

const createProfile = async (data: CreateProfilePayload) => {
  try {
    const res: any = await Api.post(`${BASE_PROFILE_PATH}`, data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const useSignInUser = (
  onSuccess: (data?: any) => void,
  onError: () => void
) =>
  useCustomMutation<ISignIn, Error, ISignInPayload>({
    mutationFn: signinUser,
    onSuccess,
    onError,
  });

export const useGetUserProfile = (onSuccess: () => void, onError: () => void) =>
  useCustomMutation<any, Error, any>({
    mutationFn: getUserProfile,
    onSuccess,
    onError,
  });

export const useGetYoutubeProfile = (
  data: IYoutubeProfilePayload,
  options: QueryObserverOptions<
    IYoutubeProfileResponse,
    string,
    IYoutubeProfileResponse
  > = {}
) =>
  useCustomQuery<IYoutubeProfileResponse, string, IYoutubeProfileResponse>({
    queryKey: ["youtube-profile", data.username],
    queryFn: () => getYoutubeProfile(data),
    ...options,
  });

export const useCreateProfile = (onSuccess: () => void) =>
  useCustomMutation<any, Error, CreateProfilePayload>({
    mutationFn: createProfile,
    onSuccess,
  });
