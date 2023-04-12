import React from "react";
import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.props";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return <div {...props}>Sidebar</div>;
};

export default Sidebar;
