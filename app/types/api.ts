interface Invoice {
    id: string;
    value: string;
    timestamp: string;
};

type InvoicePost = Omit<Invoice, "id">;


export type { Invoice, InvoicePost };
