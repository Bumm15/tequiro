import { Typography } from "@material-tailwind/react";

export function FooterWithLogo() {
    return (
        <div className="container mx-auto">


            <footer className="w-full bg-componentColor p-8  rounded-lg">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-componentColor text-center md:justify-between">
                    <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                className="text-primaryText font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                className="text-primaryText font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                License
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                className="text-primaryText font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contribute
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                className="text-primaryText font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contact Us
                            </Typography>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-hover" />
                <Typography className="text-center font-normal text-primaryText">
                    &copy; {new Date().getFullYear()} Naše Firma
                </Typography>
            </footer>
        </div>
    );
}