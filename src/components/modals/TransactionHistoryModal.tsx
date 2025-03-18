import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Clock,
  Circle,
  Search,
  Download,
  Filter,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FilterModal from './FilterModal';

interface TransactionHistoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TransactionHistoryModal: React.FC<TransactionHistoryModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const transactions = [
    {
      id: 1,
      purpose: 'Fauget Cafe',
      subtext: 'Coffee Shop',
      date: 'Today',
      time: '2m ago',
      amount: 500,
      type: 'Gift Code',
      status: 'Done',
    },
    {
      id: 2,
      purpose: 'Claudia Store',
      subtext: 'Accessories',
      date: 'Today',
      time: '5m ago',
      amount: 1000,
      type: 'Transfer',
      status: 'Done',
    },
    {
      id: 3,
      purpose: 'Chidi Barber',
      subtext: 'Barber Shop',
      date: 'Today',
      time: '1h ago',
      amount: 500,
      type: 'Gift Code',
      status: 'Done',
    },
    {
      id: 4,
      purpose: 'Cahaya Dewi',
      subtext: 'Transfer',
      date: 'Today',
      time: '2h ago',
      amount: 1000,
      type: 'Transfer',
      status: 'Pending',
    },
    {
      id: 5,
      purpose: 'Yael Amari',
      subtext: 'Decoration',
      date: 'Yesterday',
      time: '16:30 PM',
      amount: 500,
      type: 'Gift Code',
      status: 'Done',
    },
    {
      id: 6,
      purpose: 'Larana, Inc.',
      subtext: 'Hotel',
      date: 'Yesterday',
      time: '08:00 AM',
      amount: 1000,
      type: 'Gift Code',
      status: 'Done',
    },
    {
      id: 7,
      purpose: 'Grocery Mart',
      subtext: 'Groceries',
      date: '2 days ago',
      time: '15:45 PM',
      amount: 650,
      type: 'Purchase',
      status: 'Done',
    },
    {
      id: 8,
      purpose: 'Electricity Bill',
      subtext: 'Utilities',
      date: '3 days ago',
      time: '09:30 AM',
      amount: 850,
      type: 'Payment',
      status: 'Done',
    },
    {
      id: 9,
      purpose: 'Monthly Salary',
      subtext: 'Income',
      date: 'Last week',
      time: '10:00 AM',
      amount: 5000,
      type: 'Deposit',
      status: 'Done',
    },
    {
      id: 10,
      purpose: 'Internet Bill',
      subtext: 'Utilities',
      date: 'Last week',
      time: '14:15 PM',
      amount: 300,
      type: 'Payment',
      status: 'Done',
    },
  ];

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.subtext.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApplyFilters = (filters: any) => {
    console.log('Applied filters:', filters);
    // In a real app, you would filter transactions based on these filters
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Transaction History</DialogTitle>
            <DialogDescription>
              View all your past transactions
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center justify-between mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <Input
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="amount-high">Highest Amount</SelectItem>
                  <SelectItem value="amount-low">Lowest Amount</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={() => setFilterOpen(true)}>
                <Filter size={16} className="mr-2" />
                Filter
              </Button>

              <Button variant="outline">
                <Download size={16} className="mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="overflow-y-auto flex-1 -mx-6 px-6">
            <table className="w-full">
              <thead className="sticky top-0 bg-white">
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Purpose
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-800">
                        {transaction.purpose}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.subtext}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-800">
                        {transaction.date}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.time}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-800">
                        ${transaction.amount.toFixed(2)}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-gray-600">
                        {transaction.type}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        {transaction.status === 'Done' ? (
                          <>
                            <CheckCircle
                              size={16}
                              className="text-green-500 mr-1"
                            />
                            <span>Done</span>
                          </>
                        ) : transaction.status === 'Pending' ? (
                          <>
                            <Clock size={16} className="text-yellow-500 mr-1" />
                            <span>Pending</span>
                          </>
                        ) : (
                          <>
                            <Circle size={16} className="text-gray-500 mr-1" />
                            <span>{transaction.status}</span>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center pt-4 mt-auto border-t">
            <div className="text-sm text-gray-500">
              Showing {filteredTransactions.length} of {transactions.length}{' '}
              transactions
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <FilterModal
        open={filterOpen}
        onOpenChange={setFilterOpen}
        onApply={handleApplyFilters}
        type="transactions"
      />
    </>
  );
};

export default TransactionHistoryModal;
