import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-[#0e1420] dark:text-slate-100 flex flex-col items-center justify-center px-5 text-center">
      <p className="text-accent font-semibold tracking-wide uppercase text-sm">Error 404</p>
      <h1 className="mt-2 text-5xl font-extrabold">Page not found</h1>
      <p className="mt-3 opacity-80 max-w-md">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-7 rounded-xl bg-accent text-white px-5 py-2.5 font-semibold hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
