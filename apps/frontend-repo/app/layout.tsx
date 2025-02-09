import type { Metadata } from "next";
import Box from "@mui/material/Box";

import { ThemeProvider } from "@/theme/ThemeContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ebuddy Technical test",
  description: "Ebuddy Technical test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Box
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
