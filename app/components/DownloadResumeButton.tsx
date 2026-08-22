"use client";

import { useState, useCallback, memo } from "react";
import { Eye } from "lucide-react";
import { useAnalytics } from "../hooks/useAnalytics";
import ResumePreview from "./ResumePreview";

const RESUME_PATH     = "/api/resume";
const RESUME_FILENAME = "Arshid_Ahmad_Malik_Resume.pdf";
const RESUME_1PAGE    = "Arshid_Ahmad_Malik_Resume_1Page.pdf";

interface DownloadResumeButtonProps {
  variant?:  "primary" | "secondary";
  className?: string;
  label?:    string;
  format?:   "2page" | "1page";
}

const DownloadResumeButton = memo(function DownloadResumeButton({
  variant   = "secondary",
  className = "",
  label     = "Resume",
  format    = "2page",
}: DownloadResumeButtonProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { trackResumeDownload } = useAnalytics();

  const handleOpen  = useCallback(() => { trackResumeDownload(); setIsPreviewOpen(true);  }, [trackResumeDownload]);
  const handleClose = useCallback(() => setIsPreviewOpen(false), []);

  const resumeUrl = `${RESUME_PATH}${format === "1page" ? "?format=1page" : ""}`;
  const filename  = format === "1page" ? RESUME_1PAGE : RESUME_FILENAME;

  /* Use CSS token-based classes so both light and dark modes work correctly */
  const base =
    variant === "primary"
      ? "btn btn-primary"
      : "btn btn-outline-cyan";

  return (
    <>
      <button
        onClick={handleOpen}
        className={`${base} ${className}`.trim()}
        aria-label={`Open resume preview — ${label}`}
      >
        <Eye className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>

      <ResumePreview
        isOpen={isPreviewOpen}
        onClose={handleClose}
        resumeUrl={resumeUrl}
        filename={filename}
      />
    </>
  );
});

export default DownloadResumeButton;
