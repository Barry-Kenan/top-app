import React from "react";
import styles from "./Tag.module.scss";
import cn from "classnames";
import { TagProps } from "./Tag.props";

const Tag = ({
    children,
    size = "s",
    color = "ghost",
    href,
    className,
    ...props
}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size == "s",
                [styles.m]: size == "m",
                [styles.gray]: color == "gray",
                [styles.green]: color == "green",
                [styles.red]: color == "red",
                [styles.ghost]: color == "ghost",
                [styles.primary]: color == "primary",
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};

export default Tag;
