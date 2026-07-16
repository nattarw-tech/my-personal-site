import { Link } from "wouter";
import Robot from "../components/Robot";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-[#0e1420] dark:text-slate-100 flex flex-col items-center justify-center px-5 text-center">
      <Robot float className="w-40 text-ink dark:text-slate-200" />
      <h1 className="mt-6 text-5xl font-extrabold">404</h1>
      <p className="mt-3 text-xl font-semibold">Regulatory breach: page not found.</p>
      <p className="mt-2 opacity-80 max-w-md">
        This incident has been logged, escalated, and filed under Form 404. The robot has been
        assigned to investigate. Current status: pending.
      </p>
      <Link
        href="/"
        className="mt-7 rounded-xl bg-accent text-white px-5 py-2.5 font-semibold hover:opacity-90 transition-opacity"
      >
        Return to compliant territory
      </Link>
    </div>
  );
}
