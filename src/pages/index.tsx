import { Card, Htag, Tag } from "@/components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { API } from "@/helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
    const stack: string[] = [
        "React",
        "Typescript",
        "NextJS",
        "Hooks",
        "react-hook-form",
        "SSR",
        "Grid",
        "Axios",
        "Framer-motion",
    ];
    return (
        <Card className="about">
            <Htag tag="h1">Приложение top-app</Htag>
            {stack.map((s) => (
                <Tag key={s} color="primary">
                    {s}
                </Tag>
            ))}
        </Card>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory,
    });
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
