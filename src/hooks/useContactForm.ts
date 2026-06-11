import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormState {
  values: ContactFormValues;
  errors: Partial<ContactFormValues>;
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export function useContactForm(onSuccess?: () => void) {
  const [state, setState] = useState<ContactFormState>({
    values: initialValues,
    errors: {},
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      errors: { ...prev.errors, [name]: undefined },
      success: false,
      error: null
    }));
  };

  const validate = (): boolean => {
    const errors: Partial<ContactFormValues> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!state.values.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!state.values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(state.values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!state.values.message.trim()) {
      errors.message = 'Message is required';
    }

    setState((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState((prev) => ({ ...prev, loading: true, error: null, success: false }));

    try {
      // Simulate realistic API network request delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setState((prev) => ({
        ...prev,
        loading: false,
        success: true,
        values: initialValues
      }));

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: 'Something went wrong. Please try again later.'
      }));
    }
  };

  return {
    values: state.values,
    errors: state.errors,
    loading: state.loading,
    success: state.success,
    error: state.error,
    handleChange,
    handleSubmit
  };
}
