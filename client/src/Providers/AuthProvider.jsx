import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const TestUser = {
        fullName: "Test 01",
        username: "test",
        email: "test@gmail.com",
        isVerified: true
    };

    const logout = async () => {
        setUser(null);
    };

    const login = async (formData) => {
        if (!formData.email || !formData.password) return;
        else {
            setUser(TestUser);
            return TestUser;
        };
    };

    

    return (
        <AuthContext.Provider value={{ user, setUser, logout, login }}>
            {children}
        </AuthContext.Provider>
    );
};