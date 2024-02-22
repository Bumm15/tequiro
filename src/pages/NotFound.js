import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";

const contents = [
    {
        buttonName: "Home Page",
        icon: "fa-home",
        href: "/"
    },
    {
        buttonName: "Strategies",
        icon: "fa-sheet-plastic",
        href: "/strategies"
    },
    {
        buttonName: "Contact Us",
        icon: "fa-message",
        href: "/contact-us"
    },
];


export function ErrorCard({ icon, buttonName, href }) {
    const handleRedirect = (href) => {
        window.location.href = href
    }
    return (
        <Card shadow={true}>
            <CardBody className="max-w-[11rem] p-3 ">
                <div className="mb-5 grid items-center">
                    <i className={`fas text-3xl text-gray-900 ${icon}`} />
                </div>
                <Button color="gray" fullWidth onClick={() => handleRedirect(href)}>
                    {buttonName}
                </Button>
            </CardBody>
        </Card>
    );
}

export function NotFound() {
    return (
        <section className="py-20 md:py-4 text-primaryText mx-auto">
            <div className="relative min-h-screen w-full ">
                <div className="grid min-h-screen px-8">
                    <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                        <Typography
                            variant="h1"
                            className="text-4xl !leading-snug lg:text-5xl"
                        >
                            Error 404
                        </Typography>
                        <Typography
                            variant="h1"
                            className="mt-6 text-4xl !leading-snug lg:text-3xl"
                        >
                            Sorry, We Misplaced That Page
                        </Typography>
                        <Typography
                            variant="lead"
                            color="gray"
                            className="mt-4 mb-6 w-full md:max-w-full lg:mb-12 lg:max-w-3xl"
                        >
                            Our digital librarian seems to have misplaced the page you
                            requested. Stay with us, and we&apos;ll help you rediscover it.{" "}
                            <br /> <br />
                            Here, instead, you&apos;ll find some useful links:
                        </Typography>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
                            {contents.map(({ buttonName, icon, href }, index) => (
                                <ErrorCard key={index} buttonName={buttonName} icon={icon} href={href} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default NotFound;