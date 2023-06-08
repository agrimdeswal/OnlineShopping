import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;