import Article from "@/components/Article";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="px-4 py-10 tracking-tighter">
      <Nav />
      <Hero />
      <News />
      <Article />
    </div>
  );
}
