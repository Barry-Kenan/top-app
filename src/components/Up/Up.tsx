import React, { useEffect } from "react";
import styles from "./Up.module.scss";
import { motion, useAnimation } from "framer-motion";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { useScrollY } from "@/hooks/useScrollY";

const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <motion.div
            className={styles.up}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <ButtonIcon
                appearance="primary"
                aria-label="Наверх"
                icon="up"
                onClick={scrollToTop}
            />
        </motion.div>
    );
};

export default Up;
