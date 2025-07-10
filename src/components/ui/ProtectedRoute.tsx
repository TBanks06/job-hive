import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ROLES } from "../../utils/constants";
import { AuthContext}from "../auth/AuthProvider";

export default function ProtectedRoute({
    children,
    allowedRoles
}: {
    children: JSX.Element
    allowedRoles: string[]
}
) {
    const { currentUser } = useContext(AuthContext)
    const location = useLocation()

    if(!currentUser) {
        return <Navigate to="/login" state{{ from: location }} replace />
    }
}

// Check user role (in real app, get from user profile)
    const userRole = currentUser.email?.includes('admin')
        ? ROLES.ADMIN : ROLES.APPLICANT
