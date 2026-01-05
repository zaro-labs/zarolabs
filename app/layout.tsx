import './styles/styles.css';

export const metadata = {
  title: 'ZaroLabs - Tech. Reliability. Future.',
  description: 'Web, Mobile, AI & Mixed Reality specialists.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}