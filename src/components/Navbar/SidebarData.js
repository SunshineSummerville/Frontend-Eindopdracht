import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text',
        notLoggedIn: true,
        loggedIn: true
    },
    {
        title: 'Handymen',
        path: '/Handymen',
        icon: <IoIcons.IoIosPaper />,
        className: 'nav-text',
        notLoggedIn: true,
        loggedIn: true
    },
    {
        title: 'Services',
        path: '/services',
        icon: <IoIcons.IoIosBusiness/>,
        className: 'nav-text',
        notLoggedIn: true,
        loggedIn: true

    },
    {
        title: 'Sign in',
        path: '/signin',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text',
        notLoggedIn: true,
        loggedIn: false

    },
    {
        title: 'Sign up',
        path: '/signup',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text',
        notLoggedIn: true,
        loggedIn: false

    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text',
        notLoggedIn: false,
        loggedIn: true

    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        className: 'nav-text',
        notLoggedIn: false,
        loggedIn: true

    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'nav-text',
        notLoggedIn: true,
        loggedIn: true

    },
    {
        title: 'Shopping Cart',
        path: '/shoppingcart',
        icon: <FaIcons.FaCartPlus />,
        className: 'nav-text',
        notLoggedIn: true,
        loggedIn: true

    },
    {
        title: 'Reservation History',
        path: '/reservationhistory',
        icon: <FaIcons.FaClipboardList />,
        className: 'nav-text',
        notLoggedIn: false,
        loggedIn: true

    },
]
