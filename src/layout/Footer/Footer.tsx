import React from "react";
import styles from "./Footer.module.scss";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <span>
                OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
            </span>
            <a href="#" target="_blank">
                Пользовательское соглашение
            </a>
            <a href="#" target="_blank">
                Политика конфиденциальности
            </a>
        </footer>
    );
};

export default Footer;
