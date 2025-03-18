import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  CheckCircle,
  CreditCard,
  Bell,
  ShieldAlert,
  Clock,
  Filter,
  Trash2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ViewAllNotificationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ViewAllNotificationsModal: React.FC<ViewAllNotificationsModalProps> = ({
  open,
  onOpenChange,
}) => {
  const notifications = [
    {
      id: 1,
      title: 'Card Top-up Successful',
      message: 'Your card has been topped up with $1,000',
      time: '2 hours ago',
      type: 'success',
      read: true,
    },
    {
      id: 2,
      title: 'Welcome to UCash!',
      message: 'Thank you for joining UCash. Start exploring our features!',
      time: '1 day ago',
      type: 'info',
      read: true,
    },
    {
      id: 3,
      title: 'Security Alert',
      message: 'New login detected from Los Angeles. Is this you?',
      time: '2 days ago',
      type: 'warning',
      read: false,
    },
    {
      id: 4,
      title: 'Budget Reminder',
      message: "You've reached 80% of your Entertainment budget this month.",
      time: '4 days ago',
      type: 'warning',
      read: false,
    },
    {
      id: 5,
      title: 'Payment Successful',
      message: 'Your payment of $85.75 to Restaurant XYZ was successful.',
      time: '1 week ago',
      type: 'success',
      read: true,
    },
    {
      id: 6,
      title: 'Promotion',
      message:
        'Special Offer: Get 2% cashback on all transactions this weekend!',
      time: '1 week ago',
      type: 'info',
      read: true,
    },
    {
      id: 7,
      title: 'Account Verification',
      message:
        'Your account has been successfully verified. Enjoy full features!',
      time: '2 weeks ago',
      type: 'success',
      read: true,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>All Notifications</DialogTitle>
          <div className="flex justify-between items-center mt-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="read">Read</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </DialogHeader>

        <div className="flex justify-end mb-2 gap-2">
          <Button variant="outline" size="sm">
            <CheckCircle size={14} className="mr-1" />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            <Filter size={14} className="mr-1" />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 size={14} className="mr-1" />
            Clear All
          </Button>
        </div>

        <div className="overflow-y-auto flex-1 -mx-6 px-6">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg ${
                  notification.read
                    ? 'bg-gray-50'
                    : 'bg-blue-50 border-l-4 border-blue-500'
                }`}
              >
                <div className="flex">
                  <div className="mr-3">
                    {notification.type === 'success' && (
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle size={20} className="text-green-600" />
                      </div>
                    )}
                    {notification.type === 'warning' && (
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <ShieldAlert size={20} className="text-yellow-600" />
                      </div>
                    )}
                    {notification.type === 'info' && (
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Bell size={20} className="text-blue-600" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3
                        className={`font-medium ${
                          notification.read ? 'text-gray-800' : 'text-gray-900'
                        }`}
                      >
                        {notification.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={12} className="mr-1" />
                        {notification.time}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewAllNotificationsModal;
