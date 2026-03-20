import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('ec_session');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('ec_users') || '[]');

    if (users.find((u) => u.email === email)) {
      return { success: false, error: 'An account with this email already exists.' };
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('ec_users', JSON.stringify(users));

    const session = { name, email };
    localStorage.setItem('ec_session', JSON.stringify(session));
    setUser(session);

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('ec_users') || '[]');
    const found = users.find((u) => u.email === email && u.password === password);

    if (!found) {
      return { success: false, error: 'Invalid email or password.' };
    }

    const session = { name: found.name, email: found.email };
    localStorage.setItem('ec_session', JSON.stringify(session));
    setUser(session);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('ec_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
