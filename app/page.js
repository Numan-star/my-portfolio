// app/page.js

import Services from './components/Services';
import ProfileCard from './components/ProfileCard';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';


export default function Home() {
  return (
    <div>
      <main className="">
        <ProfileCard />
        <Services />
        <ContactSection/>
        <Testimonials/>
      </main>
    </div>
  );
}
