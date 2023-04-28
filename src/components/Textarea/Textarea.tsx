import React from "react";
import styles from "./Textarea.module.scss";
import cn from "classnames";
import { TextareaProps } from "./Textarea.props";

const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
    return <textarea className={cn(className, styles.textarea)} {...props} />;
};

export default Textarea;
