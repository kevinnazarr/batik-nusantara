import Hero from "@/components/page/home/hero";
import Featured from "@/components/page/home/featured";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <Featured />
    </main>
  );
}
