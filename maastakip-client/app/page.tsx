import { SITE_NAME } from "./config/constants";
import LandingHero from "./components/LandingHero";
import { LandingCards } from "./components/LandingCards";
import LandingSignUp from "./components/LandingSignUp";

export const metadata = {
  title: SITE_NAME,
  description: "Maaş Takip ve Hesaplama Uygulama Web Sitesi",
};
export default function Home() {
  return (
    <>
      <div className="hero w-full">
        <LandingHero></LandingHero>
      </div>

      <div className="comparation container flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-bold">
          Son Maaşdan İtibaren Neler Değişti
        </h2>
        <div className="comparation-cards flex flex-col md:flex-row gap-10 justify-center items-center">
          <LandingCards></LandingCards>
          <LandingCards></LandingCards>
        </div>
      </div>

      <div className="signup w-full">
        <LandingSignUp></LandingSignUp>
      </div>
    </>
  );
}
