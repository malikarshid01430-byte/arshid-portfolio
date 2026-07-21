"use client";

import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Link as LinkIcon, Star, GitFork, Calendar, Code2, ExternalLink } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

interface GitHubData {
  repos: Repository[];
  totalStars: number;
  totalForks: number;
  languages: Record<string, number>;
  recentCommits: number;
  contributionStreak: number;
}

const GITHUB_USERNAME = "malikarshid01430-byte";

function GitHubActivityComponent() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
            next: { revalidate: 3600 },
          }
        );

        if (!reposResponse.ok) {
          throw new Error("Failed to fetch repos");
        }

        const repos: Repository[] = await reposResponse.json();

        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
        
        const languages: Record<string, number> = {};
        repos.forEach((repo) => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        setData({
          repos,
          totalStars,
          totalForks,
          languages,
          recentCommits: repos.length,
          contributionStreak: 0,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-zinc-900/50 rounded w-48" />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-zinc-900/30 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
        <p className="text-sm text-zinc-400">GitHub activity temporarily unavailable</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/5">
              <Star className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{data.totalStars}</p>
              <p className="text-xs text-zinc-500">Total Stars</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5">
              <GitFork className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{data.totalForks}</p>
              <p className="text-xs text-zinc-500">Total Forks</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/5">
              <Code2 className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{Object.keys(data.languages).length}</p>
              <p className="text-xs text-zinc-500">Languages</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/5">
              <ExternalLink className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{data.recentCommits}</p>
              <p className="text-xs text-zinc-500">Recent Repos</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Repositories */}
      <div className="space-y-3">
        <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wide">
          Latest Repositories
        </h3>
        {data.repos.map((repo, idx) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="block rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 hover:border-cyan-500/20 transition-colors group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <h4 className="text-sm font-semibold text-white truncate group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h4>
                </div>
                {repo.description && (
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-2">
                    {repo.description}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] font-mono text-zinc-500">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {repo.forks_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Languages */}
      <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6">
        <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wide mb-4">
          Top Languages
        </h3>
        <div className="space-y-3">
          {Object.entries(data.languages)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([lang, count], idx) => (
              <div key={lang} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-zinc-400">{lang}</span>
                    <span className="text-xs text-zinc-500">{count} repos</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(count / data.repos.length) * 100}%` }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* View Profile Link */}
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 font-mono text-xs text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/20 transition-colors"
      >
        <ExternalLink className="h-4 w-4" />
        View Full GitHub Profile
      </a>
    </div>
  );
}

export default memo(GitHubActivityComponent);