import { Imessage } from "@/model/Message";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptMessage?: boolean;
  meessage?: Array<Imessage>;
}
