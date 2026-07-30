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
        const results = await Promise.allSettled([
          getGithubStats(),
          getLeetcodeStats(),
        ]);

        if (results[0].status === "fulfilled") {
          setGithub(results[0].value);
        }

        if (results[1].status === "fulfilled") {
          setLeetcode(results[1].value);
        }

        if (
          results[0].status === "rejected" &&
          results[1].status === "rejected"
        ) {
          setError("Failed to load profile stats.");
        }
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