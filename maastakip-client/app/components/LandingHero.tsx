import CurrencyTracker from "./CurrencyTracker";

export default function LandingHero() {
  return (
    <>
      <section className="w-full py-12 bg-gradient-to-l from-emerald-700 to-emerald-800">
        <div className="container grid items-center justify-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-5xl md:text-6xl">
              Maaş geliyor maaş!
            </h1>
            <p className="max-w-[600px] flex flex-col gap-1 text-white md:text-xl/relaxed">
              Büyük gün geliyor işci kardeş dayan az kaldı. Bugün paranı saymaya
              bir gün daha yakınsın.
              <span className="max-w-[600px] text-xs text-right text-gray-200 ">
                Tabii borçlarından geriye bir şey kalırsa :)
              </span>
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:flex lg:flex-col lg:items-stretch">
            <div className="flex flex-col items-center gap-4 bg-[#fff] p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Devlet Memurları</h2>
              <div className="flex items-baseline gap-2 text-[#2980b9]">
                <span className="text-6xl font-bold">14</span>
                <span className="text-4xl font-bold">Gün</span>
                <span className="text-5xl font-bold">12</span>
                <span className="text-4xl font-bold">s</span>
                <span className="text-5xl font-bold">30</span>
                <span className="text-4xl font-bold">dk</span>
              </div>
              <p className="text-muted-foreground text-sm">
                *Ayın 15. gününde maaş alanlar için en yakın maaş gününe olan
                uzaklık
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 bg-[#fff] p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Özel Sektör</h2>

              <div className="flex items-baseline gap-2 text-[#2980b9]">
                <span className="text-6xl font-bold">7</span>
                <span className="text-4xl font-bold">d</span>
                <span className="text-4xl font-bold">6</span>
                <span className="text-4xl font-bold">h</span>
                <span className="text-4xl font-bold">45</span>
                <span className="text-4xl font-bold">m</span>
              </div>
              <p className="text-muted-foreground text-sm">
                *Ayın 1. gününde maaş alanlar için en yakın maaş gününe olan
                uzaklık
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-gray-100 p-2">
        <CurrencyTracker></CurrencyTracker>
      </div>
    </>
  );
}
