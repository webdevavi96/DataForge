import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../contexts/exportContext.js";

function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);

    if (!user?.isVerified) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}

export default ProtectedRoute;