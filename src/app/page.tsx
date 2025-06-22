"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex flex-col">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 py-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg text-center md:text-left"
        >
          <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">
            Test Your Knowledge Instantly!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Join thousands of learners. Take fun quizzes and expand your mind every day.
          </p>
          <Link href={`/quiz`}>
          <Button className="px-8 py-6 text-lg hover:bg-indigo-800/80 hover:text-white hover:shadow-xl hover:scale-105 transition-all ease-in-out bg-white shadow-md">Start Quiz</Button>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 md:mt-0"
        >
          <Image
            src="/quiz.svg" // Replace with your hero image
            alt="Quiz Hero"
            width={500}
            height={500}
          />
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className=" w-full py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow"
          >
            <img width="100" height="100" src="https://img.icons8.com/office/100/rocket.png" alt="rocket" className="h-20 w-20"/>
            <h3 className="text-2xl font-semibold mt-4 mb-2">Start</h3>
            <p className="text-gray-600">
              Simply click the "Start Quiz" button to begin
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow"
          >
            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/faq.png" alt="faq" className="h-20 w-20" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Answer Questions</h3>
            <p className="text-gray-600">
              Test your knowledge with multiple choice quizzes.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow"
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO2aa0xbZRjHn2xkDJ0aMk1EYoy6aDAKWaYQlowYiZNl+sEv86MmS4wfGBXIsmxeZuaW7Iq4dGACA93mJgWcuIAQOtwGgjguHffLysYAs3E5Lee0paWlj3lPTttz6I22p60b7z95Euh5znvO/3ee9znvWwCgoqKioqKioqKioqKiovKo3HsYt2eM3afQsj15WpbLH+MwkFBoOUzTMB4DjlfIFmsLqu2PFdfOP32huWxT3ciTIIdyh42JeWPsrUBNi2P3CBsRAOKIK67lEivbkkMyfxAxJm/M0ENMnL2/gPfMS2izo0eRz9U6i0cAWX26iAPgIRTVcq+p+tYFDSD7NvuVw/xKZF6yu5nfNTjv1Xy4AZDYeO7GL0EDUGi5fmKCPHl/IhXQKFQAmfOk7H09+UgBIFMhaACf32ZNxJC47D8c0Ps1FUiEG8DaU1X2oAHkC2UslpzmIwGADwogxAqwCVPAal+lFaDWWfgOT5rcqgSQLwpfZj4bZbFJb8F+oxX33uFCBhBzUoV71F3YNjWLevMimqw2HJpj8cQ/Q/iM8rf/D4AdfXps0FkkzXLYZAsJwIbCamydmvX62p02mjG5vCG6ANI1DB6dMCLrYXk4bg4NwKXBcb9rjwnWxIOKGgDVjNnrzYUC4K1zjShG2nGfwW0Xm/CN8nos770juc6Xzb3RAzBlca0QOZsdTUt2WQCc7hxxjrNkt+MLP1xxHltzQoU903rn8WGGjRwAxbJt7XdTRv7tUM9YcGe/HidFQEIBMDA77xyn/d85t+OHWvslVfB8sQuQMw7/hHCgCGHf9/IB2O1jW0tCDgDrTlWiVVRJhR0jbjk7Km9IAGRVXpfmHCxF2FvoCrkAZPnZ3MgBILHod4m5r1vc53jq+UZJzid17dInLzYvF4Bdfra1cgF4tbROYk5xtcst55USaU6OWpRDyl4uAIoAtrVyAVhuLrep2y0n6ewfkpxsdafrOJnzcgFIW4EBuQEknKmRmPvmrz63nPQLaknOx+IpsNz8wwYg5qQKzTbXOMquUbecD6qbJQAyK649OgDgeAVqHuic45Cflx8/+vegBMCzZ2oeLQDH2l0GyQtxU0mtpELIhsgroEgCyOjRYY6WwwN3DXzMWV0AZhaXnJ8H+rX462X1/ArQoVvTOnz70p+Y8mMD/jww7rtJRhLAdf0irlTHJowrBkCitGfM75ijDIfrC6qiB0C7YFsxgIvTCwEBiCuowqvjD7yON8mZ+DWD27mRBPDFXQO/7ydz31d0clb8aMjzQsrrBkbY+HzacBNbJmeQWbDwX4j0z87jkbYBjD992fN50WyCaUGELwBBBQVQSCsA6BQolKkHdDOGh6oHHDnv9vTX7lcG/6exVA3TLrfhN1sncHN9L6Zc6cCUmpuem5aMsf5wuSH4CtAwOXKa33JtlDctjnADiFfWXA4aQNYIxqZp5jRyPfnl5sMNIPZQ6cJLqo6nIBRt7Zx5Tg4IfNlHEAAxn1DSsCUk8+JKSO1mstM0TGuwjdEx58MJYM1+JcZ9W2aIV9b8urG05QmnASoqKioqqrArFgDiASABAF4EgCQA2EyWEgCwDQAyAOAdAMgEgPeEeF8Ix++ZQk6GcM5WYYwkYcwE4RrkWlHXBgB4mayYAWC7yEykYrtwbXIPj0fafAoA7IyCaW9B7iW0f4wOUMmrHQAIZRfNKfBuNKcAeJC3Jpi+rAmS8NYEHccdTZCcG9Ym+B9+3p+vwZIYowAAAABJRU5ErkJggg==" alt="logic-data-types" className="w-20 h-20" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">Check Your Score</h3>
            <p className="text-gray-600">
              See your results instantly and learn from your mistakes.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
