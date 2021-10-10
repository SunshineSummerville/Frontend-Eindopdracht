import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Handymen',
        path: '/Handymen',
        icon: <IoIcons.IoIosPaper />,
        className: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <IoIcons.IoIosBusiness/>,
        className: 'nav-text'
    },
    {
        title: 'Handyman Sign up',
        path: '/handymansignup',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
    {
        title: 'Sign in',
        path: '/signin',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
    {
        title: 'Sign up',
        path: '/signup',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        className: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'nav-text'
    },
    {
        title: 'Shopping Cart',
        path: '/services',
        icon: <FaIcons.FaCartPlus />,
        className: 'nav-text'
    },
    {
        title: 'Reservation History',
        path: '/reservationhistory',
        icon: <FaIcons.FaClipboardList />,
        className: 'nav-text'
    },
]
