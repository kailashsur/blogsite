"use client";

import React from "react";
import {
  PaperAirplaneIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import SearchBox from "./searchBox";
import { menuItemsDesktop, menuItemsMobile } from "@/utils/menu";


export default function NavPage() {

  const [isOpen, setIsOpen] = React.useState(false)

  // const menuItemsMobile = [
  //   "blog",
  //   "Dashboard",
  //   "My Settings",
  // ];
  // const menuItemsDesktop = [
  //   "blog",

  // ];

  return (


    <Navbar isBordered >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className="flex gap-1 font-bold text-gray-700 items-center "
          >
            <PaperAirplaneIcon className="h-6 w-6 text-primary" />
            <span>Kailashsur.in</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">

        {/* Logo Section Start */}
        <NavbarBrand>
          <Link
            href="/"
            className="flex gap-1 font-bold text-gray-700 items-center "
          >
            <PaperAirplaneIcon className="h-6 w-6 text-primary" />
            <span>Kailashsur.in</span>
          </Link>
        </NavbarBrand>
        {/* Logo Section End */}

        {
          menuItemsDesktop !== undefined && menuItemsDesktop.length ? menuItemsDesktop.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href={`/${item.menu}`} className=" capitalize">
                {item.menu}
              </Link>
            </NavbarItem>
          ))
          : ""
        }

      </NavbarContent>

      <NavbarContent justify="end">

     

        {/* Search Item */}
        <NavbarItem>
          <MagnifyingGlassIcon className="h-6 w-6 text-black cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          />

          {
            isOpen ?
              <SearchBox isOpen={isOpen} setIsOpen={setIsOpen} />
              : ""
          }

        </NavbarItem>

      </NavbarContent>

      <NavbarMenu>
        {menuItemsMobile !== undefined && menuItemsMobile.length ? menuItemsMobile.map((item, index) => (
          <NavbarMenuItem key={index} className="list-none">
            <Link
              className="w-full capitalize"
              color={
                index === 2 ? "warning" : index === menuItemsMobile.length - 1 ? "danger" : "foreground"
              }
              href={`/${item.menu}`}
              size="lg"
            >
              {item.menu}
            </Link>
          </NavbarMenuItem>
        )) 
      : ""}
      </NavbarMenu>
    </Navbar>


  );
}
