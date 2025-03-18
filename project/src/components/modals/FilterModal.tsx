import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: (filters: any) => void;
  type: 'expenses' | 'transactions' | 'notifications';
}

const FilterModal: React.FC<FilterModalProps> = ({
  open,
  onOpenChange,
  onApply,
  type,
}) => {
  const [dateRange, setDateRange] = useState('this-month');
  const [categories, setCategories] = useState<string[]>([]);

  const categoryOptions =
    type === 'expenses'
      ? [
          'Housing',
          'Transportation',
          'Food',
          'Utilities',
          'Entertainment',
          'Others',
        ]
      : type === 'transactions'
      ? ['Transfer', 'Gift Code', 'Purchase', 'Deposit', 'Withdrawal']
      : ['System', 'Account', 'Security', 'Promotions'];

  const handleCategoryToggle = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const handleApply = () => {
    onApply({
      dateRange,
      categories,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Filter{' '}
            {type === 'expenses'
              ? 'Expenses'
              : type === 'transactions'
              ? 'Transactions'
              : 'Notifications'}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="date-range">Date Range</Label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger id="date-range">
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Categories</Label>
            <div className="grid grid-cols-2 gap-2">
              {categoryOptions.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={categories.includes(category)}
                    onCheckedChange={() => handleCategoryToggle(category)}
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm font-normal"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {type === 'transactions' && (
            <div className="grid gap-2">
              <Label htmlFor="amount-range">Amount Range</Label>
              <div className="flex items-center space-x-2">
                <Select defaultValue="any">
                  <SelectTrigger id="amount-range" className="w-full">
                    <SelectValue placeholder="Select amount range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any amount</SelectItem>
                    <SelectItem value="under-100">Under $100</SelectItem>
                    <SelectItem value="100-500">$100 - $500</SelectItem>
                    <SelectItem value="500-1000">$500 - $1000</SelectItem>
                    <SelectItem value="over-1000">Over $1000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleApply} className="bg-ucash-dark">
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
