import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, BookOpen, ExternalLink, HelpCircle, Activity } from 'lucide-react';

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
      console.warn("Using fallback github data due to API limitations:", err);
      // Fallback data in case of GitHub API rate limits
      setProfile({
        login: "Shailendra1122",
        name: "Shailendra Pratap Singh",
        avatar_url: null, // we will fallback to a visual or local avatar
        bio: "Aspiring Software Engineer | Java Full Stack Developer",
        followers: 18,
        following: 20,
        public_repos: 12
      });
      setRepos([
        {
          id: '1',
          name: "JobQuest-Job-Application-Tracker",
          html_url: "https://github.com/Shailendra1122",
          description: "Full-stack job application tracker with Kanban stages, statistics dashboards, and file uploads.",
          language: "Java",
          visibility: "public",
          stargazers_count: 5,
          forks_count: 2,
          updated_at: new Date().toISOString()
        },
        {
          id: '2',
          name: "JPMorganChase-microservice",
          html_url: "https://github.com/Shailendra1122",
          description: "Integrated Kafka message broker to Spring Boot microservice to validate and persist transaction payloads.",
          language: "Java",
          visibility: "public",
          stargazers_count: 3,
          forks_count: 0,
          updated_at: new Date().toISOString()
        },
        {
          id: '3',
          name: "KrishiSeva-platform",
          html_url: "https://github.com/Shailendra1122",
          description: "Agri-Tech system with crop recommendation models, image crop disease recognition, and FastAPI endpoints.",
          language: "Python",
          visibility: "public",
          stargazers_count: 4,
          forks_count: 1,
          updated_at: new Date().toISOString()
        },
        {
          id: '4',
          name: "CoLab-Connect",
          html_url: "https://github.com/Shailendra1122",
          description: "Open collaboration system designed with Express REST APIs, custom user authentication, and MongoDB schemas.",
          language: "JavaScript",
          visibility: "public",
          stargazers_count: 2,
          forks_count: 0,
          updated_at: new Date().toISOString()
        }
      ]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="h-full w-full bg-slate-950 p-5 overflow-y-auto font-sans text-slate-200">
      
      {/* GitHub Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5 shrink-0">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-white uppercase select-none">
          <Github size={16} className="text-cyber-cyan" />
          <span>GitHub Console</span>
        </div>
        <button
          onClick={() => window.open('https://github.com/Shailendra1122/', '_blank')}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 text-[10px] font-mono font-semibold transition-colors cursor-pointer select-none"
        >
          <span>BROWSER_REDIRECT ↗</span>
        </button>
      </div>

      {loading ? (
        <div className="h-[250px] flex flex-col items-center justify-center font-mono text-xs text-cyber-cyan gap-2">
          <Activity size={20} className="animate-spin text-cyber-cyan" />
          <span>QUERYING_API...</span>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Profile Card details */}
          {profile && (
            <div className="p-4 rounded-xl border border-cyber-cyan/15 bg-slate-900/10 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4">
              {/* Avatar circle */}
              <div className="w-16 h-16 rounded-full border border-cyber-cyan/40 bg-slate-950 overflow-hidden flex items-center justify-center shrink-0">
                {profile.avatar_url ? (
                  <img src={profile.avatar_url} alt="GitHub Profile" className="w-full h-full object-cover" />
                ) : (
                  <Github size={24} className="text-cyber-cyan animate-pulse" />
                )}
              </div>

              {/* Bio info */}
              <div className="text-center sm:text-left flex-1 select-text">
                <h3 className="font-bold text-white text-base">{profile.name || profile.login}</h3>
                <p className="text-cyber-cyan font-mono text-xs">@{profile.login}</p>
                <p className="text-slate-400 text-xs mt-1 leading-normal">{profile.bio}</p>
                
                {/* Followers stat bar */}
                <div className="mt-3.5 flex items-center justify-center sm:justify-start gap-4 font-mono text-[9px] text-slate-500">
                  <span>REPOS: <strong className="text-white">{profile.public_repos ?? repos.length}</strong></span>
                  <span>FOLLOWERS: <strong className="text-cyber-cyan">{profile.followers}</strong></span>
                  <span>FOLLOWING: <strong className="text-cyber-purple">{profile.following}</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* Repositories title */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-slate-500 mb-3 select-none">
              Featured Code Repositories
            </h4>

            {/* Grid list of repos */}
            <div className="space-y-3">
              {repos.length > 0 ? repos.map(repo => (
                <div
                  key={repo.id}
                  className="p-4 rounded-xl border border-white/5 bg-slate-900/20 hover:border-cyber-cyan/25 transition-all select-text"
                >
                  <div className="flex justify-between items-start gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyber-cyan font-bold text-sm tracking-wide flex items-center gap-1.5"
                    >
                      <BookOpen size={13} className="text-cyber-cyan shrink-0" />
                      <span className="hover:underline truncate max-w-[280px]">{repo.name}</span>
                      <ExternalLink size={10} className="opacity-50 shrink-0" />
                    </a>
                    <span className="text-[8px] font-mono uppercase font-bold px-1.5 py-0.5 rounded border border-white/5 bg-white/[0.02] text-slate-400 select-none">
                      {repo.visibility}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="text-[10px] font-mono text-slate-500 mt-4 flex items-center gap-4 select-none">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan glow-cyan" />
                        <span className="text-slate-400">{repo.language}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={11} className="text-cyber-cyan fill-current" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={11} className="text-cyber-purple" />
                      <span>{repo.forks_count ?? 0}</span>
                    </span>
                  </div>
                </div>
              )) : (
                <div className="text-slate-500 text-xs font-mono">No repository records found.</div>
              )}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
