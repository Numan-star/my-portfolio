// app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
<meta name="google-site-verification" content="onII4hxxp8M1XmPi1go7juM5FTCXugQWkFdy7F5i4cU" />
export const metadata = {
  title: 'Developer Numan - Software Engineer & Web Developer',
  description: 'I am Numan, a passionate software engineer skilled in crafting stellar web experiences using Laravel, Next.js, and React.',
  keywords: 'Numan, Software Engineer, Web Developer, Laravel, Next.js, React, Full Stack Developer, PHP, JavaScript',
  author: 'Numan',
  openGraph: {
    title: 'Developer Numan - Software Engineer',
    description: 'Creating stellar web experiences using the latest technologies like Laravel, Next.js, and React.',
    url: 'https://developernuman.vercel.app/', 
    image: 'https://developernuman.vercel.app/numan.jpeg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Numan894565792',
    title: 'Developer Numan - Software Engineer',
    description: 'Skilled in Laravel, Next.js, and React, delivering top-notch web experiences.',
    image: 'https://developernuman.vercel.app/numan.jpeg',
  },
  verification: {
    google: 'onII4hxxp8M1XmPi1go7juM5FTCXugQWkFdy7F5i4cU',
  }
};


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
