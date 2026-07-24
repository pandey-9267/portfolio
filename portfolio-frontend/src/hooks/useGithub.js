import { useEffect, useState } from "react";
import { getGithubStats } from "../services/github";

export default function useGithub() {
  const [githubData, setGithubData] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    avatar: "",
    profile: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const data = await getGithubStats();
        setGithubData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return { githubData, loading, error };
}