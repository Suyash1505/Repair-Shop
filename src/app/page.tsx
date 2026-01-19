import Link from "next/link"
import React from "react"

const Home = () => {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4 home-bg">
      <section className="relative w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/40 p-8 text-center" >
        {/* Glow layer */}
        <div className="absolute inset-0 -z-10 rounded-2xl from-white/20 to-transparent blur-2xl" />

        {/* Title */}
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Steve’s Computer
          <br />
          <span className="text-green-400">Repair Shop</span>
        </h1>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-white/20" />

        {/* Address */}
        <address className="not-italic text-sm text-gray-300 leading-relaxed">
          H.752 Behind Mili Guha Hospital
          <br />
          Gupteshwar, Jabalpur - 482001
        </address>

        {/* Timing */}
        <p className="mt-4 text-sm text-gray-400">
          Open Daily · 9:00 AM – 5:00 PM
        </p>

        {/* Phone */}
        <Link
          href="tel:9131703245"
          className="mt-6 inline-block rounded-full border border-green-400/40 px-6 py-2
            text-green-400 transition hover:bg-green-400/10 hover:border-green-400"
        >
          913-170-3245
        </Link>
      </section>
    </main>
  )
}

export default Home
