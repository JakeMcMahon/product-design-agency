import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { InfoSection } from "./sections/InfoSection/InfoSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { MainWrapperSection } from "./sections/MainWrapperSection/MainWrapperSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { SectionWrapper } from "./sections/SectionWrapper/SectionWrapper";
import { TimelineSection } from "./sections/TimelineSection/TimelineSection";
import { TimelineWrapperSection } from "./sections/TimelineWrapperSection/TimelineWrapperSection";
import { VSLSection } from "./sections/VSLSection/VSLSection";
import { ClientResultsSection } from "./sections/ClientResultsSection/ClientResultsSection";
import { LeadMagnetsSection } from "./sections/LeadMagnetsSection/LeadMagnetsSection";
import { BenefitsSection } from "./sections/BenefitsSection/BenefitsSection";

export const Desktop = (): JSX.Element => {
  return (
    <main className="bg-white min-h-screen w-full" data-model-id="2:4">
      <div className="bg-white w-full flex flex-col px-4 sm:px-6 lg:px-8 xl:px-0">
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <HeaderSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] mt-20">
          <VSLSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms] mt-20">
          <ClientResultsSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <MainContentSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <TimelineSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mt-20">
          <SectionWrapper />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <PricingSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <FeaturesSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <TimelineWrapperSection />
        </section>
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1300ms]">
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
