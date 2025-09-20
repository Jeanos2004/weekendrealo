"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Heart,
  MessageCircle,
  Share,
  MoreVertical,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TikTokVideo {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  time: string;
  likes: number;
  comments: number;
  shares: number;
  author: string;
  authorAvatar: string;
}

interface BrutTikTokFeedProps {
  videos: TikTokVideo[];
}

export function BrutTikTokFeed({ videos }: BrutTikTokFeedProps) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const videoHeight = container.clientHeight;
    const newCurrentVideo = Math.round(scrollTop / videoHeight);

    if (newCurrentVideo !== currentVideo) {
      setCurrentVideo(newCurrentVideo);
      setIsPlaying(false);
    }
  };

  const scrollToVideo = (index: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const videoHeight = container.clientHeight;
    container.scrollTo({
      top: index * videoHeight,
      behavior: "smooth",
    });
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const nextVideo = () => {
    if (currentVideo < videos.length - 1) {
      scrollToVideo(currentVideo + 1);
    }
  };

  const prevVideo = () => {
    if (currentVideo > 0) {
      scrollToVideo(currentVideo - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [currentVideo]);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Dernières vidéos publiées</h2>
        </div>

        {/* TikTok-style feed */}
        <div
          ref={containerRef}
          className="relative h-[600px] overflow-y-auto snap-y snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative h-full w-full snap-start flex items-center justify-center bg-black"
            >
              {/* Video Background */}
              <div className="absolute inset-0">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Play/Pause Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white fill-current" />
                  )}
                </Button>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  {/* Left side - Video info */}
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          {video.author.charAt(0)}
                        </span>
                      </div>
                      <span className="font-semibold text-sm">
                        {video.author}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-sm text-white/90 mb-2 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-white/80">
                      <span>{video.time}</span>
                      <span>•</span>
                      <span>{video.duration}</span>
                      <span>•</span>
                      <span>{video.category}</span>
                    </div>
                  </div>

                  {/* Right side - Actions */}
                  <div className="flex flex-col items-center space-y-4">
                    {/* Like */}
                    <div className="flex flex-col items-center">
                      <Button
                        onClick={toggleLike}
                        size="sm"
                        className={`w-12 h-12 rounded-full ${
                          isLiked
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-white/20 hover:bg-white/30"
                        }`}
                      >
                        <Heart
                          className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`}
                        />
                      </Button>
                      <span className="text-xs mt-1">{video.likes}</span>
                    </div>

                    {/* Comments */}
                    <div className="flex flex-col items-center">
                      <Button
                        size="sm"
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30"
                      >
                        <MessageCircle className="w-6 h-6" />
                      </Button>
                      <span className="text-xs mt-1">{video.comments}</span>
                    </div>

                    {/* Share */}
                    <div className="flex flex-col items-center">
                      <Button
                        size="sm"
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30"
                      >
                        <Share className="w-6 h-6" />
                      </Button>
                      <span className="text-xs mt-1">{video.shares}</span>
                    </div>

                    {/* More */}
                    <Button
                      size="sm"
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30"
                    >
                      <MoreVertical className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* WeekendRealo Logo */}
              <div className="absolute top-4 right-4">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                  WeekendRealo
                </div>
              </div>

              {/* Video Progress Indicator */}
              <div className="absolute top-4 left-4 right-4">
                <div className="flex space-x-1">
                  {videos.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded ${
                        i === currentVideo ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center space-x-4 mt-4">
          <Button
            onClick={prevVideo}
            disabled={currentVideo === 0}
            variant="outline"
            size="sm"
          >
            Précédent
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentVideo + 1} / {videos.length}
          </span>
          <Button
            onClick={nextVideo}
            disabled={currentVideo === videos.length - 1}
            variant="outline"
            size="sm"
          >
            Suivant
          </Button>
        </div>
      </div>
    </section>
  );
}
