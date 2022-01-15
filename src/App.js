import './App.css';
import HomePage from './components/HomePage';
import PaperPage from './components/PaperPage';
import AuthorPage from './components/AuthorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './components/LoginPage';
import ReadingListPage from './components/ReadingListPage';
import { GlobalStateProvider } from './GlobalStateProvider';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <GlobalStateProvider>
      <BrowserRouter >
        <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="papers" element={<PaperPage />} />
          <Route path="authors" element={<AuthorPage />} />
          <Route path="readinglist" element={<ReadingListPage/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
        </div>

      </BrowserRouter>
    </GlobalStateProvider>
  );
}

export default App;
