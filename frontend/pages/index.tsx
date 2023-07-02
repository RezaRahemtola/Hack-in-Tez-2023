import Header from "@/components/Header";

const Hero = () => (
  <div className="hero my-10">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">
          Unlock the Web3 Gaming Experience
        </h1>
      </div>
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <Header />

      <Hero />
    </>
  );
}
