import React, { useContext } from "react";
import { useNavigate } from "react-router";
import {
	SidebarElement,
	StyledSidebar,
	StyledSpan,
	WidthToggle,
} from "./styles";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { Tooltip } from "../Tooltip";
import { SidebarContext } from "../../context/sidebar";

const SidebarUpsideElements = [
	{
		title: "Lobby",
		path: "/home",
		icon: AiOutlineHome,
		filled: false,
	},
	{
		title: "Quem Somos",
		path: "/who-we-are",
		icon: MdOutlineWorkOutline,
		filled: false,
	},
	{
		title: "Logout",
		path: "/login",
		icon: AiOutlineLogout,
		action: () => {
			localStorage.removeItem("@token");
		},
		filled: false,
	},
];

const Sidebar = ({ screen }) => {
	const navigate = useNavigate();
	const { isSidebarOpen, setIsSidebar } = useContext(SidebarContext);

	return (
		<StyledSidebar opened={isSidebarOpen}>
			<WidthToggle onClick={() => setIsSidebar(!isSidebarOpen)}>
				{isSidebarOpen ? <BiLeftArrow size={20} /> : <BiRightArrow size={20} />}
			</WidthToggle>
			{SidebarUpsideElements.map((item) => (
				<SidebarElement
					key={item.path}
					onClick={() => {
						if (item.action) {
							item.action();
						}
						navigate(item.path);
					}}
					filled={screen === item.title}
				>
					<item.icon size={15} />
					<StyledSpan opened={isSidebarOpen}>{item.title}</StyledSpan>
					{!isSidebarOpen && <Tooltip message={item.title} />}
				</SidebarElement>
			))}
		</StyledSidebar>
	);
};

export { Sidebar };
