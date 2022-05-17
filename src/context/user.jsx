import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
	username: "",
	email: "",
	setUsername: (usermame) => null,
	setEmail: (email) => null,
});

const UserProvider = ({ children }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");

	return (
		<UserContext.Provider value={{ username, email, setUsername, setEmail }}>
			{children}
		</UserContext.Provider>
	);
};
export { UserProvider };
