import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Toaster } from 'react-hot-toast';


export const Context = createContext({ isAuthenticated: false });
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({})
  const [userFitness, setUserFitness] = useState({})
  const [fitnessSuggetion, setFitnessSuggetion] = useState(null)
  const [fitness, setFitness] = useState(false)

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        userFitness,
        setUserFitness,
        fitnessSuggetion,
        setFitnessSuggetion,
        fitness,
        setFitness
      
      }}
    >
      <App />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
    <Toaster />
  </React.StrictMode>
);

