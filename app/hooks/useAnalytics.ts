"use client";

import { useCallback } from "react";

type AnalyticsProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      properties?: AnalyticsProperties
    ) => void;
    plausible?: (
      eventName: string,
      options?: { props?: AnalyticsProperties }
    ) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function useAnalytics() {
  const trackEvent = useCallback(
    (eventName: string, properties?: AnalyticsProperties) => {
      if (typeof window === "undefined") return;

      window.gtag?.("event", eventName, properties);
      window.plausible?.(eventName, { props: properties });
      window.dataLayer?.push({ event: eventName, ...properties });

      if (process.env.NODE_ENV === "development") {
        console.info("[Analytics]", eventName, properties);
      }
    },
    []
  );

  const trackResumeDownload = useCallback(() => {
    trackEvent("resume_download", {
      file: "Arshid_Ahmad_Malik_Resume.pdf",
      source: "download_resume_button",
    });
  }, [trackEvent]);

  return { trackEvent, trackResumeDownload };
}
