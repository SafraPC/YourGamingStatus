import React from "react";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { ColumnContainer, StyledContent, StyledPage } from "./styles";

const Page = ({ screen, children }) => {
	return (
		<StyledPage>
			<Sidebar screen={screen} />
			<ColumnContainer>
				<StyledContent>{children}</StyledContent>
				<Footer />
			</ColumnContainer>
		</StyledPage>
	);
};

export { Page };
