import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

interface GitHubError extends Error {
  status?: number;
  response?: {
    status: number;
    data: {
      message: string;
      documentation_url?: string;
    };
  };
}

export async function POST(request: Request) {
  const token = process.env.CLASSIC_PAT;
  
  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token is not configured' },
      { status: 500 }
    );
  }

  try {
    const { username } = await request.json();

    const octokit = new Octokit({ 
      auth: token,
      request: {
        retries: 3,
        retryAfter: 60
      }
    });

    const query = `
      query GetUserInfo($username: String!) {
        user(login: $username) {
          login
          name
          bio
          avatarUrl
          location
          email
          websiteUrl
          twitterUsername
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
            totalCount
            nodes {
              name
              url
              description
              updatedAt
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    `;

    const response = await octokit.graphql(query, { username });
    return NextResponse.json(response);
  } catch (error: unknown) {
    console.error('GitHub API Error:', error);
    
    const githubError = error as GitHubError;
    const status = githubError.response?.status || githubError.status || 500;
    const message = githubError.response?.data?.message || githubError.message || 'An error occurred while fetching GitHub data';
    
    return NextResponse.json({ error: message }, { status });
  }
}
