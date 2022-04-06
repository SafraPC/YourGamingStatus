import { useState } from "react";
import { toast } from "react-toastify";
import { loginApi, registerApi } from "../api/auth";
import { TOASTIFY_OPTIONS } from "../styles/globalStyles";

export const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const login = async (login, password) => {
		setLoading(true);
		const response = await loginApi({ email: login, password });
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

	const register = async (email, name, password, rePassword) => {
		setLoading(true);
		if (
			password !== rePassword ||
			!email.length ||
			password.length < 2 ||
			!name.length
		) {
			toast.error(
				"Por favor, verifique os campos corretamente.",
				TOASTIFY_OPTIONS
			);
			setLoading(false);
			return false;
		}
		const response = await registerApi({
			email,
			name,
			password,
		});
		if (response) {
			toast.success(`Bem-vindo, ${response.data.user.name}!`, TOASTIFY_OPTIONS);
			localStorage.setItem("@token", response.data.token);
			setLoading(false);
			return true;
		}
		setLoading(false);
		toast.error(
			"Por favor, verifique os campos corretamente.",
			TOASTIFY_OPTIONS
		);
		return false;
	};
	return { login, register, loading };
};
