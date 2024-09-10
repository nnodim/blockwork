import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { logo } from "@/assets";
import { Button } from "./ui/button";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Explore Occasions", href: "#", current: false },
  { name: "Demo", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
];

export const Navbar = () => {
  return (
    <header className="py-5 px-2 sm:px-6 lg:px-8 sticky top-0 z-50 bg-white w-full">
      <nav className="relative flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex flex-1 items-center justify-between h-full">
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" size="full">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-1 flex flex-col pt-4 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-base font-medium text-[#333333] hover:bg-primary"
                      //   aria-current={item.current ? "page" : undefined}
                    >
                      <SheetTrigger className="w-full text-left">
                        {item.name}
                      </SheetTrigger>
                    </a>
                  ))}
                  <div className="lg:hidden flex flex-col gap-4 sm:static sm:pr-0">
                    <a href={"#"}>
                      <Button
                        type="button"
                        className="w-full max-w-[200px] bg-primary px-8 rounded-lg text-white hover:bg-[#7c4dffe6] hover:text-white"
                      >
                        Sign Up
                      </Button>
                    </a>
                    {/* <a href={LOGIN}>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full max-w-[200px] text-primary px-8 rounded-lg border-primary hover:text-primary"
                      >
                        Login
                      </Button>
                    </a> */}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <a href="#">
              <img
                className="block h-7 md:h-[52px] w-auto"
                src={logo}
                alt="Your Company"
              />
            </a>
          </div>
          {/* Navigation */}
          <div className="hidden sm:ml-6 lg:block text-center">
            <div className="flex space-x-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    item.current
                      ? "text-primary"
                      : "text-[#4F4F4F] hover:text-primary",
                    "px-3 py-2 transition-all"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <span>{item.name}</span>
                  {item.current && (
                    <div className="w-4 h-0.5 bg-primary mx-auto"></div>
                  )}
                </a>
              ))}{" "}
            </div>
          </div>
          {/* Profile */}
          <div className="hidden absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href={"#"}>
              <Button
                type="button"
                className="px-8 rounded-lg text-white"
              >
                Sign Up
              </Button>
            </a>
            {/* <a href={"#"}>
              <Button
                type="button"
                variant="outline"
                className="ml-4 text-primary px-8 rounded-lg border-primary hover:text-primary"
              >
                Login
              </Button>
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
