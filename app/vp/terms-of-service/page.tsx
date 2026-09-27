import path from 'node:path';
import TextPage from '@/components/ui/TextPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VP Social Grw - Terms of Service',
};

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), 'public', 'vp', 'terms-of-service.md');

  return <TextPage filePath={filePath} />;
}