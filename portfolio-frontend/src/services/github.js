const GITHUB_USERNAME = "pandey-9267";

export async function getGithubStats() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const data = await response.json();

  console.log(data); // 👈 Add this temporarily

  return {
    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    avatar: data.avatar_url,
    profile: data.html_url,
  };
}