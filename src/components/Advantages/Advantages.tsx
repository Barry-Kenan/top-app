import React from "react";
import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.scss";
import cn from "classnames";
import { Divider } from "../index";
import CheckIcon from "./check.svg";

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map((a) => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <Divider type="vertical" />
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    );
};

export default Advantages;
