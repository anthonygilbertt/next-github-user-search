interface FetchError {
  message: string;
}

const githubAPI = async (username: string) => {
  try {
    console.log('Making API request for user:', username);
    const response = await fetch('/api/github', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch user data');
    }

    const data = await response.json();
    console.log('API response received');
    return data;
  } catch (error) {
    console.error('API Error:', error);
    const fetchError = error as FetchError;
    throw new Error(fetchError.message || 'An error occurred while fetching GitHub data');
  }
}

export default githubAPI
