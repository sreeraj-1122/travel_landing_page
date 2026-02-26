import '@/styles/globals.scss';

export const metadata = {
  title: 'Jadoo',
  description: 'Book your trip in minutes, get full control for much longer. Best destinations around the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
