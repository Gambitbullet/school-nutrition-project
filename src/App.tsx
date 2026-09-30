import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Standards from '@/components/Standards';
import MenuGallery from '@/components/MenuGallery';
import Changes from '@/components/Changes';
import Tips from '@/components/Tips';
import Quiz from '@/components/Quiz';
import ProjectInfo from '@/components/ProjectInfo';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Standards />
        <MenuGallery />
        <Changes />
        <Tips />
        <Quiz />
        <ProjectInfo />
      </main>
      <Footer />
    </div>
  );
}
