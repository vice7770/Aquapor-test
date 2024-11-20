import Link from "next/link";
import * as React from "react";

function Header() {
  return (
    <header className="flex w-full p-4 bg-gray-200">
      <nav className="flex w-full">
        <ul className="flex w-full justify-evenly gap-4">
          <Link href="/pagamentos" className="text-blue-500">Pagamentos</Link>
          <Link href="/listaPagamentos" className="text-blue-500">Lista de Pagamentos</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;