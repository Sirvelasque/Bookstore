import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/navbar';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="App">
          <Router>
            <header className="App-header">
              <div className="header-left">
                <h1>Bookstore CMS</h1>
                <Navbar />
              </div>
            </header>
            <Routes>
              <Route path="/" exact element={<BookList />} />
              <Route path="/Categories" element={<Categories />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
