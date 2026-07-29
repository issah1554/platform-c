import { optionsResponse, withCors } from "../_utils";

export function GET() {
  return withCors({
    provider: "Platform C",
    status: "ok",
    delay_model: "10-30 minutes",
    time: new Date().toISOString()
  });
}

export function OPTIONS() {
  return optionsResponse();
}
