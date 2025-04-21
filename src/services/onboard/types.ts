import { IApiResponse } from "@/lib/api/types";

export interface OnboardPayload {
  idealAudience: string;
  contentGoal: string;
}

export interface OnboardResponse extends IApiResponse {
  // Define the structure of the response
  // For example:
  id: string;
  idealAudience: string;
  contentGoal: string;
  // Add other properties as needed
}
