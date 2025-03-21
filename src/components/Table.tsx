import React from 'react';
import Image from 'next/image';

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  websiteUrl: string;
  twitterUsername: string;
  followers: { totalCount: number };
  following: { totalCount: number };
  repositories: {
    totalCount: number;
    nodes: Array<{
      name: string;
      url: string;
      description: string;
      updatedAt: string;
      stargazerCount: number;
      forkCount: number;
      primaryLanguage?: {
        name: string;
        color: string;
      };
    }>;
  };
}

interface TableProps {
  userData: GitHubUser | null;
}

function Table({ userData }: TableProps) {
  if (!userData) {
    return <div className="text-center p-4">No user data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub User Profile</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20">
            <Image 
              src={userData.avatarUrl}
              alt={`${userData.login}'s avatar`}
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 80px) 100vw, 80px"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{userData.name || userData.login}</h2>
            <p className="text-gray-600">{userData.bio}</p>
            <div className="mt-2 space-x-4">
              {userData.location && (
                <span className="text-sm text-gray-500">📍 {userData.location}</span>
              )}
              {userData.twitterUsername && (
                <a 
                  href={`https://twitter.com/${userData.twitterUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  🐦 @{userData.twitterUsername}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{userData.repositories.totalCount}</div>
            <div className="text-gray-600">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{userData.followers.totalCount}</div>
            <div className="text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{userData.following.totalCount}</div>
            <div className="text-gray-600">Following</div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Recent Repositories</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {userData.repositories.nodes.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg">{repo.name}</h3>
            {repo.description && (
              <p className="text-gray-600 text-sm mt-1">{repo.description}</p>
            )}
            <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
              {repo.primaryLanguage && (
                <span className="flex items-center">
                  <span
                    className="w-3 h-3 rounded-full mr-1"
                    style={{ backgroundColor: repo.primaryLanguage.color }}
                  />
                  {repo.primaryLanguage.name}
                </span>
              )}
              <span>⭐ {repo.stargazerCount}</span>
              <span>🍴 {repo.forkCount}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Table;
