import React, { useEffect, useState } from "react";
import axios from "axios";

const RepoList = ({ username, token }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let url = `https://api.github.com/users/${username}/repos`;
        const headers = token ? { Authorization: `token ${token}` } : {};

        let allRepos = [];
        while (url) {
          const response = await axios.get(url, { headers });
          allRepos = allRepos.concat(response.data);
          url = response.headers.link?.includes('rel="next"') ? response.headers.link.split(";")[0].slice(1, -1) : null;
        }
        setRepos(allRepos);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
};

export default RepoList;
