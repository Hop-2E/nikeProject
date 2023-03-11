import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState();

  const createUser = (u) => {
    setUser(u);
    console.log(user);
  };

  return (
    <AuthContext.Provider value={{ user, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
