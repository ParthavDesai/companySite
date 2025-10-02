"use client";

import {
  Code,
  Cloud,
  Brain,
  BarChart3,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and applications built for performance, scalability, and modern design.",
      details: [
        "Responsive design for all devices",
        "SEO-friendly architecture",
        "E-commerce and CMS integration",
      ],
      icon: <Code className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Cloud Solutions",
      desc: "Seamless migration, deployment, and optimization with AWS.",
      details: [
        "Cloud migration strategy",
        "CI/CD pipelines",
        "Serverless & containerized apps",
      ],
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "AI & Automation",
      desc: "Harness the power of AI to streamline workflows and unlock new business insights.",
      details: [
        "RAG models",
        "Custom AI models",
        "Chatbots & automation tools",
        "Predictive analytics",
      ],
      icon: <Brain className="w-8 h-8 text-pink-400" />,
    },
    {
      title: "Data Analytics",
      desc: "Transform raw data into clear, actionable intelligence with advanced analytics.",
      details: [
        "Interactive dashboards",
        "Data pipelines & ETL",
        "Business intelligence solutions",
      ],
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black py-20 px-6">
      {/* background accent blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Section heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight text-white">
          Our <span className="text-purple-400">Services</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Innovative solutions tailored to your business — designed to scale, secure, and succeed.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={i}
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-black/50 mb-6">
              {s.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>

            {/* Jot notes list */}
            <ul className="mt-4 text-gray-300 text-sm list-disc list-inside space-y-1 text-left">
              {s.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
