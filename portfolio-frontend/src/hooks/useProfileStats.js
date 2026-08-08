import { useEffect, useState } from "react";
import { getGithubStats } from "../services/github";

function useProfileStats() {
  const [github, setGithub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStats() {
      try {
        const githubData = await getGithubStats();
        setGithub(githubData);
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError("Failed to load GitHub stats.");
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return {
    github,
    loading,
    error,
  };
}

export default useProfileStats;