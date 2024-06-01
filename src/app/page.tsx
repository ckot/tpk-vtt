// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <h1>Welcome to TPK VTT</h1>
      <div>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
