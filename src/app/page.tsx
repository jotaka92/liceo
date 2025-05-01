import { WelcomeSection } from '@/components/welcome-section';
import { CourseListing } from '@/components/course-listing';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <WelcomeSection />
      <CourseListing />
      <ContactSection />
    </div>
  );
}
