"use client"

import Image from "next/image"
import { useState } from "react"
import { projects } from "@/data/projects"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () =>
    setIndex((index - 1 + projects.length) % projects.length)

  const next = () =>
    setIndex((index + 1) % projects.length)

  const project = projects[index]

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12">
       <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        Our Projects
      </h2>
    <div className="relative w-full max-w-4xl mx-auto bg-black">
      {/* Card */}
      <div className="rounded-2xl overflow-hidden shadow-xl bg-zinc-900">
      <div className="relative h-[280px] sm:h-[380px] group">
  {/* Image */}
  <Image
    src={project.imageUrl}
    alt={project.title}
    fill
    className="
      object-cover
      transition-transform duration-300
      group-hover:scale-105
    "
  />

  {/* Hover Overlay */}
  <div
    className="
      absolute inset-0
      bg-black/75
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
      flex flex-col justify-center items-center
      px-6 text-center
    "
  >
    <p className="text-sm sm:text-base text-zinc-200 mb-4">
      {project.description}
    </p>
  </div>
</div>


        <div className="p-5 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              className="text-sm text-blue-400 hover:underline"
            >
              Visit →
            </a>
          )}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-[-20px] top-1/2 -translate-y-1/2
                   bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-[-20px] top-1/2 -translate-y-1/2
                   bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
    </div>
  )
}
