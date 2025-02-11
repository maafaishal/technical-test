import Box from "@mui/material/Box";

import type { Metadata } from "next";

import { Providers } from "./Providers";
import { ErrorSnackbar } from "@/components/ErrorSnackbar";

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
        <Providers>
          <Box
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
              minHeight: "100vh",
            }}
          >
            {children}
            <ErrorSnackbar />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
