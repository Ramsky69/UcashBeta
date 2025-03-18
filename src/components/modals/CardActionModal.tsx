import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Clock,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  PlusCircle,
} from 'lucide-react';

interface CardActionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  action: 'history' | 'topup';
}

const CardActionModal: React.FC<CardActionModalProps> = ({
  open,
  onOpenChange,
  action,
}) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const { toast } = useToast();

  const cardTransactions = [
    {
      date: 'Jul 15, 2025',
      time: '14:30 PM',
      description: 'Card Top-up',
      amount: 1000,
      status: 'completed',
      type: 'credit',
    },
    {
      date: 'Jul 10, 2025',
      time: '09:15 AM',
      description: 'Online Purchase',
      amount: 250.5,
      status: 'completed',
      type: 'debit',
    },
    {
      date: 'Jul 05, 2025',
      time: '18:45 PM',
      description: 'Card Top-up',
      amount: 500,
      status: 'completed',
      type: 'credit',
    },
    {
      date: 'Jul 01, 2025',
      time: '12:30 PM',
      description: 'Restaurant Payment',
      amount: 85.75,
      status: 'completed',
      type: 'debit',
    },
    {
      date: 'Jun 28, 2025',
      time: '16:20 PM',
      description: 'Grocery Store',
      amount: 120.35,
      status: 'completed',
      type: 'debit',
    },
  ];

  const handleTopup = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      toast({
        title: 'Invalid amount',
        description: 'Please enter a valid amount to top up',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Top-up successful',
      description: `$${amount} has been added to your card.`,
    });

    setAmount('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {action === 'history' ? 'Card History' : 'Top Up Your Card'}
          </DialogTitle>
        </DialogHeader>

        {action === 'history' ? (
          <div className="overflow-y-auto max-h-[60vh]">
            <Tabs defaultValue="all" className="mb-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="incoming">Incoming</TabsTrigger>
                <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              {cardTransactions.map((transaction, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-full ${
                        transaction.type === 'credit'
                          ? 'bg-green-100'
                          : 'bg-red-100'
                      } mr-3`}
                    >
                      {transaction.type === 'credit' ? (
                        <ArrowUpRight size={16} className="text-green-600" />
                      ) : (
                        <ArrowDownRight size={16} className="text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">
                        {transaction.description}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.date} - {transaction.time}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      transaction.type === 'credit'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {transaction.type === 'credit' ? '+' : '-'}$
                    {transaction.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </div>
                <Input
                  id="amount"
                  placeholder="0.00"
                  className="pl-8"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                    paymentMethod === 'bank'
                      ? 'border-ucash-dark bg-gray-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <CreditCard size={18} className="mr-2 text-gray-600" />
                  <span>Bank Account</span>
                </div>
                <div
                  className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-ucash-dark bg-gray-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <PlusCircle size={18} className="mr-2 text-gray-600" />
                  <span>Credit Card</span>
                </div>
              </div>
            </div>

            {paymentMethod === 'bank' && (
              <div className="grid gap-2">
                <Label>Select Bank Account</Label>
                <select className="w-full border border-gray-200 rounded-md p-2">
                  <option>UCash Bank (****2345)</option>
                  <option>World Bank (****7890)</option>
                </select>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="grid gap-2">
                <Label>Select Credit Card</Label>
                <select className="w-full border border-gray-200 rounded-md p-2">
                  <option>Visa ending in 4242</option>
                  <option>Mastercard ending in 5555</option>
                </select>
              </div>
            )}

            <div className="bg-gray-50 p-3 rounded-lg mt-2">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Amount:</span>
                <span>${amount ? parseFloat(amount).toFixed(2) : '0.00'}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Fee:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t">
                <span>Total:</span>
                <span>${amount ? parseFloat(amount).toFixed(2) : '0.00'}</span>
              </div>
            </div>
          </div>
        )}

        {action === 'topup' && (
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleTopup} className="bg-ucash-dark">
              Top Up
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CardActionModal;
