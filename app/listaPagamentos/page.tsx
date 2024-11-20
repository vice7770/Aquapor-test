import PaymentsTable from "@/components/ui/ListaPagamentos/PaymentsTable";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex w-full h-1/5 justify-center">
            <h1 className="font-bold text-3xl">Lista de Pagementos</h1>
        </div>
        <div className="flex w-full justify-center px-10">
          <PaymentsTable />
        </div>
    </div>
  );
}

export default Page;