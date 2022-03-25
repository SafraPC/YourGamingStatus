import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import Login from "./screens/Login";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default AppRoutes;
