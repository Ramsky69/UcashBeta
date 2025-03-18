import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';

interface BudgetDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BudgetDetailsModal: React.FC<BudgetDetailsModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [totalBudget, setTotalBudget] = useState(6000);
  const [allocations, setAllocations] = useState({
    housing: 40,
    food: 20,
    transportation: 15,
    utilities: 10,
    entertainment: 10,
    others: 5,
  });
  const { toast } = useToast();

  const handleAllocationChange = (
    category: keyof typeof allocations,
    value: number[]
  ) => {
    const newAllocations = { ...allocations, [category]: value[0] };

    // Ensure total is 100%
    const total = Object.values(newAllocations).reduce(
      (sum, val) => sum + val,
      0
    );

    if (total > 100) {
      // Adjust other categories proportionally
      const excess = total - 100;
      const otherCategories = Object.keys(newAllocations).filter(
        (key) => key !== category
      ) as Array<keyof typeof allocations>;

      const totalOther = otherCategories.reduce(
        (sum, key) => sum + newAllocations[key],
        0
      );

      otherCategories.forEach((key) => {
        const proportion = newAllocations[key] / totalOther;
        newAllocations[key] = Math.max(
          0,
          Math.round(newAllocations[key] - excess * proportion)
        );
      });
    }

    setAllocations(newAllocations);
  };

  const handleSave = () => {
    toast({
      title: 'Budget updated',
      description: 'Your budget preferences have been saved.',
    });
    onOpenChange(false);
  };

  const calculateAmount = (percentage: number) => {
    return Math.round((percentage / 100) * totalBudget);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Budget Details</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div>
            <Label htmlFor="total-budget">Total Monthly Budget</Label>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-lg">$</span>
              <Input
                id="total-budget"
                type="number"
                value={totalBudget}
                onChange={(e) => setTotalBudget(Number(e.target.value))}
                className="text-lg"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Budget Allocation</h3>

            {Object.entries(allocations).map(([category, percentage]) => (
              <div key={category} className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor={`slider-${category}`} className="capitalize">
                    {category}
                  </Label>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">
                      ${calculateAmount(percentage)}
                    </span>
                    <span className="ml-1">({percentage}%)</span>
                  </div>
                </div>
                <Slider
                  id={`slider-${category}`}
                  min={0}
                  max={100}
                  step={1}
                  value={[percentage]}
                  onValueChange={(value) =>
                    handleAllocationChange(
                      category as keyof typeof allocations,
                      value
                    )
                  }
                  className="py-2"
                />
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Allocation Total:</span>
              <span className="font-medium">
                {Object.values(allocations).reduce((sum, val) => sum + val, 0)}%
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              {
                Object.entries(allocations).reduce(
                  (acc, [category, percentage], index) => {
                    const colors = [
                      'bg-blue-500',
                      'bg-green-500',
                      'bg-yellow-500',
                      'bg-purple-500',
                      'bg-red-500',
                      'bg-pink-500',
                    ];
                    const width = `${percentage}%`;

                    acc.bars.push(
                      <div
                        key={category}
                        className={`h-full ${colors[index % colors.length]}`}
                        style={{
                          width,
                          marginLeft: index === 0 ? 0 : undefined,
                        }}
                      />
                    );

                    return acc;
                  },
                  { bars: [] as React.ReactNode[] }
                ).bars
              }
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Recommendations</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• 50-30-20 Rule: 50% needs, 30% wants, 20% savings</li>
              <li>• Lower your entertainment budget to increase savings</li>
              <li>• Aim to save at least 15% of your income</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-ucash-dark">
            Save Budget
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetDetailsModal;
