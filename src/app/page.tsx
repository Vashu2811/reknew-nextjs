import HomePage from './components/Home';
import type { Metadata } from 'next';

export const metadata:Metadata = {
    title: 'Home | ReKnew AI Solutions',
    description:
      'ReKnew helps organizations reduce inefficiencies, automate workflows, and unlock growth opportunities using enterprise AI.',
    keywords: ['ReKnew', 'AI Solutions', 'Enterprise Automation', 'Workflow Automation'],
    openGraph: {
      title: 'ReKnew AI Solutions',
      description:
        'Discover ReKnew’s AI-powered tools and solutions for enterprise workflow automation and transformation.',
      url: 'https://reknew.ai/about',
    },
  };

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
