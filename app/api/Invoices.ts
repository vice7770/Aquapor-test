import { Invoice, InvoicePost } from "../types/api";

const MockInvoicesData: Invoice[] = [
    {
        id: "1",
        value: "100",
        timestamp: "2021-08-01T12:00:00Z",
    },
    {
        id: "2",
        value: "200",
        timestamp: "2021-08-02T12:00:00Z",
    },
    {
        id: "3",
        value: "300",
        timestamp: "2021-08-03T12:00:00Z",
    },
];

export const getInvoices = async (): Promise<Invoice[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MockInvoicesData);
        }, 500);
    });
};   

// there is no dabase to post so the data is not used, but we will use the data to simulate a post
export const postInvoice = async ({value, timestamp} : InvoicePost) : Promise<{ status: string; message: string }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
            if (randomNumber === 0 || randomNumber === 1) {
                reject(new Error("Failed to post invoice details"));
            } else {
                resolve({ status: "ok", message: "Invoice posted successfully" });
            }
        }, 1000);
    });
};
