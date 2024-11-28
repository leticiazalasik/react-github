import { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const token = process.env.REACT_APP_GITHUB_TOKEN;

export default function GitHub() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/leticiazalasik/repos', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map(repo => (
        <div key={repo.id} className="p-4 border rounded-lg shadow hover:shadow-md">
          <h2 className="text-xl font-bold">{repo.name}</h2>
          <p className="text-gray-600">{repo.description}</p>
          <a href={repo.html_url} className="text-blue-500 hover:underline">
            Ver no GitHub
          </a>
        </div>
      ))}
    </div>
  );
}
