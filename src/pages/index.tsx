import { Button, Htag, Input, P, Rating, Tag, Textarea } from "@/components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(3);

    useEffect(() => {
        console.log("Counter" + counter);
        return function cleanUp() {
            console.log("unmount");
        };
    });
    return (
        <>
            <Htag tag="h1">Hello Next </Htag>
            <Button appearance="primary" arrow="down">
                Primary button
            </Button>
            <Button appearance="ghost" arrow="right">
                Ghost button
            </Button>
            <P size="s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                laudantium nam nisi accusamus pariatur ipsam, iste recusandae
                officia dignissimos! Voluptatum placeat consectetur
                exercitationem recusandae totam rerum commodi ipsa mollitia
                fugit!
            </P>
            <P size="m">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                laudantium nam nisi accusamus pariatur ipsam, iste recusandae
                officia dignissimos! Voluptatum placeat consectetur
                exercitationem recusandae totam rerum commodi ipsa mollitia
                fugit!
            </P>
            <P size="l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                laudantium nam nisi accusamus pariatur ipsam, iste recusandae
                officia dignissimos! Voluptatum placeat consectetur
                exercitationem recusandae totam rerum commodi ipsa mollitia
                fugit!
            </P>
            <Tag color="green">-10000</Tag>
            <Tag color="red" size="m">
                hh.ru
            </Tag>
            <Tag color="primary">Photoshop</Tag>
            <Tag color="ghost">top-app</Tag>
            <Tag color="gray">top-app</Tag>
            <Button
                appearance="primary"
                onClick={() => setCounter(counter + 1)}
            >
                +++
            </Button>
            <Button appearance="ghost" onClick={() => setCounter(counter - 1)}>
                ---
            </Button>
            {counter}

            <br />
            <Rating rating={rating} isEditable setRating={setRating} />
            <Input placeholder="input" />
            <Textarea />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
        {
            firstCategory,
        }
    );
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
