export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Providers go here (QueryClient, Toaster, etc.) */}
        {children}
      </body>
    </html>
  );
}