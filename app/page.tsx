import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="px-4 py-5">
      <header>
        <Nav />
        <Hero />
      </header>
    </div>
  );
}
