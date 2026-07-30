import { NextResponse } from "next/server";

export const TZS_PER_USD = 2600;

export const commodities = [
  { name: "MAIZE", basePrice: 44.1, baseVolume: 1080 },
  { name: "RICE", basePrice: 57.4, baseVolume: 760 },
  { name: "WHEAT", basePrice: 40.3, baseVolume: 1320 },
  { name: "COCOA", basePrice: 77.2, baseVolume: 590 },
  { name: "COFFEE", basePrice: 70.8, baseVolume: 710 }
] as const;

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

export function withCors<T>(body: T, init?: ResponseInit) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      ...corsHeaders,
      ...init?.headers
    }
  });
}

export function optionsResponse() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}

export function noisyPrice(basePrice: number) {
  const randomDrift = 1 + (Math.random() - 0.5) * 0.12;
  return Number((basePrice * randomDrift).toFixed(2));
}

export function toTzs(usdPrice: number) {
  return Number((usdPrice * TZS_PER_USD).toFixed(2));
}

export function delayedTimestamp(delayMinutes: number) {
  return new Date(Date.now() - delayMinutes * 60_000).toISOString();
}
