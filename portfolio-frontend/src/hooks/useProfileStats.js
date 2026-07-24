import { useEffect, useState } from "react";
import { getGithubStats } from "../services/github";
import { getLeetcodeStats } from "../services/leetcode";

function useProfileStats() {
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStats() {
      try {
        const [githubData, leetcodeData] = await Promise.all([
          getGithubStats(),
          getLeetcodeStats(),
        ]);

        setGithub(githubData);
        setLeetcode(leetcodeData);
      } catch (err) {
        console.error(err);
        setError("Failed to load profile stats.");
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return {
    github,
    leetcode,
    loading,
    error,
  };
}

export default useProfileStats;