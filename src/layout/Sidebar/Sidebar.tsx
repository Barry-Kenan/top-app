import React from "react";
import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.props";
import Menu from "../Menu/Menu";
import cn from "classnames";
import Logo from "../logo.svg";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} />
            <div>Поиск</div>
            <Menu />
        </div>
    );
};

export default Sidebar;
