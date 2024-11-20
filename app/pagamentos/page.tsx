"use client"
import { Button } from "@/components/ui/button";
import CardPayment from "@/components/ui/CardPayment";
import { useState } from "react";

function Page() {
  const [formData] = useState({
    id: "",
    value: "9.99EUR",
    timestamp: new Date().toISOString(),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
        <div className="flex flex-col gap-y-5">
            <form className="flex w-full justify-center" onSubmit={handleSubmit}>
                <Button type="submit">Button</Button>
            </form>
            <CardPayment value={formData.value} timestamp={formData.timestamp} />
        </div>
    </div>
  );
}

export default Page;