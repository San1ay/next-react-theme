// layout.tsx
import './globals.css';
import { ColorProvider } from './ColorContext';
import React from 'react';
import { ThemeWrapper } from "./ThemeWrapper";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ColorProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ColorProvider>
      </body>
    </html>
  );
}
