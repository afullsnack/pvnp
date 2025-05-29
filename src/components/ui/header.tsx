"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Container } from "../craft";
import { ModeToggle } from "../mode-toggle";

function Header1() {
  const navigationItems = [
    {
      title: "About Us",
      href: "/#about-us",
      description: "",
    },
    {
      title: "Services",
      href: "/services",
      description: "",
    },
    {
      title: "Contact Us",
      href: "/contact",
      description: "",
    },
    {
      title: "Request data destruction",
      href: "/request-data-destruction",
      description: ""
    }
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 sticky top-0 left-0 bg-background">
      <Container className="relative mx-auto min-h-10 flex gap-4 flex-row lg:grid lg:grid-cols-2 items-center rounded-3xl">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Link to={item.href}>
                          <Button className="hover:cursor-pointer" variant="ghost">{item.title}</Button>
                        </Link>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Book a call today
                            </Button>
                          </div>
                          {/*<div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>*/}
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/*        <div className="flex lg:justify-center">
          <p className="font-semibold">TWBlocks</p>
        </div> */}
        <div className="flex justify-end w-full gap-4">
          <ModeToggle />
          <div className="border-r hidden md:inline"></div>

          {/* TODO: Add logo for mobile view */}
          <div className="lg:hidden flex justify-start items-center w-full">
            <img src="/logo.png" className="object-cover size-6 ml-2" />
          </div>
        </div>
        {/* For responsiveness */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <Container className="absolute top-10 border-t border-b flex flex-col w-full right-0 bg-background shadow-lg py-4 px-4 gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg">{item.title}</span>
                        {/*<MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />*/}
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </Container>
          )}
        </div>
      </Container>
    </header>
  );
}

export { Header1 };
