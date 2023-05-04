import React, { useState, KeyboardEvent } from "react";
import styles from "./Search.module.scss";
import cn from "classnames";
import { SearchProps } from "./Search.props";
import Input from "../Input/Input";
import Button from "../Button/Button";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();
    const goToSearch = () => {
        router.push({
            pathname: "/search",
            query: {
                name: search,
            },
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code == "Enter") {
            goToSearch();
        }
    };
    return (
        <form className={cn(className, styles.search)} {...props} role="search">
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={goToSearch}
                aria-label="Искать по сайту"
            >
                <GlassIcon />
            </Button>
        </form>
    );
};

export default Search;
