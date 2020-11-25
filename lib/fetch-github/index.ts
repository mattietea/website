export type GetGitHubProfileResult = {
  login: string;
  name: string;
  bio: string;
  email: string;
  location: string;
};

export const getGitHubProfile = async (): Promise<GetGitHubProfileResult> => {
  const request = await fetch('https://api.github.com/graphql', {
    body: JSON.stringify({
      query: `{ viewer {  login name bio email location isHireable } }`,
    }),
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    method: 'POST',
  });

  const { data } = await request.json();

  return data?.viewer;
};
