import { FormEvent } from 'react';

export const handleFormSubmit = (
  e: FormEvent<HTMLFormElement>,
  formData: Record<string, string>,
  onSuccess?: () => void,
  onError?: (error: Error) => void
): void => {
  e.preventDefault();
  
  // Log form submission (in a real app, this would be an API call)
  console.log('Form submitted with data:', formData);
  
  // Simulate successful submission
  setTimeout(() => {
    if (onSuccess) {
      onSuccess();
    }
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  }, 1000);
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}; 