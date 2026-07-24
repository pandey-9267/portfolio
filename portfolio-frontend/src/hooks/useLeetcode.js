import { useEffect, useState } from "react";
import { getLeetcodeStats } from "../services/leetcode";

export default function useLeetcode() {
  const [leetcodeData, setLeetcodeData] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchLeetcodeData() {
      try {
        const data = await getLeetcodeStats();
        setLeetcodeData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLeetcodeData();
  }, []);

  return { leetcodeData, loading, error };
}