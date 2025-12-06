"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/fadeInUp";

interface WorkExperience {
  logo: string;
  alt: string;
}

const workExperience: WorkExperience[] = [
  {
    logo: "/images/companies/ssn-white.png",
    alt: "Sport Science Network logo",
  },
  {
    logo: "/images/companies/texans.png",
    alt: "Houston Texans logo",
  },
  {
    logo: "/images/companies/penn-state.png",
    alt: "Penn State University logo",
  },
  {
    logo: "/images/companies/virginia-tech.png",
    alt: "Virginia Tech logo",
  },
  {
    logo: "/images/companies/us-ski-snowboard.png",
    alt: "U.S. Ski and Snowboard logo",
  },
  {
    logo: "/images/companies/south-carolina.png",
    alt: "University of South Carolina logo",
  },
  {
    logo: "/images/companies/wake-forest.png",
    alt: "Wake Forest University logo",
  },
  {
    logo: "/images/companies/geronimo.png",
    alt: "United States Army logo",
  }
];

export default function WorkExperienceSlider() {
  return (
    <motion.section {...fadeInUp} className="w-full py-16 overflow-hidden bg-white dark:bg-background">
      <div className="container w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Proven Track Record Across Elite Teams & Institutions
        </h2>
        <Marquee speed={60} gradient={false} pauseOnHover={true}>
          {workExperience.map((experience: WorkExperience, index: number) => (
            <div key={index} className="mx-8 flex items-center justify-center py-2 md:py-4">
              <img
                src={experience.logo}
                alt={experience.alt}
                className="h-18 md:h-30 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] brightness-110"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
}
