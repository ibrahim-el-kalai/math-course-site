import type { ReactNode } from 'react';
import NavigationTabs from '../components/NavigationTabs';
import { CssBaseline, Container } from '@mui/material';
import './globals.css';

export const metadata = {
  title: 'Math Course',
  description: 'Course materials and interactive content',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <NavigationTabs />
        <Container sx={{ mt: 2 }}>{children}</Container>
      </body>
    </html>
  );
}
