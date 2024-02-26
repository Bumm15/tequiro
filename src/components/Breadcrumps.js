import { Breadcrumbs } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

export function BreadcrumbsDefault() {
    const location = useLocation();

    console.log(location.pathname);

    const locations = {
        "/": "Home",
        "strategies": "/strategies",
        "account": ""
    }

    return (
        <Breadcrumbs className="bg-mainbg ">
            <a href="/" className="opacity-60 text-secondaryText">
                Home
            </a>
            <a href="#" className="opacity-60 text-secondaryText">
                Neco
            </a>
            <a href="#" className="text-secondaryText">Active</a>
        </Breadcrumbs>
    );
}