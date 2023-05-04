import React from "react";
import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.scss";
import cn from "classnames";
import SortIcon from "./sort.svg";

const Sort = ({
    sort,
    setSort,
    className,
    ...props
}: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <div className={styles.sortName} id="sort">
                Сортировка
            </div>
            <button
                id="rating"
                role="sort"
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating,
                })}
                aria-selected={sort == SortEnum.Rating}
                aria-labelledby="sort rating"
            >
                <SortIcon className={styles.sortIcon} />
                По рейтингу
            </button>
            <button
                id="price"
                role="sort"
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price,
                })}
                aria-selected={sort == SortEnum.Price}
                aria-labelledby="sort price"
            >
                <SortIcon className={styles.sortIcon} />
                По&nbsp;цене
            </button>
        </div>
    );
};

export default Sort;
