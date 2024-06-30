"use client";
import { useState, useEffect, JSX, SVGProps } from "react";
import { Separator } from "@/components/ui/separator";
import {
  IconCoin,
  IconCoins,
  IconCurrencyDollar,
  IconCurrencyEuro,
  IconCurrencyLira,
  IconCurrencyPound,
} from "@tabler/icons-react";

export default function CurrencyTracker() {
  const [exchangeRates, setExchangeRates] = useState({
    TRY: 1,
    USD: 32.91,
    EUR: 34.81,
    GBP: 35.25,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setExchangeRates({
        TRY: 1,
        USD: Math.random() * 30 + 0.5,
        EUR: Math.random() * 32 + 0.85,
        GBP: Math.random() * 35 + 0.75,
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" px-4 py-2 flex items-center justify-center w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          Mevcut dolar kuru
        </div>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <IconCurrencyLira className="w-4 h-4" />
          <span>TRY</span>
          <span>1.00</span>
        </div>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <IconCurrencyDollar className="w-4 h-4" />
          <span>USD</span>
          <span>{exchangeRates.USD.toFixed(2)}</span>
        </div>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <IconCurrencyEuro className="w-4 h-4" />
          <span>EUR</span>
          <span>{exchangeRates.EUR.toFixed(2)}</span>
        </div>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <IconCurrencyPound className="w-4 h-4" />
          <span>GBP</span>
          <span>{exchangeRates.GBP.toFixed(2)}</span>
        </div>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <IconCoins className="w-4 h-4" />
          <span>ALT(gr)</span>
          <span>{exchangeRates.GBP.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

function DollarSignIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function EuroIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12" />
      <path d="M4 14h9" />
      <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
    </svg>
  );
}

function PoundSterlingIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 7c0-5.333-8-5.333-8 0" />
      <path d="M10 7v14" />
      <path d="M6 21h12" />
      <path d="M6 13h10" />
    </svg>
  );
}
