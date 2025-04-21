import { IApiResponse } from "@/lib/api/types";

export interface IdeaData {
  // Define the structure of the idea data
  // For example:
  topic?: string;
  category?: string;
  // Add other properties as needed
}

export interface IdeaResponse extends IApiResponse {
  // Define the structure of the response
  // For example:
  id: string;
  title: string;
  description: string;
  category: string;
  // Add other properties as needed
}
