import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import './index.css';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import MyScores from './pages/MyScores';
import Quiz from './pages/Quiz';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Nav from './components/Nav';


const httpLink = createHttpLink({
  uri:'/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App flex flex-initial flex-col bg-center bg-cover h-full min-h-screen sm:bg-[url('./assets/images/yak-muted.jpg')] bg-[url('./assets/images/yak-muted-media-query.jpg')]">
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Nav />
            <Routes className=''>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/myscores" element={<MyScores />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
