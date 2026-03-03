import { Podcast, Article, OtherMedia } from "@/interfaces/media-interfaces";

export const podcasts: Podcast[] = [
  {
    title: "The Physical Preparation Podcast",
    episode: "Marc Lewis on Overcoming Adversity, Data-Driven Insights, and Enhancing Sports Science",
    description: "Practical insights on applying sports science, from budget solutions to linking technology with athlete support.",
    image: "/images/podcasts/physical-preparation-podcast.png",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=-kkwMNDkGUo", icon: "▶️" },
      { platform: "Robertson Training Systems", url: "https://robertsontrainingsystems.com/blog/marc-lewis-sports-science-podcast/", icon: "🎧" },
    ]
  },
  {
    title: "Universal Speed Rating",
    episode: "Applied Sports Science Deep Dive with Marc Lewis, Director of Sports Science at Houston Texas",
    description: "Les Spellman interviews Dr. Marc Lewis on applying sport science in elite performance.",
    image: "/images/podcasts/applied-sport-science-deep-dive.jpg",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=uiHZ2H1NKck", icon: "▶️" },
    ],
  },
  {
    title: "Iron Culture Podcast",
    episode: "Ep 344 - Sports Science In Elite Athletics (ft. Dr. Marc Lewis)",
    description: "Dr. Lewis discusses sports science applications in elite athletics.",
    image: "/images/podcasts/iron-culture.jpg",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=IXd0-4jHfzs", icon: "▶️" },
      { platform: "Spotify", url: "https://creators.spotify.com/pod/profile/massresearchreview/episodes/Ep-344---Sports-Science-In-Elite-Athletics-ft--Dr--Marc-Lewis-e37rej4", icon: "🎧" },
    ],
  },
  {
    title: "Science for Sport",
    episode: "287: Data With Purpose: How the Houston Texans Use Sports Science to Drive Performance",
    description: "Deep dive into how the Houston Texans leverage sports science and data analytics.",
    image: "/images/podcasts/science-for-sport.jpg",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=V8B1MTHpt7s", icon: "▶️" },
    ],
  },
  {
    title: "Strength Coach Network",
    episode: "The Future of High Performance in Sport",
    description: "Improve Athlete Performance INSTANTLY Using This System of Evaluation.",
    image: "/images/podcasts/strength-coach-network.jpg",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=d7OmHHxHhY4", icon: "▶️" },
      { platform: "Poddtoppen", url: "https://poddtoppen.se/podcast/1688781157/cheeky-mid-weeky/dr-marc-lewis-future-of-high-performance-in-sport", icon: "▶️" },
    ],
  },

  {
    title: "Sportsmith",
    episode: "Maximising performance, managing fatigue and optimising recovery in American Football",
    description: "Practical strategies for performance optimization and recovery management.",
    image: "/images/podcasts/pacey-performance.webp",
    links: [
      { platform: "Sportsmith", url: "https://www.sportsmith.co/listen/maximising-performance-managing-fatigue-and-optimising-recovery-in-american-football/", icon: "▶️" },
    ],
  },
];

