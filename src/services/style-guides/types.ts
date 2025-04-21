import { IApiResponse } from "@/lib/api/types";

export interface StyleGuide {
  id?: string;
  title: string;
  tone: string;
  content: string;
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
