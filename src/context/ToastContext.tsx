import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import Toast from '../components/common/Toast';

interface ToastContextProps {
  showToast: (message: string, icon?: LucideIcon, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<{
    message: string;
    icon?: LucideIcon;
    duration?: number;
    visible: boolean;
  }>({
    message: '',
    visible: false,
  });

  const showToast = (message: string, icon?: LucideIcon, duration?: number) => {
    setToast({
      message,
      icon,
      duration,
      visible: true,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.visible && (
        <Toast
          message={toast.message}
          icon={toast.icon}
          duration={toast.duration}
          onClose={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider; 