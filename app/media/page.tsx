import { Metadata } from "next";
import { ArticleCard, OtherMediaCard, PodcastCard } from "@/components/media-cards";
import { podcasts, articles, otherMedia } from "@/data/mediaData";

export const metadata: Metadata = {
  title: "Media",
  description: "Explore Dr. Marc Lewis's podcast interviews, research publications, articles, and media appearances on human performance, athlete monitoring, NFL sport science, and performance optimization. Featured on Iron Culture, Science for Sport, and Strength Coach Network.",
  keywords: [
    "Dr. Marc Lewis podcast",
    "sport science podcast",
    "NFL sport science",
    "athlete monitoring research",
    "human performance articles",
    "sport science publications",
    "Iron Culture podcast",
    "Science for Sport podcast",
    "Strength Coach Network",
    "sport science research",
    "performance optimization articles",
    "exercise physiology research",
    "sport science handbook",
    "GPS metrics football",
    "training load monitoring"
  ],
  alternates: {
    canonical: '/media',
  },
  openGraph: {
    title: "Media & Insights | Dr. Marc Lewis Podcasts, Articles & Research",
    description: "Explore Dr. Marc Lewis's podcast interviews, research publications, and articles on human performance, athlete monitoring, and NFL sport science.",
    url: "https://drmarclewis.com/media",
    images: [
      {
        url: "/images/all-images/marc-headshot-texans-main.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Marc Lewis - Media & Insights",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Insights | Dr. Marc Lewis",
    description: "Podcast interviews, research publications, and articles on human performance and NFL sport science.",
  },
};

export default function Media() {
  return (
    <>
      <section className="py-12">
        <div className="container w-full space-y-16">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Media & Insights</h1>
            <p className="text-lg text-muted-foreground">
              Explore Dr. Marc Lewis's contributions to human performance through podcast interviews,
              research publications, and feature articles. Discover insights on high-performance
              training, athlete monitoring, and the latest advancements in human performance.
            </p>
          </div>

          {/* Podcast Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Podcasts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <PodcastCard key={index} podcast={podcast} />
              ))}
            </div>
          </div>

          {/* Articles & Publications Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Articles & Publications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          </div>

          {/* Other Media Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Other Media</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherMedia.map((media, index) => (
                <OtherMediaCard key={index} otherMedia={media} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