export const articles: Article[] = [
  {
    title: "Sport Science Handbook",
    description: "Comprehensive guide for evidence-based decision-making in sport science.",
    link: "https://www.amazon.com/dp/B0G238WXJD",
    type: "book",
    image: "/images/other-media/ssh-cover.jpg",
  },
  {
    title: "Which tool or piece of equipment has provided you with the highest return on investment over the past 12 months?",
    publication: "Sportsmith",
    description: "Expert insights on cost-effective equipment and tools for high-performance training environments.",
    link: "https://www.sportsmith.co/articles/which-tool-or-piece-of-equipment-has-provided-you-with-the-highest-return-on-investment-over-the-past-12-months/",
    type: "article",
    image: "/images/articles/sportsmith1.webp",
  },
  {
    title: "Monitoring training load and athlete response in team sport",
    publication: "Sportsmith",
    description: "Comprehensive guide to implementing effective training load monitoring systems.",
    link: "https://www.sportsmith.co/videos/monitoring-training-load-and-athlete-response-in-team-sport/",
    type: "article",
    image: "/images/articles/sportsmith2.webp",
  },
  {
    title: "Going deep into GPS metrics for American football",
    publication: "Sportsmith",
    description: "Advanced analysis of GPS technology application in professional football performance.",
    link: "https://www.sportsmith.co/articles/going-deep-into-gps-metrics-for-american-football/",
    type: "article",
    image: "/images/articles/sportsmith3.webp",
  },
  {
    title: "How to Maximize Concurrent Training",
    publication: "Bret Contreras",
    description: "Evidence-based strategies for balancing strength and endurance training adaptations.",
    link: "https://bretcontreras.com/how-to-maximize-concurrent-training/",
    type: "article",
    image: "/images/articles/how-to-maximize-concurrent-training.png",
  },
  {
    title: "Programming Cardio to Support Muscle & Strength Development",
    publication: "Sports Science",
    description: "Practical guidelines for integrating cardiovascular training with strength programs.",
    link: "https://drjohnrusin.com/cardio-to-support-muscle-strength-development/",
    type: "article",
    image: "/images/articles/programming-cardio-to-support-muscle-strength-development.jpg",
  },
  {
    title: "Strength Training and Endurance Athletes",
    publication: "Sports Science",
    description: "Exploring the role and implementation of strength training for endurance performance.",
    link: "https://www.researchgate.net/publication/286937718_Strength_Training_and_Endurance_Athletes",
    type: "article",
    image: "/images/articles/strength-training-endurance-athletes.png",
  },
  {
    title: "Dietary Nitrate Supplementation Improves Exercise Performance and Decreases Blood Pressure in COPD Patients",
    publication: "PMC",
    description: "Research study examining the effects of nitrate supplementation on exercise capacity and cardiovascular health.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4411191/",
    type: "research",
    image: "/images/articles/dietary-nitrate-supplementation.jpg",
  },
  {
    title: "Interobserver Reliability of Quantitative Muscle Sonographic Analysis in the Critically Ill Population",
    publication: "Journal of Ultrasound in Medicine",
    description: "Validation study of muscle ultrasound techniques for clinical assessment.",
    link: "https://onlinelibrary.wiley.com/doi/abs/10.7863/ultra.34.7.1191",
    type: "research",
    image: "/images/articles/wiley-library.png",
  },
];

export const otherMedia: OtherMedia[] = [
  {
    title: "Sport Science Network",
    description: "Online hub for sport science resources and community.",
    link: "https://sportsciencenetwork.com",
    image: "/images/companies/ssn.png",
    type: "Website",
    date: "",
  },
  {
    title: "Marc Lewis - Sportsmith",
    description: "Profile feature on Marc Lewis and his work in human performance.",
    link: "https://www.sportsmith.co/profile/marc-lewis/",
    image: "/images/other-media/sportsmith.jpeg",
    type: "Profile",
    date: "",
  },
  {
    title: "For Marc Lewis, graduation is more than a degree",
    description: "Feature story on Dr. Lewis's journey and philosophy on education and professional development.",
    link: "https://www.theroanokestar.com/2021/05/03/graduation-is-more-than-a-degree-for-va-tech-director-of-sports-science/",
    image: "/images/articles/graduation-is-more-than.jpg",
    type: "Feature",
    date: "May 2021",
  },
  {
    title: "Meet Marc Lewis, NFL Salute to Service 2024 Nominee",
    description: "Recognition of Dr. Lewis's contributions to the NFL community and veteran support.",
    link: "https://www.nfl.com/causes/salute/nominees/2024/texans",
    image: "/images/other-media/marc-salute.webp",
    type: "Recognition",
    date: "2024",
  },
];