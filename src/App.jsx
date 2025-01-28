import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CharacterEditor />
      <div id="floor" class="floor" />
      <Footer />
    </>
  );
}

export default App;
