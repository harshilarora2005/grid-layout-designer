import React from 'react';
import GridGenerator from './components/GridGenerator';
function App() {
  return (
    <div className="App">
      <header className="bg-[#0d47a1] text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Interactive Grid Generator</h1>
          <p className="text-sm opacity-80">Create and customize responsive grid layouts</p>
        </div>
      </header>
      <main className="container mx-auto py-4">
        <GridGenerator />
      </main>
      <footer className="bg-[#f8f9fa] border-t border-[#e0e0e0] p-4 mt-auto">
        <div className="container mx-auto text-center text-[#6c757d] text-sm">
          <p>Grid Generator &copy; {new Date().getFullYear()} | Drag, resize, and customize your grid layout</p>
        </div>
      </footer>
    </div>
  );
}

export default App;