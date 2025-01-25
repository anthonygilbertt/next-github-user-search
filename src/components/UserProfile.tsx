import { useQuery } from '@apollo/client';
import { GET_USER } from '../queries/githubUserQuery';

function UserProfile({ login }: { login: string }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.user.name}</h1>
      <p>{data.user.bio}</p>
      <img src={data.user.avatarUrl} alt={`${data.user.login}'s avatar`} />
      {/* Additional user details */}
    </div>
  );
}

export default UserProfile;