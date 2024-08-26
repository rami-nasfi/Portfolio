import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaCode, FaFolderTree, FaRocket } from "react-icons/fa6";

function OpenSourceSection() {
  const username = "rami-nasfi"; // Replace with the desired GitHub username
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // Ensure the observer only triggers once
  });
  if (inView && !hasBeenInView) {
    setHasBeenInView(true);
  }

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section ref={ref} className={`openSource d-flex flex-row ${hasBeenInView ? "active" : ""}`} id="openSource">
      <div className="text">
        <h1 className="section-title">Open Source Projects</h1>
        <div className="projects">
          {repos
            .filter((repo) => repo.language !== null)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((repo) => (
              <div key={repo.id}>
                <h4 className="title d-flex gap-3">
                  <FaFolderTree />
                  {repo.name}
                </h4>
                <p className="description">{repo.description}</p>
                <div className="details">
                  <div className="right">
                    <span className="d-flex align-items-center">
                      <span className={`cercle ${repo.language}`}></span>
                      {repo.language}
                    </span>
                    <span>{(repo.size / 1024).toFixed(2)} MB</span>
                  </div>
                  <div className="left">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <FaCode />
                    </a>
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      <FaRocket />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center">
          <a className="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">
            More Projects...
          </a>
        </div>
      </div>
    </section>
  );
}

export default OpenSourceSection;
