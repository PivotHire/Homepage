import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './globals.scss'; // Import global SASS file

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <NavBar />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
  );
}