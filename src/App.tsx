import { useState } from 'react';
import { BootSequence } from './components/BootSequence';
import { MainLayout } from './components/MainLayout';
import './index.css';

function App() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      {!isBooted ? (
        <BootSequence onComplete={() => setIsBooted(true)} />
      ) : (
        <MainLayout />
      )}
    </>
  );
}

export default App;
