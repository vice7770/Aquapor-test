"use client"
import { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    id: "",
    value: "9.99EUR",
    timestamp: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h1>Pagamentos</h1>
      <p>Payment page</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default Page;