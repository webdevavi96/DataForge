import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        isVerified: true
    });

    const logout = async () => {
        return
    }

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};