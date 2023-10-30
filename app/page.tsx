import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="px-4 py-5">
      <Nav />
      <Hero />
      <News />
    </div>
  );
}
