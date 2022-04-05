import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

function AppRoutes() {
	const AuthConfig = ({ children }) => {
		if (localStorage.getItem("@token")) {
			return children;
		}
		return <Navigate to="/login" />;
	};
	const UnAuthConfig = ({ children }) => {
		if (!localStorage.getItem("@token")) {
			return children;
		}
		return <Navigate to="/home" />;
	};

	return (
		<Routes>
			<Route
				path="/"
				element={
					<UnAuthConfig>
						<Login />
					</UnAuthConfig>
				}
			/>
			<Route
				path="/login"
				element={
					<UnAuthConfig>
						<Login />
					</UnAuthConfig>
				}
			/>
			<Route
				path="/register"
				element={
					<UnAuthConfig>
						<Register />
					</UnAuthConfig>
				}
			/>
			<Route
				path="/home"
				element={
					<AuthConfig>
						<Home />
					</AuthConfig>
				}
			/>
		</Routes>
	);
}

export default AppRoutes;
