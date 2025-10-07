import React from "react";
import { ContentSection } from "../screens/Desktop/sections/ContentSection/ContentSection";
import { FeaturesSection } from "../screens/Desktop/sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "../screens/Desktop/sections/FooterSection/FooterSection";
import { HeaderSection } from "../screens/Desktop/sections/HeaderSection/HeaderSection";
import { InfoSection } from "../screens/Desktop/sections/InfoSection/InfoSection";
import { MainContentSection } from "../screens/Desktop/sections/MainContentSection/MainContentSection";
import { MainWrapperSection } from "../screens/Desktop/sections/MainWrapperSection/MainWrapperSection";
import { PricingSection } from "../screens/Desktop/sections/PricingSection/PricingSection";
import { SectionWrapper } from "../screens/Desktop/sections/SectionWrapper/SectionWrapper";
import { TimelineSection } from "../screens/Desktop/sections/TimelineSection/TimelineSection";
import { TimelineWrapperSection } from "../screens/Desktop/sections/TimelineWrapperSection/TimelineWrapperSection";
import { VSLSection } from "../screens/Desktop/sections/VSLSection/VSLSection";
import { ClientResultsSection } from "../screens/Desktop/sections/ClientResultsSection/ClientResultsSection";
import { LeadMagnetsSection } from "../screens/Desktop/sections/LeadMagnetsSection/LeadMagnetsSection";
import { BenefitsSection } from "../screens/Desktop/sections/BenefitsSection/BenefitsSection";
import { AboutSection } from "../screens/Desktop/sections/AboutSection/AboutSection";
import { ProblemSolutionSection } from "../screens/Desktop/sections/ProblemSolutionSection/ProblemSolutionSection";
import { OfferSection } from "../screens/Desktop/sections/OfferSection/OfferSection";
import { FrameworksSection } from "../screens/Desktop/sections/FrameworksSection/FrameworksSection";
import { GuaranteesSection } from "../screens/Desktop/sections/GuaranteesSection/GuaranteesSection";

export const ProductDesignAgency = (): JSX.Element => {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden" data-model-id="2:4">
      <div className="bg-white w-full flex flex-col">
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <HeaderSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] mt-20">
          <ProblemSolutionSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:125ms]">
          <OfferSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms] mt-20">
          <FrameworksSection />
        </section>
        <section id="cases" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] mt-20">
          <ClientResultsSection />
        </section>
        <section id="process" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:250ms]">
          <MainContentSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <TimelineSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mt-20">
          <SectionWrapper />
        </section>
        <section id="pricing" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <PricingSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <FeaturesSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <TimelineWrapperSection />
        </section>
        <section id="outcomes" className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1300ms]">
          <BenefitsSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <MainWrapperSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1500ms] mt-20">
          <ContentSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          <LeadMagnetsSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1650ms]">
          <AboutSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1675ms]">
          <GuaranteesSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1700ms]">
          <InfoSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
          <FooterSection />
        </section>
      </div>
    </main>
  );
};