"use client";
import Table from "../components/Table"
import githubAPI from "../queries/github";
import { useState } from 'react';

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

interface ApiError {
  message: string;
}

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [userData, setUserData] = useState<GitHubUser | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function submitForm(event: React.FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
            const data = await githubAPI(inputValue);
            setUserData(data.user);
        } catch (error) {
            const apiError = error as ApiError;
            setError(apiError.message || 'An error occurred while fetching user data');
            setUserData(null);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-8">Search for a GitHub User</h1>
            
            <form onSubmit={submitForm} className="mb-8">
                <div className="flex gap-4">
                    <input 
                        className="flex-1 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                                 shadow-sm ring-1 ring-inset ring-gray-300 
                                 placeholder:text-gray-400 focus:ring-2 
                                 focus:ring-inset focus:ring-indigo-600"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter GitHub username..."
                        required 
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-md bg-indigo-600 px-6 py-2 text-base 
                                 font-semibold text-white shadow-sm 
                                 hover:bg-indigo-500 focus-visible:outline 
                                 focus-visible:outline-2 focus-visible:outline-offset-2 
                                 focus-visible:outline-indigo-600 disabled:opacity-50
                                 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </form>

            {error && (
                <div className="rounded-md bg-red-50 p-4 mb-8">
                    <div className="flex">
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Error</h3>
                            <div className="mt-2 text-sm text-red-700">{error}</div>
                        </div>
                    </div>
                </div>
            )}

            <Table userData={userData} />
        </div>
    );
}

export default Form;
