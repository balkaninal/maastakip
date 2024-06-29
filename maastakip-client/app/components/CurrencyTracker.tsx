"use client";
import { useState, useEffect, JSX, SVGProps } from "react";
import { Separator } from "@/components/ui/separator";

export default function CurrencyTracker() {
  const [exchangeRates, setExchangeRates] = useState({
    USD: 1,
    EUR: 0.91,
    GBP: 0.81,
    JPY: 135.24,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setExchangeRates({
        USD: 1,
        EUR: Math.random() * 0.9 + 0.85,
        GBP: Math.random() * 0.8 + 0.75,
        JPY: Math.random() * 130 + 120,
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" px-4 py-2 flex items-center justify-center w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <DollarSignIcon className="w-4 h-4" />
          <span>USD</span>
          <span>1.00</span>
        </div>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <EuroIcon className="w-4 h-4" />
          <span>EUR</span>
          <span>{exchangeRates.EUR.toFixed(2)}</span>
        </div>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <PoundSterlingIcon className="w-4 h-4" />
          <span>GBP</span>
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
