import { useMutation, useQuery } from '@tanstack/react-query';
import { getInvoices, postInvoice } from '@/app/api/Invoices';
import { Invoice, InvoicePost } from '@/app/types/api';
import queryClient from '@/lib/queryClient';

export const useGetInvoices = () => {
  return useQuery<Invoice[]>({
    queryKey: ['invoices'],
    queryFn: () => getInvoices(),
  });
};

export const usePostInvoice = ({ value, timestamp}: InvoicePost) => {
  return useMutation({
    mutationKey: ['postInvoice'],
    mutationFn: () => postInvoice({ value, timestamp }),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['invoices'] });
    },
  });
};