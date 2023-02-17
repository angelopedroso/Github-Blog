import { Octokit } from 'octokit';

export const github = new Octokit({
  auth: process.env.SECRET_GITHUB_KEY,
});
