import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/navbar';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<BookList />} />
            <Route path="/Categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
