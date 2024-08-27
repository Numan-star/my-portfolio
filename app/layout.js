// app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';
import { NextSeo } from 'next-seo';
import './globals.css'; // Import global styles

export default function Layout({ children }) {
  return (
    <>
      <NextSeo
        title="Numan's Portfolio"
        description="Welcome to Numan's Portfolio. Explore my projects, skills, and contact information."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://your-website-url.com',
          site_name: "Numan's Portfolio",
          images: [
            {
              url: 'https://your-website-url.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Numan\'s Portfolio',
            },
          ],
        }}
        twitter={{
          handle: '@Numan_star',
          site: '@Numan_star',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
