'use client';

import { Logo, LogoText } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Code2,
  LineChart,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const sendMail = () => window.open('mailto:admin@triipe.co.za', '_self');
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link className="flex items-center space-x-2 font-bold" href="/">
            <Logo />
            <LogoText />
          </Link>
          {/* <div className="hidden md:flex items-center space-x-6">
            <Link className="text-sm hover:text-sage" href="#services">
              Services
            </Link>
            <Link className="text-sm hover:text-sage" href="#portfolio">
              Portfolio
            </Link>
            <Link className="text-sm hover:text-sage" href="#about">
              About
            </Link>
            <Link className="text-sm hover:text-sage" href="#contact">
              Contact
            </Link>
          </div> */}
          <div className="flex items-center space-x-4">
            <Button
              className="bg-gradient-to-r from-[#9edeb5] to-[#fdd895] text-black hover:from-[#9edeb5]/90 hover:to-[#fdd895]/90"
              onClick={sendMail}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Curved Lines */}
          <svg
            className="absolute h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#9edeb5" stopOpacity="0" />
                <stop offset="50%" stopColor="#9edeb5" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#9edeb5" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#fdd895" stopOpacity="0" />
                <stop offset="50%" stopColor="#fdd895" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#fdd895" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Animation paths remain the same, just updated colors */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
                repeatDelay: 1,
              }}
              d="M 100 100 Q 300 0 500 100 T 900 100"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
                repeatDelay: 1,
                delay: 0.5,
              }}
              d="M 0 200 Q 200 100 400 200 T 800 200"
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="1"
            />
            {/* Bottom Curves */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
                repeatDelay: 1,
                delay: 1,
              }}
              d="M 100 600 Q 300 500 500 600 T 900 600"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
            />
          </svg>

          {/* Straight Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: '100%', opacity: 0 }}
                animate={{
                  x: '-100%',
                  opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'loop',
                  ease: 'linear',
                }}
                className="absolute right-0"
                style={{
                  top: `${15 + i * 10}%`,
                  height: '1px',
                  width: '100%',
                  background: `linear-gradient(90deg, transparent, ${
                    i % 2 === 0 ? '#FF4F5E' : '#FFE44D'
                  }60, transparent)`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-[1]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-coral/30 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-yellow/30 blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="container relative z-[3] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-3xl space-y-8"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Building Tomorrow's Software Solutions
            </h1>
            <p className="mx-auto max-w-2xl text-muted text-gray-400 sm:text-xl">
              We transform ideas into powerful software solutions. From custom
              development to SaaS products, we're your technology partner.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                className="bg-gradient-to-r from-[#9edeb5] to-[#fdd895] text-lg text-black hover:from-[#9edeb5]/90 hover:to-[#fdd895]/90"
                onClick={sendMail}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button
                variant="outline"
                className="border-white/10 text-lg text-white hover:bg-white/10"
              >
                View Our Work
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative z-10 border-t border-white/10 bg-black py-24"
      >
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-gray-400">
              End-to-end software solutions for your business
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-[#9edeb5]/50"
            >
              <Code2 className="mb-4 h-12 w-12 text-[#9edeb5]" />
              <h3 className="mb-2 text-xl font-bold">Custom Development</h3>
              <p className="text-gray-400">
                Tailored software solutions designed to meet your specific
                business needs and challenges
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-[#fdd895]/50"
            >
              <Blocks className="mb-4 h-12 w-12 text-[#fdd895]" />
              <h3 className="mb-2 text-xl font-bold">SaaS Development</h3>
              <p className="text-gray-400">
                Building scalable cloud-based software solutions with modern
                architectures
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-[#9edeb5]/50"
            >
              <LineChart className="mb-4 h-12 w-12 text-[#9edeb5]" />
              <h3 className="mb-2 text-xl font-bold">Technical Consulting</h3>
              <p className="text-gray-400">
                Strategic guidance on architecture, technology stack, and
                development practices
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section
        id="portfolio"
        className="relative z-10 border-t border-white/10 bg-black/50 py-24"
      >
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-4 text-gray-400">
              Recent projects that showcase our expertise
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-purple/20 to-[#9edeb5]/20 p-8">
                <h3 className="text-xl font-bold">Project Name</h3>
                <p className="mt-2 text-gray-400">Brief project description</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section
        id="about"
        className="relative z-10 border-t border-white/10 bg-black py-24"
      >
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-gray-400">
              Expert developers and consultants ready to help
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 border-t border-white/10 bg-black py-24"
      >
        <div className="container px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-r from-[#34182C] to-[#9edeb5]/50 p-8 text-center backdrop-blur-sm md:p-12 lg:p-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Start Your Project
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Let's discuss how we can help bring your ideas to life
            </p>
            <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#9edeb5]" />
                <span>Free initial consultation</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#9edeb5]" />
                <span>Flexible engagement models</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#9edeb5]" />
                <span>Transparent pricing and timeline</span>
              </li>
            </ul>
            <Button
              className="mt-8 bg-gradient-to-r from-[#9edeb5] to-[#fdd895] text-lg text-black hover:from-[#9edeb5]/90 hover:to-[#fdd895]/90"
              onClick={sendMail}
            >
              Schedule a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="container flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <Logo />
            <LogoText />
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Triipe (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* <Link
              className="text-sm text-gray-400 hover:text-[#9edeb5]"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-sm text-gray-400 hover:text-[#9edeb5]"
              href="#"
            >
              Terms
            </Link> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
