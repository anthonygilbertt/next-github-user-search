import { log } from "console"
import { Octokit } from "octokit"

const githubAPI = async (username: string) => {
    try {
        const octokit = new Octokit({auth:process.env.CLASSIC_PAT})
        const userInfo = await octokit.graphql.paginate(`
query GetUsernameAndRepos($username: String!, $num: Int = 100, $cursor: String) {
        user(login: $username) {
          login,
          repositories(first: $num, after: $cursor, isFork: false) {
            nodes {
              url,
              updatedAt,
              createdAt,
              languages(first: 100) {
                edges {
                  size,
                  node {
                    name
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
  }`,{username:username})
        return userInfo
    } catch (error) {
        console.log(error)
        return error;
    }
    
}

export default githubAPI