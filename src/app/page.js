import Image from "next/image";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen 
    flex-col items-center justify-between
     p-10">
      <Pricing />
    </main>
  );
}
