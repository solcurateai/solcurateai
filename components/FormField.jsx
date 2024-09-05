import React from 'react';
import { cn } from '@/lib/utils'; // If you have a utility function for class names
import { Input } from './ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const FormField = ({
  label,
  id,
  type = 'text', // Default input type
  placeholder,
  value,
  onChange,
  errorMessage,
  required = false,
  options = [], // For select dropdown
  as = 'input', // 'input', 'textarea', or 'select'
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-bold text-white mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {as === 'select' ? (
        <Select
            id={id}
            name={id}
            onChange={onChange}
            required={required}
            {...props}
        >
            <SelectTrigger className={cn(
            'w-full p-2 bg-black-5 h-[52px] text-sm rounded-md shadow-sm',
            errorMessage && 'border-red-500' // Highlight border if there's an error
            )}>
            <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>

      ) : as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={cn(
            'block w-full p-2 bg-black-5 h-[52px] text-sm rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 resize-none h-24',
            errorMessage && 'border-red-500' // Highlight border if there's an error
          )}
          {...props}
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={cn(
            'bg-black-5 block w-full h-[52px] text-sm p-2 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500',
            errorMessage && 'border-red-500' // Highlight border if there's an error
          )}
          {...props}
        />
      )}

      {errorMessage && <p className="mt-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default FormField;
