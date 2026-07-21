"use client";

type AnalyticsEvent = {
  name: string;
  parameters?: Record<string, string | number | boolean | undefined>;
};

type AnalyticsProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      properties?: AnalyticsProperties
    ) => void;
  }
}

const isProduction = process.env.NODE_ENV === "production";

export const analytics = {
  pageView: (url: string) => {
    if (!isProduction || typeof window === "undefined") return;
    window.gtag?.("event", "page_view", {
      page_path: url,
    });
  },

  event: ({ name, parameters = {} }: AnalyticsEvent) => {
    if (!isProduction || typeof window === "undefined") return;
    window.gtag?.("event", name, parameters);
  },

  resumeDownload: () => {
    analytics.event({
      name: "file_download",
      parameters: {
        file_name: "Arshid_Ahmad_Malik_Resume.pdf",
        file_type: "pdf",
        link_text: "Download Resume",
      },
    });
  },

  githubClick: (source: string) => {
    analytics.event({
      name: "outbound_click",
      parameters: {
        destination: "github.com/malikarshid01430-byte",
        link_text: source,
      },
    });
  },

  linkedInClick: (source: string) => {
    analytics.event({
      name: "outbound_click",
      parameters: {
        destination: "linkedin.com/in/arshid-ahmad-malik",
        link_text: source,
      },
    });
  },

  contactClick: (method: string) => {
    analytics.event({
      name: "contact_click",
      parameters: {
        contact_method: method,
      },
    });
  },

  emailClick: () => {
    analytics.contactClick("email");
  },

  phoneClick: () => {
    analytics.contactClick("phone");
  },

  whatsAppClick: () => {
    analytics.contactClick("whatsapp");
  },

  projectClick: (projectName: string) => {
    analytics.event({
      name: "project_view",
      parameters: {
        project_name: projectName,
      },
    });
  },

  projectGitHubClick: (projectName: string) => {
    analytics.event({
      name: "outbound_click",
      parameters: {
        destination: "github.com/malikarshid01430-byte",
        link_text: `${projectName} GitHub`,
      },
    });
  },

  recruiterDashboardAction: (action: string) => {
    analytics.event({
      name: "recruiter_dashboard_action",
      parameters: {
        action_type: action,
      },
    });
  },

  contactFormSubmission: () => {
    analytics.event({
      name: "form_submission",
      parameters: {
        form_name: "contact_form",
      },
    });
  },

  chatbotInteraction: (action: string) => {
    analytics.event({
      name: "chatbot_interaction",
      parameters: {
        action_type: action,
      },
    });
  },
};