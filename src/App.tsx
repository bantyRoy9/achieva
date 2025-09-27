import BannerSection from './components/banner';
import Header from './components/Header';
import AboutSection from './sections/about/about';
import SaleforceAccelerator from './sections/accelerators';
import WhyDemco from './sections/why_demco';
import CaseStudySection from './sections/case_study';
import ServicesSection from './sections/service';
import TestimonialSection from './sections/testimonial';
import BlogSection from './sections/blog';
import ContactFormSection from './sections/contact';
import Footer from './sections/footer';
import Industry from './sections/industry';
import PartnerBadge from './sections/partnerBadge';

function App() {
  return (
    <div className="App">
      <Header/>
      <BannerSection />
      <AboutSection/>
      <ServicesSection/>
      <CaseStudySection/>
      <TestimonialSection/>
      <SaleforceAccelerator/>
      <Industry/>
      <WhyDemco/>
      <BlogSection/>
      <PartnerBadge/>
      <ContactFormSection/>
      <Footer/>
    </div>
  );
}

export default App;