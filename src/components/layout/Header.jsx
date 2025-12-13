import { useState, useEffect } from "react";
export default function Header() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="bg-gray-700 text-white text-center rounded-2xl">
      <h1 className="p-2.5 text-2xl font-bold text-emerald-600">
        Keep Checking the time because it is crucial | {time}
      </h1>
    </div>
  );
}
