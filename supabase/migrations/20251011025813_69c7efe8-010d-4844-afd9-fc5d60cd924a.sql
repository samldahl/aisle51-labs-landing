-- Create a table for contact emails
CREATE TABLE public.contact_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_emails ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert their email
CREATE POLICY "Anyone can submit contact emails" 
ON public.contact_emails 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading (admin only)
CREATE POLICY "No public read access" 
ON public.contact_emails 
FOR SELECT 
USING (false);