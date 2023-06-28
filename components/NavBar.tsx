import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchJson } from "../lib/api";
import { User } from "../lib/user";
import { useQuery } from "react-query";
import { useUser } from "../hooks/user";

const NavBar: React.FC = () => {
  const user = useUser();

  console.log("user:", user);

  async function handleSignOut() {
    console.log("signing out");
    await fetchJson("/api/logout");
    //FIXsetUser(undefined);
  }

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/"> Next Shop</Link>
        </li>
        <li className="flex-1"></li>
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={handleSignOut}> Sign out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in"> Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
