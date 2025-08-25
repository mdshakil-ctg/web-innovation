"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "@/assets/banner.png";
import Button from "./shared/Button";
import Link from "next/link";

// Constants for animation and behavior control
const titles = [
  "Set Your Business New Ideas.",
  "Build Websites That Convert.",
  "Grow Your Brand With Strategy.",
  "Turn Vision Into Digital Reality.",
];

const TYPING_SPEED = 50;
const DELETING_SPEED = 100;
const PAUSE_DURATION = 100;
const CURSOR_BLINK_RATE = 200;
const INTERSECTION_THRESHOLD = 0.2; // Threshold for observer

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [soundPlayedForTitle, setSoundPlayedForTitle] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  // 1. Observe visibility of the banner component
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    const currentBannerRef = bannerRef.current;
    if (currentBannerRef) {
      observer.observe(currentBannerRef);
    }

    return () => {
      if (currentBannerRef) observer.unobserve(currentBannerRef);
    };
  }, []);

  // 2. Handle the core typing and deleting animation logic based on visibility
  useEffect(() => {
    // Animation and sound only run when the component is visible
    if (!isVisible) {
      // Pause animation when not in view
      if (audioRef.current) {
        audioRef.current.pause();
      }
      return;
    }

    const currentTitle = titles[index];
    const typingSpeed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const audio = audioRef.current;

    // Play sound at the very beginning of the typing sequence for a new title
    // This will trigger once per title when the component enters the viewport
    if (audio && !isDeleting && !soundPlayedForTitle) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
      setSoundPlayedForTitle(true);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextSubIndex = subIndex + 1;
        setSubIndex(nextSubIndex);

        if (nextSubIndex === currentTitle.length) {
          setTimeout(() => {
            setIsDeleting(true);
            setSoundPlayedForTitle(false);
          }, PAUSE_DURATION);
        }
      } else {
        const nextSubIndex = subIndex - 1;
        setSubIndex(nextSubIndex);

        if (nextSubIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, isVisible, soundPlayedForTitle]);

  // 3. Handle the blinking cursor animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, CURSOR_BLINK_RATE);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      ref={bannerRef}
      className="bg-[#0e0e0e] text-white px-6 py-6 md:py-16"
    >
      <audio ref={audioRef} src="/sounds/typing.mp3" preload="auto" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Side */}
        <div>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight pt-5 md:pt-0 min-h-[120px]">
            <motion.span
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-green-400"
            >
              {titles[index].substring(0, subIndex)}
              <span className="ml-1">{blink ? "|" : ""}</span>
            </motion.span>
          </h1>

          <p className="mt-6 text-gray-300">
            We focus on simplicity, flexibility, and strategy—making it easier
            for you to achieve your goals while staying ahead of the competition.
          </p>
          <p className="mt-4 text-gray-300">
            Let’s build a strong foundation together, where every step takes you
            closer to sustainable success.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
            <Link href="#contactme">
              <div>
                <Button text="Free Consult" />
              </div>
            </Link>
            <Link href="/websites">
              <div>
                <Button text="View All Work" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Image Side */}
        <div
          className="relative w-full h-[500px] overflow-hidden rounded-[30px]"
          style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
        >
          <Image
            src={banner}
            alt="Team"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 bg-green-500 opacity-40"
            style={{
              clipPath: "polygon(20% 0, 30% 0, 60% 100%, 40% 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;