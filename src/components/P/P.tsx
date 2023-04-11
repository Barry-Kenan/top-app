import React from "react";
import { PProps } from "./P.props";
import styles from "./P.module.scss";
import cn from "classnames";

const P = ({ children, size = "m", className, ...props }: PProps) => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size == "s",
                [styles.m]: size == "m",
                [styles.l]: size == "l",
            })}
            {...props}
        >
            {children}
        </p>
    );
};

export default P;
