"use client";

import React from "react";
import {
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export default function NavPage() {
  const menuItems = [
    
    "Dashboard",
    "My Settings",
  ];

  return (
    

    <Navbar  isBordered>
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
            <span>Paper.io</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        {/* Logo Section Start */}
        <NavbarBrand>
          <Link
            href="/"
            className="flex gap-1 font-bold text-gray-700 items-center "
          >
            <PaperAirplaneIcon className="h-6 w-6 text-primary" />
            <span>Paper.io</span>
          </Link>
        </NavbarBrand>
        {/* Logo Section End */}


        {
          menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))
        }
       
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="list-none">
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  
    
  );
}
