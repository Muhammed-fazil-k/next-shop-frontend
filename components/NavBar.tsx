import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  const user = undefined;
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
