import type { ContactFormData, ContactFormErrors } from '../types';

/**
 * Validate contact form data and return an errors object.
 * Returns an empty object if all fields are valid.
 */
export function validateContactForm(
  data: ContactFormData
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = 'Vui lòng nhập họ tên ít nhất 2 ký tự.';
  }

  if (!/^\S+@\S+\.\S+$/.test(data.email.trim())) {
    errors.email = 'Email chưa hợp lệ.';
  }

  const cleanPhone = data.phone.trim().replace(/\s/g, '');
  if (!/^(0|\+84)[0-9]{8,10}$/.test(cleanPhone)) {
    errors.phone =
      'Số điện thoại nên bắt đầu bằng 0 hoặc +84 và có 9–11 chữ số.';
  }

  return errors;
}

/**
 * Check if errors object is empty (no validation errors).
 */
export function isFormValid(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
