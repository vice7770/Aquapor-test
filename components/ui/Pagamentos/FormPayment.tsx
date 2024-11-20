"use client";
// import { usePostInvoice } from "@/app/hooks/invoices";
import { useEffect, useState } from "react";
import { Button } from "../button";
import CardPayment from "./CardPayment";
import queryClient from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { usePostInvoice } from "@/app/hooks/invoices";

function PaymentComponent() {
  const [formData, setFormData] = useState({
    value: "9.99EUR",
    timestamp: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
    const router = useRouter();

    const { mutate, isPending, isSuccess, isError} = usePostInvoice(formData);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      timestamp: new Date().toISOString(),
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    e.preventDefault();
    mutate();
  };

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      setTimeout(() => {
        router.push("/listaPagamentos");
      }, 3000);
    }
  }, [isSuccess, router]);

  return (
    <div className="flex flex-col gap-y-5">
       {showSuccess ? (
        <h1 className="font-bold text-lg">Successo! A Navegar...</h1>
      ) : (
        <>
          <form className="flex w-full justify-center gap-x-5" onSubmit={handleSubmit}>
            <Button type="submit">Button</Button>
            {isPending && <h1 className="font-bold text-lg">Submissao em espera...</h1>}
          </form>
          <CardPayment value={formData.value} timestamp={formData.timestamp} />
        </>
      )}
      
    </div>
  );
}

const FormPayment = () => (
  <QueryClientProvider client={queryClient}>
    <PaymentComponent />
  </QueryClientProvider>
);

export default FormPayment;
