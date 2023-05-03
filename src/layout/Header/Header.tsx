import React, { useEffect, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import Logo from "../logo.svg";
import cn from "classnames";
import { ButtonIcon } from "@/components";
import { useReducedMotion, motion } from "framer-motion";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const shouldReduceMotion = useReducedMotion();

    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            },
        },
        closed: {
            opacity: shouldReduceMotion ? 1 : 0,
            x: "100%",
        },
    };
    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon
                appearance="white"
                icon="menu"
                onClick={() => setIsOpened(true)}
            />
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial={"closed"}
                animate={isOpened ? "opened" : "closed"}
            >
                <Sidebar />
                <ButtonIcon
                    className={styles.menuClose}
                    appearance="white"
                    icon="close"
                    onClick={() => setIsOpened(false)}
                />
            </motion.div>
        </header>
    );
};

export default Header;
