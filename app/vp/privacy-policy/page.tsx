import path from 'node:path';
import TextPage from '@/components/ui/TextPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VP Social Grw - Privacy Policy',
};

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), 'public', 'vp', 'privacy-policy.md');

  return <TextPage filePath={filePath} />;
}