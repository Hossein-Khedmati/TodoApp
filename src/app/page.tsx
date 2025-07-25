import SplashScreen from "@/components/SpalshScreen";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <SplashScreen duration={2500} />
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-200">
        <h1 className="text-6xl font-bold mb-8 text-purple-700">ToDo App</h1>
        <Link
          href="/todos"
          className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
        >
          View ToDo List
        </Link>
      </div>
    </>
  );
}
