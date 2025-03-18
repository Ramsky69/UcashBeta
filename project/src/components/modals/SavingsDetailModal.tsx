import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CreditCard,
  PlusCircle,
  Landmark,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

interface SavingsDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SavingsDetailModal: React.FC<SavingsDetailModalProps> = ({
  open,
  onOpenChange,
}) => {
  const accounts = [
    {
      id: 1,
      name: 'Primary Savings',
      bank: 'UCash Bank',
      accountNumber: '****2345',
      balance: 180750.25,
      growth: 5.2,
      transactions: [
        {
          date: 'Jul 15, 2025',
          description: 'Deposit',
          amount: 5000,
          type: 'credit',
        },
        {
          date: 'Jul 10, 2025',
          description: 'Interest',
          amount: 750.25,
          type: 'credit',
        },
        {
          date: 'Jun 30, 2025',
          description: 'Transfer to Checking',
          amount: 2000,
          type: 'debit',
        },
      ],
    },
    {
      id: 2,
      name: 'Emergency Fund',
      bank: 'World Bank',
      accountNumber: '****7890',
      balance: 65024.5,
      growth: 4.8,
      transactions: [
        {
          date: 'Jul 12, 2025',
          description: 'Deposit',
          amount: 1000,
          type: 'credit',
        },
        {
          date: 'Jul 01, 2025',
          description: 'Interest',
          amount: 324.5,
          type: 'credit',
        },
      ],
    },
    {
      id: 3,
      name: 'Retirement Fund',
      bank: 'Future Investments',
      accountNumber: '****4321',
      balance: 45830.24,
      growth: 6.5,
      transactions: [
        {
          date: 'Jul 15, 2025',
          description: 'Contribution',
          amount: 2000,
          type: 'credit',
        },
        {
          date: 'Jul 01, 2025',
          description: 'Dividend',
          amount: 830.24,
          type: 'credit',
        },
      ],
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Savings Details</DialogTitle>
          <DialogDescription>Manage your savings accounts</DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue={`account-${accounts[0].id}`}
          className="flex-1 overflow-hidden flex flex-col"
        >
          <div className="flex justify-between items-center">
            <TabsList>
              {accounts.map((account) => (
                <TabsTrigger key={account.id} value={`account-${account.id}`}>
                  {account.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <Button className="bg-ucash-dark text-white">
              <PlusCircle size={16} className="mr-2" />
              Add Account
            </Button>
          </div>

          {accounts.map((account) => (
            <TabsContent
              key={account.id}
              value={`account-${account.id}`}
              className="flex-1 overflow-auto mt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{account.name}</h3>
                      <div className="flex items-center mt-1">
                        {account.bank === 'UCash Bank' ? (
                          <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs">$</span>
                          </div>
                        ) : (
                          <Landmark size={16} className="mr-2 text-gray-500" />
                        )}
                        <span className="text-sm text-gray-600">
                          {account.bank}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-full">
                      <CreditCard size={16} className="text-gray-600" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm text-gray-500">Account Number</div>
                    <div>{account.accountNumber}</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-gray-500">
                        Current Balance
                      </div>
                      <div className="text-2xl font-bold">
                        $
                        {account.balance.toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                    <div className="flex items-center text-green-600">
                      <ArrowUpRight size={16} className="mr-1" />
                      <span>{account.growth}%</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm text-gray-500">
                      Annual Interest Rate
                    </div>
                    <div>3.5%</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Recent Transactions</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">
                          Date
                        </th>
                        <th className="text-left py-2 px-4 text-sm font-medium text-gray-600">
                          Description
                        </th>
                        <th className="text-right py-2 px-4 text-sm font-medium text-gray-600">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {account.transactions.map((transaction, idx) => (
                        <tr key={idx} className="border-t border-gray-200">
                          <td className="py-3 px-4 text-sm">
                            {transaction.date}
                          </td>
                          <td className="py-3 px-4 text-sm">
                            {transaction.description}
                          </td>
                          <td className="py-3 px-4 text-sm text-right flex justify-end items-center">
                            {transaction.type === 'credit' ? (
                              <>
                                <ArrowUpRight
                                  size={14}
                                  className="text-green-600 mr-1"
                                />
                                <span className="text-green-600">
                                  +$
                                  {transaction.amount.toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </span>
                              </>
                            ) : (
                              <>
                                <ArrowDownRight
                                  size={14}
                                  className="text-red-600 mr-1"
                                />
                                <span className="text-red-600">
                                  -$
                                  {transaction.amount.toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                </span>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline">Transfer Funds</Button>
                <Button className="bg-ucash-dark text-white">Add Money</Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SavingsDetailModal;
