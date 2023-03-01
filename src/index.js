import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import Main from './pages/Main'
import MyPosts from './pages/MyPosts'
import Update from './pages/Update'
import Create from './pages/Create'
import Details from './pages/Details'
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/myposts" element={ <MyPosts /> } />
            <Route path="/create" element={ <Create /> } />
            <Route path="/update/:postId" element={ <Update /> } />
            <Route path="/post/:postId" element={ <Details /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)