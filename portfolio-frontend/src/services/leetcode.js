const LEETCODE_USERNAME = "pandey-9267";

export async function getLeetcodeStats() {
  const response = await fetch(
    `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch LeetCode data");
  }

  const data = await response.json();

  return {
    totalSolved: data.totalSolved,
    easySolved: data.easySolved,
    mediumSolved: data.mediumSolved,
    hardSolved: data.hardSolved,
    ranking: data.ranking,
  };
}