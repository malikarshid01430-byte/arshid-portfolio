"use client";

import React from "react";

export const SkeletonLoader = ({ height = "400px" }: { height?: string }) => (
  <div className="w-full animate-pulse" style={{ height }}>
    <div className="space-y-4">
      <div className="h-8 bg-zinc-900/50 rounded-lg w-3/4 mx-auto" />
      <div className="h-4 bg-zinc-900/30 rounded w-1/2 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="h-48 bg-zinc-900/30 rounded-xl" />
        <div className="h-48 bg-zinc-900/30 rounded-xl" />
      </div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen w-full flex items-center justify-center pt-28 pb-16">
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="h-6 bg-zinc-900/50 rounded-full w-48 animate-pulse" />
          <div className="h-16 bg-zinc-900/50 rounded-lg w-full animate-pulse" />
          <div className="h-8 bg-zinc-900/30 rounded w-3/4 animate-pulse" />
          <div className="h-24 bg-zinc-900/30 rounded-lg animate-pulse" />
          <div className="flex gap-4">
            <div className="h-12 bg-zinc-900/50 rounded-lg w-40 animate-pulse" />
            <div className="h-12 bg-zinc-900/50 rounded-lg w-40 animate-pulse" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="w-full max-w-md h-80 bg-zinc-900/30 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

export const SectionSkeleton = () => (
  <div className="py-24 border-t border-zinc-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="h-4 bg-zinc-900/50 rounded w-48 mb-4 animate-pulse" />
        <div className="h-10 bg-zinc-900/50 rounded w-64 mb-4 animate-pulse" />
        <div className="h-1 bg-zinc-900/30 rounded w-24 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-64 bg-zinc-900/30 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);