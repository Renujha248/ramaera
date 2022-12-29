import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Navbar = () => {
    return (
        <>
            <header class="text-gray-600 body-font ">
                <div class="container mx-auto flex flex-wrap flex-row md:flex-row items-center justify-between">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <img src={require('../../images/logo-ramaera.png')} />

                    </a>
                    <nav class="w-5/6 flex flex-wrap items-center text-base justify-between border-2 p-4 px-8 rounded-lg">
                        <div>
                            <a class="mr-5 text-white">Home</a>
                            <a class="mr-5 text-white">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0">
                                            Our Industries
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
                                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 z-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            About us
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Our offerings
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Global citizenship
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Newsroom
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Investor relations
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Blog
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Careers
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </a>
                            <a class="mr-5 hover:text-gray-900">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-neutral-700 rounded-full text-white mt-4 md:mt-0">
                                            Our companies
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
                                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 z-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            About us
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Our offerings
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Global citizenship
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Newsroom
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Investor relations
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Blog
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-neutral-200 text-black' : 'text-black'
                                                                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                        >
                                                            Careers
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </a>
                        </div>

                        <div>
                            <a class="mr-5  text-xs text-white" href="javascipt:void(0)">Career</a>
                            <a class="mr-5 text-xs text-white" href="javascipt:void(0)">Contact</a>
                            <span className='cursor-pointer'>
                                <svg className='inline' height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
                            </span></div>
                    </nav>

                </div>
                <div className='flex justify-center flex-col mt-28'>
                    <img src={require("../../images/ramaera-industries.png")} className="w-3/6 m-auto" />
                    <p className='text-white w-3/5 leading-relaxed text-3xl m-auto font-bold'>
                    An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.

                    </p>
                    <div>
                        <button className='explore-btn'>Explore more</button>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Navbar