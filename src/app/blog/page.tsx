"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "./posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-light mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="max-w-4xl mx-auto leading-relaxed" style={{ 
            color: '#cbd5e1',
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            Insights, Trends & Updates from the Future of Autonomous E-commerce
          </p>
          {/* LinkedIn Post Button */}
          <div className="flex justify-center mt-8">
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7353224365804560385/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0077b5] text-white font-semibold shadow-lg hover:bg-[#005983] transition-colors"
              style={{ textDecoration: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.599 2.001 3.599 4.601v5.595z"/></svg>
              View our LinkedIn Post
            </a>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg p-6 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg hover:border-blue-500/40 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="cursor-pointer">
                  <div>
                    <h2 className="text-2xl font-light mb-4 text-white">
                      {post.title}
                    </h2>
                    <p className="leading-relaxed mb-4" style={{ 
                      color: '#cbd5e1',
                      fontSize: '1rem',
                      fontWeight: '300',
                      lineHeight: '1.6'
                    }}>
                      {post.description}
                    </p>
                    <span className="inline-block text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
