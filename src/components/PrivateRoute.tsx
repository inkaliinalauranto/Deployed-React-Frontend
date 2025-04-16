import { useSnapshot } from "valtio";
import { authStore } from "../store/auth_store";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "../models/layout";

/* Otettu vaikutteita seuraavista lähteistä:
- https://medium.com/@bhairabpatra.iitd/private-routes-in-react-559a7d8d161f
- https://github.com/inkaliinalauranto/WTT-frontend
*/
export default function PrivateRoute({ child }: PrivateRouteProps) {
    const authSnap = useSnapshot(authStore)

    return authSnap.token != "" ? child : <Navigate to="/" />
}