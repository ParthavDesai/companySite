"use client";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black py-24 px-6 text-gray-300">
      {/* background accent blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/4 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-28">
        <h2 className="text-6xl font-bold tracking-tight text-white">
          About <span className="text-pink-400">Us</span>
        </h2>
        <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We’re a passionate team of innovators, designers, and builders committed to
          creating technology that empowers businesses and inspires people.
        </p>
      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-4xl font-semibold text-center text-white mb-16">
          Our Core Values
        </h3>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Innovation",
              desc: "We embrace change, push boundaries, and challenge the status quo to deliver creative solutions.",
            },
            {
              title: "Collaboration",
              desc: "We thrive as a team, working together with transparency, trust, and respect.",
            },
            {
              title: "Impact",
              desc: "We focus on building products that truly make a difference in people’s lives.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:border-pink-500 transition"
            >
              <h4 className="text-2xl font-semibold text-pink-400 mb-4">{value.title}</h4>
              <p className="text-gray-400 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
