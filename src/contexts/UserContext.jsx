import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUsername = localStorage.getItem("novaTask_username");
        if (savedUsername) {
            setUsername(savedUsername);
        }
        setLoading(false);
    }, []);

    const saveUsername = (name) => {
        setUsername(name);
        localStorage.setItem("novaTask_username", name);
    };

    const resetUser = () => {
        setUsername(null);
        localStorage.removeItem("novaTask_username");
    };

    return (
        <UserContext.Provider value={{ username, saveUsername, resetUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
