import React, { createContext } from "react";
import { useState } from "react";

export const SidebarContext = createContext({
	isSidebarOpen: false,
	setIsSidebar: (sidebar) => null,
});

const SidebarProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebar] = useState(false);

	return (
		<SidebarContext.Provider value={{ isSidebarOpen, setIsSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};
export { SidebarProvider };
