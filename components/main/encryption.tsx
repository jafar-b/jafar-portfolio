"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 w-full"
    >
      <div className="w-full max-w-4xl px-10">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-semibold text-center text-gray-200 mb-12"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Me
          </span>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          variants={slideInFromTop}
          className="flex flex-row gap-8 justify-center items-center mb-16 flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-lg border border-purple-500/30 hover:border-purple-500/60 transition-all"
          >
            <Image
              src="/main.png"
              alt="Jafar Photo"
              width={300}
              height={400}
              className="object-cover"
              priority
            />
          </motion.div>
     
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="flex flex-col gap-6 mb-16"
        >
          <div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Software Engineer and Project Coordinator with 1+ years of experience supporting delivery of business applications in fast-paced startup environments. Skilled in fullstack development, requirement coordination, issue tracking, UAT support, and operational execution.
            </p>
            <p className="text-gray-300 leading-relaxed">
              • Age: 24 &nbsp; &nbsp; • Location: Ratnagiri, Maharashtra, India <br />
              • Phone: +91-7262067842
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={slideInFromTop}
          className="border-t border-gray-700 pt-12 pb-16"
        >
          <h3 className="text-[40px] font-semibold text-center text-gray-200 mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Experience
            </span>
          </h3>

          <div className="space-y-8">
            <motion.div
              variants={slideInFromTop}
              className="border-l-4 border-purple-500 pl-6"
            >
              <h4 className="text-xl font-semibold text-purple-400 mb-2">Software Engineer & Project Coordinator</h4>
              <p className="text-gray-300 font-medium mb-2">Pleximus Inc. • June 2025 - Present</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Worked on developing AI-powered web applications for intelligent user interactions using MERN stack and modern frontend frameworks</li>
                <li>• Developed a modular business management system using Laravel, covering inventory tracking, payment workflows, automated billing, background jobs, and queues supporting over 10,000 daily transactions</li>
                <li>• Designed and deployed a fullstack application with microservices architecture using Docker Compose with separate containers for frontend, backend, database, and Nginx reverse proxy</li>
                <li>• Handled complete project execution flow including requirement gathering, feature development, frontend-backend integration, deployment, and direct client coordination</li>
                <li>• Coordinated cross-functional teams to manage dependencies, track issues, and support on-time releases using Jira</li>
              </ul>
            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className="border-l-4 border-cyan-500 pl-6"
            >
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">Software Engineer Trainee</h4>
              <p className="text-gray-300 font-medium mb-2">Benchmark IT Solutions • Jan 2025 - May 2025</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Contributed to development of production-grade application features and backend API integrations</li>
                <li>• Participated in sprint-based development with debugging and feature delivery under senior engineer supervision</li>
                <li>• Prepared sprint updates, delivery reports, and issue logs for internal and client stakeholders</li>
              </ul>
            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className="border-l-4 border-purple-500 pl-6"
            >
              <h4 className="text-xl font-semibold text-purple-400 mb-2">Software Engineer Intern</h4>
              <p className="text-gray-300 font-medium mb-2">Pleximus Inc. • June 2023 - July 2023</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Developed the frontend using React and implemented RESTful backend services using NestJS</li>
                <li>• Worked on motivational quotes application using Flutter and Firebase</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={slideInFromTop}
          className="border-t border-gray-700 pt-12 pb-16"
        >
          <h3 className="text-[40px] font-semibold text-center text-gray-200 mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Education
            </span>
          </h3>

          <div className="space-y-6">
            <motion.div
              variants={slideInFromTop}
              className="bg-gray-900 bg-opacity-40 border border-gray-700 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-purple-400 mb-2">MBA (Information Systems & Business)</h4>
              <p className="text-gray-300 text-sm">Mumbai University • Executive Format</p>
            <p className="text-gray-400 text-xs mt-2">2025 - 2026</p>
            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className="bg-gray-900 bg-opacity-40 border border-gray-700 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Bachelor of Engineering in Information Technology</h4>
              <p className="text-gray-300 text-sm">Finolex Academy of Management and Technology • CGPA: 8.96/10</p>
              <p className="text-gray-400 text-xs mt-2">2022 - 2025</p>
            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className="bg-gray-900 bg-opacity-40 border border-gray-700 rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Diploma in Computer Science Engineering</h4>
              <p className="text-gray-300 text-sm">Government Polytechnic, Ratnagiri • Percentage: 89.49%</p>
              <p className="text-gray-400 text-xs mt-2">2019 - 2022</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={slideInFromTop}
          className="border-t border-gray-700 pt-12"
        >
          <h3 className="text-[40px] font-semibold text-center text-gray-200 mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Certifications
            </span>
          </h3>

          <div className="space-y-4">
            <motion.div
              variants={slideInFromTop}
              className="bg-gray-900 bg-opacity-40 border border-gray-700 rounded-lg p-4 flex items-center"
            >
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
              <p className="text-gray-300">AWS Cloud Practitioner Essentials • AWS</p>
            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className="bg-gray-900 bg-opacity-40 border border-gray-700 rounded-lg p-4 flex items-center"
            >
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></div>
              <p className="text-gray-300">Linux Mastery • Udemy</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
