/* eslint-disable @next/next/no-html-link-for-pages */
export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Meu Site</h1>
          <ul className="flex gap-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/github" className="hover:text-gray-300">Repositórios</a></li>
            <li><a href="/paises" className="hover:text-gray-300">Países</a></li>
            <li><a href="/about" className="hover:text-gray-300">Sobre</a></li>
          </ul>
        </nav>
      </header>
    );
  }