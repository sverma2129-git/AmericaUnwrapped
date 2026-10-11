import type { NextConfig } from 'next';
import path from 'path';

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = '';
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'AmericaUnwrapped';
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
