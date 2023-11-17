"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const { data: session }: any = useSession();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold relative">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text animate-pulse">
              Ur
            </span>
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-4xl md:text-6xl font-extrabold tracking-wider transition-transform transform hover:scale-110 hover:rotate-3 hover:text-blue-600 animate-bounce">
              Next
            </span>
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text animate-pulse">
              Bazaar
            </span>
          </h1>


        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        {!session ? (
          <>
            <Link href="/login" className="text-indigo-700 hover:underline hover:text-green-700 transition duration-300 ease-in-out mr-4">
              Login
            </Link>
            <Link href="/register" className="text-indigo-700 hover:underline hover:text-green-700 transition duration-300 ease-in-out">
              Register
            </Link>
          </>
        ) : (
          <>
            <span className="hidden gap-12 lg:flex 2xl:ml-16 text-gray-600">{session.user?.email}</span>
            <span>
              <Button
                onClick={() => {
                  signOut();
                }}
                className="p-4 px-4 -mt-1 gap-12 lg:flex 2xl:ml-16 bg-blue-800 rounded-full"
              >
                Logout
              </Button>
            </span>
          </>
        )}
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}