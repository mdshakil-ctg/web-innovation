"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";



interface Project {
  id: number;
  category: string;
  title: string;
  image: string;
};

const categories = ["All","Web Development", "App Development", "Marketing", "SEO Optimize" ];

export const projects: Project[] = [
  // --- App Development (10 total) ---
  { id: 1, category: "App Development", title: "Accumsan Purus Vel", image: "/app1.jpg" },
  { id: 2, category: "App Development", title: "Modern App UI", image: "/app2.jpg" },
  { id: 17, category: "App Development", title: "Mobile E-commerce App", image: "/app3.jpg" },
  { id: 18, category: "App Development", title: "Finance Tracker App", image: "/app4.jpg" },

  // --- Marketing (10 total) ---
  { id: 3, category: "Marketing", title: "Creative Campaign", image: "/app5.jpg" },
  { id: 6, category: "Marketing", title: "Brand Awareness", image: "/app6.jpg" },
  { id: 25, category: "Marketing", title: "Social Media Ad Blitz", image: "/marketing1.jpg" },
  { id: 26, category: "Marketing", title: "Product Launch Campaign", image: "/marketing2.jpg" },
  { id: 27, category: "Marketing", title: "Influencer Partnerships", image: "/marketing1.jpg" },
  { id: 28, category: "Marketing", title: "Email Marketing Funnel", image: "/marketing2.jpg" },

  // --- SEO Optimize (10 total) ---
  { id: 4, category: "SEO Optimize", title: "SEO Growth Strategy", image: "/seo1.jpg" },
  { id: 33, category: "SEO Optimize", title: "Keyword Optimization Plan", image: "/seo2.jpg" },
  { id: 34, category: "SEO Optimize", title: "Technical SEO Audit", image: "/app3.jpg" },
  { id: 35, category: "SEO Optimize", title: "Backlink Building Campaign", image: "/app1.jpg" },
  { id: 36, category: "SEO Optimize", title: "Content SEO Optimization", image: "/app2.jpg" },

  // --- Web Development (10 total, already done) ---
  { id: 5, category: "Web Development", title: "Responsive Design", image: "/web1.jpg" },
  { id: 7, category: "Web Development", title: "E-commerce Platform", image: "/web2.jpg" },
  { id: 8, category: "Web Development", title: "Portfolio Website", image: "/app6.jpg" },
  { id: 9, category: "Web Development", title: "Blog CMS System", image: "/app5.jpg" },
  { id: 10, category: "Web Development", title: "Landing Page Design", image: "/app4.jpg" },
  { id: 11, category: "Web Development", title: "Company Intranet", image: "/app5.jpg" },
  { id: 12, category: "Web Development", title: "Educational Platform", image: "/app3.jpg" },
  { id: 13, category: "Web Development", title: "Online Booking System", image: "/app2.jpg" },
  { id: 14, category: "Web Development", title: "Social Media Integration", image: "/app1.jpg" },
  { id: 15, category: "Web Development", title: "Multi-language Website", image: "/app6.jpg" },
  { id: 16, category: "Web Development", title: "Real Estate Listings", image: "/app3.jpg" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeCategory === cat
                  ? "bg-green-500 text-black font-bold"
                  : "bg-gray-800 hover:bg-green-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid with Animation */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/websites/${project.id}`}
                  className="group relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:opacity-80 transition"
                  />
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent w-full">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.category}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
