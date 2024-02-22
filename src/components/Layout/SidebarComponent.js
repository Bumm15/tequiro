import React from 'react'
import { useLocation } from 'react-router-dom'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Button,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    QuestionMarkCircleIcon
  } from "@heroicons/react/24/solid";
  import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
   

import logo from '../Register/ot.webp'
import { useAuth } from '../../contexts/AuthContext';

export default function Sidebar({ show, setter }) {
    const router = useLocation();

    const [open, setOpen] = React.useState(0);

    const { user } = useAuth();
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

    // Define our base class
    const className = "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = router.pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <a
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div>{name}</div>
            </a>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass}`}>
            <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-none bg-menuBar text-primaryText rounded-none">
                <div className="mb-2 p-4">
                    <Typography variant="h5">
                    Objective Trader
                    </Typography>
                </div>
                <List>
                    <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""} `}
                        />
                    }
                    >
                    <ListItem className={`p-0 group ${open === 1 ? "bg-hover" : "bg-menuBar"} visited:bg-hover text-secondaryText hover:text-primaryText hover:bg-hover focus:bg-hover active:!bg-hover focus:!text-secondaryText`} selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 group-hover:text-primaryText text-secondaryText group-open:bg-hover">
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography className="mr-auto font-normal text-secondaryTex group-hover:text-primaryText">
                            Trading
                        </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                        <ListItem className='text-secondaryText hover:text-primaryText hover:bg-hover'>
                            <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            Strategies
                        </ListItem>
                        <ListItem className='text-secondaryText hover:text-primaryText hover:bg-hover'>
                            <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            Education  (Comming soon)
                        </ListItem>
                        <ListItem className='text-secondaryText hover:text-primaryText hover:bg-hover'>
                            <ListItemPrefix>
                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            Brokers
                        </ListItem>
                        </List>
                    </AccordionBody>
                    </Accordion>
                    <ListItem className="hover:text-primary text-secondaryText hover:bg-hover focus:bg-hover active:bg-hover focus:text-primaryText active:text-primaryText">
                    <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Forum (Comming soon)
                    </ListItem>
                    <ListItem className="hover:text-primary text-secondaryText hover:bg-hover focus:bg-hover active:bg-hover focus:text-primaryText active:text-primaryText">
                    <ListItemPrefix>
                    <QuestionMarkCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    FaQ
                    </ListItem>
                    <ListItem className="hover:text-primary text-secondaryText hover:bg-hover focus:bg-hover active:bg-hover focus:text-primaryText active:text-primaryText">
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    About Us
                    </ListItem>
                    <ListItem className="hover:text-primary text-secondaryText hover:bg-hover focus:bg-hover active:bg-hover focus:text-primaryText active:text-primaryText">
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Contact Us
                    </ListItem>
                    <hr className="my-2 border-hover" />

                    {user ? (
                        <>
                        <ListItem className="hover:text-primary text-secondaryText hover:bg-hover focus:bg-hover active:bg-hover focus:text-primaryText active:text-primaryText">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                        </ListItem>
                        <ListItem className="hover:text-red-500 text-secondaryText hover:bg-hover focus:bg-hover active:bg-hover focus:text-red-500 active:text-red-500">
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                        </ListItem>
                        </>
                    ) : (
                        <>
                        <Button className="mr-2 mb-3 text-secondaryText hover:text-white hover:bg-hover" onClick={() => window.location.href = "/account/login"}>Log In</Button>
                        <Button className="mr-2" color='blue' variant='gradient' onClick={() => window.location.href = "/account/register"} >Register</Button>
                        </>
                    )}
                </List>
                </Card>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}