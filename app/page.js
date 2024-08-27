// app/page.js
import Services from './components/Services';
import ProfileCard from './components/ProfileCard';
import Testimonials from './components/Testimonials';


export default function Home() {
  return (
    <div>
      <main className="">
        <ProfileCard />
        <Services />
        <Testimonials/>
      </main>
    </div>
  );
}
