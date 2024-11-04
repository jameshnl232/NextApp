import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8c49c8e624e11bafa4276adeeb71c43a@o4508238671314944.ingest.de.sentry.io/4508238672822352",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
