import { useState } from "react";
import { toast } from "react-toastify";
import { loginApi } from "../api/auth";
import { TOASTIFY_OPTIONS } from "../styles/globalStyles";

export const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const login = async (login, password) => {
		setLoading(true);
		const response = await loginApi(login, password);
		if (response) {
			toast.success(`Bem-vindo, ${response.data.user.name}!`, TOASTIFY_OPTIONS);
			localStorage.setItem("@token", response.data.token);
			setLoading(false);
			return true;
		}
		toast.error(
			`Verifique suas credenciais e tente novamente!`,
			TOASTIFY_OPTIONS
		);
		setLoading(false);
		return false;
	};
	const register = (login, password, rePassword) => {
		return true;
	};
	return { login, register, loading };
};
