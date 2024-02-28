import Image from "next/image";
import Header from "./_coponents/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <h1>My Album</h1>
    </main>
  );
}
