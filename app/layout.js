// app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'; // Import global styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
