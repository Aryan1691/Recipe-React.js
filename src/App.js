import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles/Index.scss';
import './styles/Navbar.scss';
import './styles/HeroSection.scss';
import './styles/CustomImages.scss';
import './styles/ImproveSkill.scss';
import './styles/QuoteSection.scss';
import './styles/ChefSection.scss';
import './styles/Footer.scss';
import './styles/MediaQuery.scss';
import './styles/Recipies.scss';
import './styles/RecipeCards.scss';

const Home = lazy(() => import('./pages/Home'));
const Recipies = lazy(() => import('./pages/Recipies'));

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"3em",marginTop:"10%"}}>Loading....</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/recipes"
              element={
                <Suspense fallback={<div>Loading....</div>}>
                  <Recipies />
                </Suspense>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
