import { Button, Htag } from "@/components";

export default function Home() {
    return (
        <>
            <Htag tag="h1">Hello Next </Htag>
            <Button appearance="primary">Primary button</Button>
            <Button appearance="ghost">Ghost button</Button>
        </>
    );
}
