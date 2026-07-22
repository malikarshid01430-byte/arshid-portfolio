"use client";

import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, FileText } from "lucide-react";

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
  filename: string;
}

const ResumePreview = memo(function ResumePreview({
  isOpen,
  onClose,
  resumeUrl,
  filename,
}: ResumePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handlePrint = useCallback(() => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  }, [resumeUrl]);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [resumeUrl, filename]);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleIframeError = useCallback(() => {
    setIsLoading(false);
    setError(true);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl h-[90vh] rounded-2xl border border-cyan-500/20 bg-zinc-950 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 p-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-cyan-400" />
                <h3 className="font-mono text-sm font-bold text-white">
                  Resume Preview
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 font-mono text-xs text-cyan-400 hover:border-cyan-400 transition-colors"
                  aria-label="Print resume"
                >
                  <Printer className="h-4 w-4" />
                  Print
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 font-mono text-xs text-cyan-400 hover:border-cyan-400 transition-colors"
                  aria-label="Download resume"
                >
                  <Download className="h-4 w-4" />
                  Download
                </motion.button>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="relative w-full h-[calc(90vh-80px)] bg-zinc-900">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
                    <p className="font-mono text-xs text-zinc-400">
                      Loading resume...
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <FileText className="h-12 w-12 text-red-400" />
                    <p className="font-mono text-sm text-zinc-400">
                      Failed to load resume preview
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 font-mono text-xs text-white"
                    >
                      <Download className="h-4 w-4" />
                      Download Instead
                    </motion.button>
                  </div>
                </div>
              )}

              <iframe
                src={resumeUrl}
                className="w-full h-full"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default ResumePreview;