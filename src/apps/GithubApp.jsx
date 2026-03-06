import React, { useState, useEffect } from 'react';

export default function GithubApp() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('https://api.github.com/users/Shailendra1122').then(res => res.json()),
      fetch('https://api.github.com/users/Shailendra1122/repos?sort=updated&per_page=5').then(res => res.json())
    ])
    .then(([profileData, reposData]) => {
      if (profileData.message || profileData.status === '404') {
        throw new Error(profileData.message || "Profile not found");
      }
      setProfile(profileData);
      
      if (Array.isArray(reposData)) {
        setRepos(reposData.slice(0, 5));
      } else {
        throw new Error(reposData.message || "Rate limit reached");
      }
      setLoading(false);
    })
    .catch(err => {
      console.error("Using fallback data due to:", err);
      // Fallback data in case of GitHub API rate limits
      setProfile({
        login: "Shailendra1122",
        name: "Shailendra Pratap Singh",
        avatar_url: "https://avatars.githubusercontent.com/u/100000000?", // Generic avatar or let it break, but we have local profile pic
        bio: "Aspiring Software Engineer",
        followers: 12,
        following: 15
      });
      setRepos([
        {
          id: '1',
          name: "CoLab Connect",
          html_url: "https://github.com/Shailendra1122",
          description: "Open Innovation & Collaboration Platform",
          language: "JavaScript",
          visibility: "public",
          stargazers_count: 2,
          updated_at: new Date().toISOString()
        },
        {
          id: '2',
          name: "JPMorganChase Forage",
          html_url: "https://github.com/Shailendra1122",
          description: "Integrated Kafka into a Spring Boot microservice for transaction messages.",
          language: "Java",
          visibility: "public",
          stargazers_count: 1,
          updated_at: new Date().toISOString()
        },
        {
          id: '3',
          name: "Booking Management System",
          html_url: "https://github.com/Shailendra1122",
          description: "Ticket booking and blogging web application using Laravel and PHP.",
          language: "PHP",
          visibility: "public",
          stargazers_count: 0,
          updated_at: new Date().toISOString()
        }
      ]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="h-full w-full bg-white text-black overflow-y-auto font-sans text-sm">
      <div className="bg-[#24292e] text-white p-3 flex items-center justify-between">
        <div className="font-bold flex items-center gap-2">
          <svg height="24" viewBox="0 0 16 16" width="24" fill="white">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          GitHub
        </div>
        <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs" onClick={() => window.open('https://github.com/Shailendra1122/', '_blank')}>Output to Browser</button>
      </div>

      <div className="p-4">
        {loading ? (
          <div className="text-gray-500">Loading GitHub data...</div>
        ) : (
          <>
            {profile && profile.login && (
              <div className="flex items-center gap-4 mb-6">
                <img src={profile.avatar_url || 'https://github.com/identicons/shailendra1122.png'} alt="Profile" className="w-16 h-16 rounded-full border border-gray-300 bg-white" />
                <div>
                  <h2 className="text-xl font-bold">{profile.name || profile.login}</h2>
                  <p className="text-gray-600">@{profile.login}</p>
                  <p className="text-xs text-gray-500 mt-1">{profile.bio}</p>
                  <div className="text-xs text-gray-500 mt-1 flex gap-2">
                    <span><strong>{profile.followers}</strong> followers</span>
                    <span><strong>{profile.following}</strong> following</span>
                  </div>
                </div>
              </div>
            )}

            <h3 className="font-bold border-b pb-1 mb-3">Recent Repositories</h3>
            <div className="space-y-3">
              {repos.length > 0 ? repos.map(repo => (
                <div key={repo.id} className="border border-gray-200 rounded p-3 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline text-sm">{repo.name}</a>
                    <span className="text-xs border border-gray-300 rounded-full px-2 text-gray-500">{repo.visibility}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{repo.description || "No description provided."}</p>
                  <div className="text-xs text-gray-500 mt-2 flex items-center gap-4">
                    {repo.language && <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div>{repo.language}</span>}
                    {repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
                    <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </div>
              )) : (
                <div className="text-gray-500">No public repositories found.</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
