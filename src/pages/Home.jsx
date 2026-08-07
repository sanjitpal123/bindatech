import React from 'react';
import MetaTags from '../components/common/MetaTags';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessTimeline from '../components/home/ProcessTimeline';
import IndustrySolutions from '../components/home/IndustrySolutions';
import SaasSection from '../components/home/SaasSection';
import ProjectsPreview from '../components/home/ProjectsPreview';
import Testimonials from '../components/home/Testimonials';
import HomeCta from '../components/home/HomeCta';

export default function Home() {
  return (
    <>
      <MetaTags
        title="BindaTech | Mobile App, Web & SaaS Development Company"
        description="BindaTech builds modern mobile apps, web applications, websites and scalable SaaS products for businesses. Based in Kolkata, West Bengal, India."
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessTimeline />
      <IndustrySolutions />
      <SaasSection />
      <ProjectsPreview />
      <Testimonials />
      <HomeCta />
    </>
  );
}
