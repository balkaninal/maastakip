"use client";
import { IconConfetti } from "@tabler/icons-react";
import CurrencyTracker from "./CurrencyTracker";
import SalaryCountdown from "./SalaryCountdown";

export default function LandingHero() {
  return (
    <>
      <section className="w-full py-12 bg-gradient-to-r from-primary to-cyan-700">
        <div className="container grid items-center justify-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold text-white tracking-tighter flex flex-row items-center gap-3 sm:text-5xl md:text-6xl">
              <IconConfetti size={36}></IconConfetti> Maaş geliyor maaş!
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
            <SalaryCountdown
              date={new Date("2024-07-15T00:00:00")}
              type="memur"
            />
            <SalaryCountdown
              date={new Date("2024-07-01T00:00:00")}
              type="ozelsektor"
            />
          </div>
        </div>
      </section>
      <div className="w-full bg-secondary p-2">
        <CurrencyTracker></CurrencyTracker>
      </div>
    </>
  );
}
