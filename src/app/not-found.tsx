import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Page Not Found",
}

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4">
        <section className="relative w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl
            border border-white/20 shadow-2xl shadow-black/40 p-8 text-center"
        >
            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-2xl  from-white/20 to-transparent blur-2xl" />

            {/* Image */}
            <Image
                src="/images/not-found-1024x1024.png"
                alt="Page not found"
                width={260}
                height={260}
                priority
                className="mx-auto mb-6 rounded-xl opacity-90"
            />

            {/* Title */}
            <h2 className="text-3xl font-semibold tracking-tight text-white">
            Page Not Found
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm text-gray-400">
            The page you’re looking for doesn’t exist or was moved.
            </p>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-white/20" />

            {/* Action */}
            <Link href="/"
                className="inline-block rounded-full border border-green-400/40 px-6 py-2 text-green-400 transition hover:bg-green-400/10 hover:border-green-400"
            >
                Go back home
            </Link>
        </section>
    </main>
  )
}
