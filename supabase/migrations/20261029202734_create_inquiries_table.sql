/*
# Create inquiries table for quote requests and contact messages

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `kind` (text): either 'quote' (from the Request a Quote form) or 'contact' (from the contact page)
  - `name` (text, required)
  - `email` (text, required)
  - `phone` (text, optional)
  - `service` (text, optional): the service the visitor is interested in
  - `message` (text, optional)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `inquiries`.
- Grant INSERT only to `anon` and `authenticated`. Visitors can submit forms but cannot read, edit, or delete submissions through the website.
- The insert policy is intentionally public because this is a public contact form with no sign-in.

3. Important Notes
- Length and value checks prevent empty or oversized submissions.
- Submissions are read by the business owner from the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL CHECK (kind IN ('quote', 'contact')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  service text CHECK (service IS NULL OR char_length(service) <= 80),
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON inquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
