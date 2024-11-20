import { useQuery } from '@tanstack/react-query';
import { getInvoices } from '@/app/api/Invoices';
import { Invoice } from '@/app/types/api';

export const useGetInvoices = () => {
  return useQuery<Invoice[]>({
    queryKey: ['invoices'],
    queryFn: () => getInvoices(),
  });
};