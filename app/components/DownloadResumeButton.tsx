"use client";

import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useAnalytics } from "../hooks/useAnalytics";
import ResumePreview from "./ResumePreview";

const RESUME_PATH = "/api/resume";
const RESUME_FILENAME = "Arshid_Ahmad_Malik_Resume.pdf";

interface DownloadResumeButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  label?: string;
}

const DownloadResumeButton = memo(function DownloadResumeButton({
  variant = "secondary",
  className = "",
  label = "Download CV",
}: DownloadResumeButtonProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { trackResumeDownload } = useAnalytics();

  const handlePreview = useCallback(() => {
    trackResumeDownload();
    setIsPreviewOpen(true);
  }, [trackResumeDownload]);

  const handleClose = useCallback(() => {
    setIsPreviewOpen(false);
  }, []);

  const baseClasses =
    variant === "primary"
      ? "group relative flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-6 font-mono text-sm tracking-wider font-semibold text-white"
      : "flex h-12 items-center justify-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 px-6 font-mono text-sm tracking-wider font-medium text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-colors";

  return (
    <>
      <motion.button
        onClick={handlePreview}
        className={`${baseClasses} ${className}`.trim()}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        aria-label="View Resume"
      >
        <Eye className="h-4 w-4" aria-hidden="true" />
        {label}
      </motion.button>

      <ResumePreview
        isOpen={isPreviewOpen}
        onClose={handleClose}
        resumeUrl={RESUME_PATH}
        filename={RESUME_FILENAME}
      />
    </>
  );
});

export default DownloadResumeButton;
