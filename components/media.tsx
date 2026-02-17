"use client";

import { Button } from "@/components/ui/button";
import { podcasts, articles, otherMedia } from "@/data/mediaData";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/fadeInUp";
import { PodcastCard, ArticleCard, OtherMediaCard } from "@/components/media-cards";

export default function Media() {
  const mediaSamples = {
    podcast: podcasts[0],
    article: articles[0],
    otherMedia: otherMedia[0],
  };

  return (
    <>
      {/* Media Preview */}
      <motion.section {...fadeInUp} className="w-full py-16 from-primary/10 via-secondary/10 to-transparent">
        <div className="container px-4">
          <div className="">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Media & Insights
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Latest podcasts, videos, and thought leadership in sports science
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PodcastCard podcast={mediaSamples.podcast} />
              <ArticleCard article={mediaSamples.article} />
              <OtherMediaCard otherMedia={mediaSamples.otherMedia} />
            </div>

            <div className="text-center mt-8">
              <Link href="/media">
                <Button className="cursor-pointer" variant="outline" size="lg">
                  View All Media
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
};