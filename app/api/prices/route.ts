import {
  commodities,
  delayedTimestamp,
  noisyPrice,
  optionsResponse,
  toTzs,
  withCors
} from "../_utils";

export const dynamic = "force-dynamic";

type PlatformCResult = {
  name: string;
  latest_price_tzs: number;
  latest_price_usd: number;
  ccy: {
    local: "TZS";
    reference: "USD";
  };
  delay_minutes: number;
  confidence: number;
  time: string;
  volume?: number;
};

export function GET() {
  return withCors({
    provider: "Platform C",
    results: commodities.map((commodity) => {
      const delayMinutes = 10 + Math.floor(Math.random() * 21);
      const latestPriceUsd = noisyPrice(commodity.basePrice);
      const result: PlatformCResult = {
        name: commodity.name,
        latest_price_tzs: toTzs(latestPriceUsd),
        latest_price_usd: latestPriceUsd,
        ccy: {
          local: "TZS",
          reference: "USD"
        },
        delay_minutes: delayMinutes,
        confidence: Number((0.72 + Math.random() * 0.23).toFixed(2)),
        time: delayedTimestamp(delayMinutes)
      };

      if (Math.random() > 0.35) {
        result.volume = Math.round(commodity.baseVolume * (1 + (Math.random() - 0.5) * 0.18));
      }

      return result;
    })
  });
}

export function OPTIONS() {
  return optionsResponse();
}
