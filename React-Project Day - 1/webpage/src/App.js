import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;