import React from "react";
import { DividerProps } from "./Divider.props";
import styles from "./Divider.module.scss";
import cn from "classnames";

const Divider = ({
    type = "horizontal",
    className,
    ...props
}: DividerProps): JSX.Element => {
    return (
        <hr
            className={cn(className, {
                [styles.vertical]: type == "vertical",
                [styles.horizontal]: type == "horizontal",
            })}
            {...props}
        />
    );
};

export default Divider;
