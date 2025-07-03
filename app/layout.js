import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export const metadata = {
  title: 'Susantha Perea - Software Engineer Portfolio',
  description: 'Susantha Perea’s portfolio showcasing software development expertise, projects, and skills in web and app development.',
  keywords: ['Susantha Perea', 'software engineer', 'portfolio', 'web development', 'mobile app development', 'full-stack developer', 'React', 'Node.js', 'C#', 'MySQL', 'MongoDB'],
  authors: [{ name: 'Susantha Perea' }],
  openGraph: {
    title: 'Susantha Perea - Software Engineer Portfolio',
    description: 'Explore Susantha Perea’s portfolio to see projects and expertise in software engineering, web development, and mobile app development.',
    url: 'https://susanthaperera.site',
    type: 'website',
    images: '/images/og-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Susantha Perea - Software Engineer Portfolio',
    description: 'Explore Susantha Perea’s portfolio to see projects and expertise in software engineering, web development, and mobile app development.',
    images: '/images/og-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className} style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}