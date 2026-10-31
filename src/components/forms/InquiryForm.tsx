import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { PROJECT_TYPES } from '@/data/siteContent';
import {
  submitInquiry,
  validateInquiry,
  type InquiryErrors,
  type InquiryInput,
  type InquiryKind,
} from '@/lib/inquiries';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_VALUES: InquiryInput = { name: '', email: '', phone: '', service: '', message: '' };

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:outline-none focus:ring-4';
const inputClass = `${inputBase} border-ink-200 focus:border-brand-500 focus:ring-brand-500/20`;
const inputErrorClass = `${inputBase} border-error-600 focus:border-error-600 focus:ring-error-600/20`;

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink-800">
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-error-700">{error}</p>}
    </div>
  );
}

interface InquiryFormProps {
  kind: InquiryKind;
}

export default function InquiryForm({ kind }: InquiryFormProps) {
  const [values, setValues] = useState<InquiryInput>(EMPTY_VALUES);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverError, setServerError] = useState('');

  const isQuote = kind === 'quote';

  const updateField =
    (field: keyof InquiryInput) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((previous) => ({ ...previous, [field]: event.target.value }));
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    };

  const inputFor = (field: keyof InquiryErrors) => (errors[field] ? inputErrorClass : inputClass);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validateInquiry(kind, values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');
    setServerError('');
    try {
      await submitInquiry(kind, values);
      setValues(EMPTY_VALUES);
      setStatus('success');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl bg-success-50 p-6">
        <CheckCircle2 className="h-10 w-10 text-success-700" />
        <h3 className="text-xl font-extrabold text-ink-900">Thank you for reaching out!</h3>
        <p className="leading-relaxed text-ink-700">
          {isQuote
            ? 'We received your request. We will be in touch to discuss your project and schedule a convenient time for a free estimate.'
            : 'We received your message. We will be in touch to discuss your project and arrange a convenient appointment.'}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-ink-900 underline decoration-brand-500 decoration-2 underline-offset-4 hover:text-brand-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';
  const serviceField = (
    <Field id={`${kind}-service`} label="Project type">
      <select
        id={`${kind}-service`}
        value={values.service}
        onChange={updateField('service')}
        className={inputClass}
      >
        <option value="">Select a project type</option>
        {PROJECT_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
        <option value="Other">Something else / not sure yet</option>
      </select>
    </Field>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${kind}-name`} label="Full name" error={errors.name}>
          <input
            id={`${kind}-name`}
            type="text"
            autoComplete="name"
            maxLength={120}
            value={values.name}
            onChange={updateField('name')}
            placeholder="Jane Smith"
            className={inputFor('name')}
          />
        </Field>
        <Field id={`${kind}-email`} label="Email" error={errors.email}>
          <input
            id={`${kind}-email`}
            type="email"
            autoComplete="email"
            maxLength={254}
            value={values.email}
            onChange={updateField('email')}
            placeholder="jane@example.com"
            className={inputFor('email')}
          />
        </Field>
      </div>

      {isQuote ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={`${kind}-phone`} label="Phone" error={errors.phone}>
            <input
              id={`${kind}-phone`}
              type="tel"
              autoComplete="tel"
              maxLength={40}
              value={values.phone}
              onChange={updateField('phone')}
              placeholder="Your phone number"
              className={inputFor('phone')}
            />
          </Field>
          {serviceField}
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={`${kind}-phone`} label="Phone (optional)">
            <input
              id={`${kind}-phone`}
              type="tel"
              autoComplete="tel"
              maxLength={40}
              value={values.phone}
              onChange={updateField('phone')}
              placeholder="Your phone number"
              className={inputClass}
            />
          </Field>
          {serviceField}
        </div>
      )}

      <Field
        id={`${kind}-message`}
        label={isQuote ? 'Project details (optional)' : 'How can we help?'}
        error={errors.message}
      >
        <textarea
          id={`${kind}-message`}
          rows={isQuote ? 3 : 5}
          maxLength={2000}
          value={values.message}
          onChange={updateField('message')}
          placeholder={isQuote ? 'Tell us a little about the project' : 'Share your questions or project details'}
          className={`${inputFor('message')} resize-y`}
        />
      </Field>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-lg bg-error-50 p-4 text-sm text-error-700">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {submitting ? 'Sending...' : isQuote ? 'Request a Free Estimate' : 'Send Message'}
      </button>
    </form>
  );
}
