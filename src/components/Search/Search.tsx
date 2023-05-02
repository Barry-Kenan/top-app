import React, { useState } from "react";
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            goToSearch();
        }
    };
    return (
        <form className={cn(className, styles.search)} {...props}>
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
            >
                <GlassIcon />
            </Button>
        </form>
    );
};

export default Search;
