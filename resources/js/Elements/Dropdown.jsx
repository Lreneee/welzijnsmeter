import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const title = this.props.title;
        return (
            <Menu as="div" className="relative inlibne-block text-left">
                <div>
                    <Menu.Button
                        id={title}
                        className="inline-flex w-20 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                        {title}
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item id="menu-item-1">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "1";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        1
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-2">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "2";
                                            console.log(document.getElementById(title).innerHTML)
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        2
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-3">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "3";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        3
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-4">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "4";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        4
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-5">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "5";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        5
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-6">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "6";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        6
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-7">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "7";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        7
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-8">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "8";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        8
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-9">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "9";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        9
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item id="menu-item-10">
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            document.getElementById(title).innerHTML = "10";
                                        }}
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        10
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        );
    }
}
