import { useContext } from "react"
import { AuthContext } from "../contexts/exportContext.js";

function useAuth() {
    return useContext(AuthContext);
};

export default useAuth;