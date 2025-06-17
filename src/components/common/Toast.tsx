import React, { useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface ToastProps {
  message: string;
  icon?: LucideIcon;
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  icon: Icon, 
  duration = 3000, 
  onClose 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-off-black text-warm-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-fade-in flex items-center">
      {Icon && <Icon className="w-5 h-5 mr-3 text-warm-white" />}
      <p>{message}</p>
    </div>
  );
};

export default Toast; 