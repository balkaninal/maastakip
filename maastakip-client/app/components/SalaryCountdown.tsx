import { useState, useEffect } from "react";

interface CountdownProps {
  date: Date;
  type: "memur" | "ozelsektor";
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SalaryCountdown: React.FC<CountdownProps> = ({ date, type }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const difference = +new Date(date) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const renderTime = () => (
    <div className="flex items-baseline gap-3">
      <span className="text-4xl text-primary font-bold">{timeLeft.days}</span>
      <span className="text-xl font-bold">Gün</span>
      <span className="text-4xl text-primary font-bold">{timeLeft.hours}</span>
      <span className="text-xl font-bold">saat</span>
      <span className="text-4xl text-primary font-bold">
        {timeLeft.minutes}
      </span>
      <span className="text-xl font-bold">dakika</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 bg-[#fff] px-6 py-5 rounded-lg shadow">
      <h2 className="text-xl  font-bold">
        {type === "memur" ? "Devlet Memurları" : "Özel Sektör Çalışanları"}
      </h2>
      {renderTime()}
      <p className="text-muted-foreground text-xs">
        {type === "memur"
          ? "*Ayın 1. gününde maaş alanlar için en yakın maaş gününe olan uzaklık"
          : "*Ayın 15. gününde maaş alanlar için en yakın maaş gününe olan uzaklık"}
      </p>
    </div>
  );
};

export default SalaryCountdown;
