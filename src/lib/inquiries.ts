import { supabase } from '@/lib/supabase';

export type InquiryKind = 'quote' | 'contact';

export interface InquiryInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiry(kind: InquiryKind, values: InquiryInput): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (kind === 'quote' && !values.phone.trim()) {
    errors.phone = 'Please enter a phone number so we can reach you.';
  }
  if (kind === 'contact' && !values.message.trim()) {
    errors.message = 'Please tell us how we can help.';
  }

  return errors;
}

export async function submitInquiry(kind: InquiryKind, values: InquiryInput): Promise<void> {
  const { error } = await supabase.from('inquiries').insert({
    kind,
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim() || null,
    service: values.service || null,
    message: values.message.trim() || null,
  });

  if (error) {
    throw new Error('We could not send your request. Please try again or call us directly.');
  }
}
