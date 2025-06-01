import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.scss'; // Import global SASS file

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
  );
}