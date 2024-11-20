import FormPayment from "@/components/ui/Pagamentos/FormPayment";

function Page() {

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex w-full py-10 justify-center">
            <h1 className="font-bold text-3xl">Pagamento</h1>
        </div>
        <div className="flex w-full justify-center px-10">
          <FormPayment />
        </div>
    </div>
  );
}

export default Page;