import '@/app/globals.css';
import { Toaster } from 'sonner';
import { siteMetadata } from '@/lib/config/metadata';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

// We don’t need the Inter font anymore since we’re using Comic Neue
// So we’ll remove this line: const inter = Inter({ subsets: ['latin'] });

// Use the comprehensive metadata configuration
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add the Comic Neue font from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-comic">
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}