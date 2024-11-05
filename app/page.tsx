import Banner from "@/components/banner";
import Guide from "@/components/guide";
import Teams from "@/components/teams";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Tools />
      <Guide />
      <Teams />
      <Banner />
    </section>
  );
}
