import { IApiResponse } from "@/lib/api/types";

export interface ISignInPayload {
  email?: string;
  token?: string;
}

export interface IPinInput {
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
  pin5: string;
  pin6: string;
}

export interface IAuthenticatePayload {
  email: string;
  passcode: string;
}

export interface IAuthToken {
  accessToken: string;
  refreshToken: string;
}

export interface ISignIn {
  message: string;
  accessToken: string;
  refreshToken: string;
}

export interface IAuthenticateResponse extends IApiResponse {
  data: ISignIn;
}

export interface IYoutubeProfilePayload {
  username: string;
}

export interface IYoutubeProfile {
  channelName: string;
  channelDescription: string;
  profileImage: string;
  bannerImage: string;
  country: string;
  channelId: string;
  callToAction: string;
}

export interface IYoutubeProfileResponse extends IApiResponse {
  data: IYoutubeProfile;
}

export interface CreateProfilePayload {
  username: string;
  channelName: string;
  channelDescription: string;
  channelId: string;
  thumbnail: string;
  bannerImage: string;
  country: string;
}
