import React from 'react';
import GridGenerator from './components/GridGenerator';
import { Github, Linkedin } from 'lucide-react'; // Import icons from Lucide

function App() {
  return (
    <div className="App">
      <header className="bg-[#0d47a1] text-white p-4 shadow-md relative">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Interactive Grid Generator</h1>
            <p className="text-sm opacity-80">Create and customize responsive grid layouts</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/harshilarora2005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="www.linkedin.com/in/harshil-arora-1690a4200"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-4">
        <GridGenerator />
      </main>

      <footer className="bg-[#f8f9fa] border-t border-[#e0e0e0] p-4 mt-auto">
        <div className="container mx-auto text-center text-[#6c757d] text-sm">
          <p>Grid Generator &copy; {new Date().getFullYear()} | Drag, resize, and customize your grid layout | Harshil Arora </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
