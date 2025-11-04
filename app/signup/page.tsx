import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Sign Up | Avni Project',
  description: 'Get started with Avni today',
};

export default function SignupPage() {
  // Redirect to contact page for now
  redirect('/contact');
}
