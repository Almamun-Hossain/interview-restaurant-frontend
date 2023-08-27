import { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Create the context provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Adjust this to match your user data structure

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
