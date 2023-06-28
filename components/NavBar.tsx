import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchJson } from "../lib/api";
import { User } from "../lib/user";

const NavBar: React.FC = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    console.log('Navbar:useEffect');
    
    (async () => {
      try {
        const user = await fetchJson("/api/user");
        setUser(user);
      } catch (err) {}
    })();
  }, []);
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
              <Link href="/sign-out"> Sign out</Link>
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
