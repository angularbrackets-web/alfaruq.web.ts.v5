import getPrayerTimes from "@/components/getPrayerTimes";
import { DateTime } from "luxon";
import React, { useState, useEffect } from "react";

interface Event {
  name: string;
  date: number | DateTime;
}

const prayerTimes = getPrayerTimes();
const fajrAdhaan = prayerTimes.fajrAzzan.split(":");
const fajrIqamah = prayerTimes.fajrIqamah.split(":");
const fajrAdhaanTomorrow = prayerTimes.fajrAzzanTomorrow?.split(":");
const sunriseTime = prayerTimes.sunriseTime.split(":");
const dhuhrAdhaan = prayerTimes.zohrAzzan.split(":");
const dhuhrIqamah = prayerTimes.zohrIqamah.split(":");
const asrAdhaan = prayerTimes.asrAzzan.split(":");
const asrIqamah = prayerTimes.asrIqamah.split(":");
const maghribAdhaan = prayerTimes.maghribAzzan.split(":");
const maghribIqamah = prayerTimes.maghribIqamah.split(":");
const ishaAdhaan = prayerTimes.ishaAzzan.split(":");
const ishaIqamah = prayerTimes.ishaIqamah.split(":");

const events: Event[] = [
  {
    name: "Next Prayer : Fajr Adhaan in ",
    date: new Date().setHours(+fajrAdhaan[0], +fajrAdhaan[1], 0),
  },
  {
    name: "It's time for Fajr, Iqamah in ",
    date: new Date().setHours(+fajrIqamah[0], +fajrIqamah[1], 0),
  },
  {
    name: "Sunrise in ",
    date: new Date().setHours(+sunriseTime[0], +sunriseTime[1], 0),
  },
  {
    name: "Next Prayer : Dhuhr Adhaan in ",
    date: new Date().setHours(+dhuhrAdhaan[0], +dhuhrAdhaan[1], 0),
  },
  {
    name: "It's time for Dhuhr, Iqamah in ",
    date: new Date().setHours(+dhuhrIqamah[0], +dhuhrIqamah[1], 0),
  },
  {
    name: "Next Prayer : Asr Adhaan in",
    date: new Date().setHours(+asrAdhaan[0], +asrAdhaan[1], 0),
  },
  {
    name: "It's time for Asr, Iqamah in ",
    date: new Date().setHours(+asrIqamah[0], +asrIqamah[1], 0),
  },
  {
    name: "Next Prayer : Maghrib Adhaan in ",
    date: new Date().setHours(+maghribAdhaan[0], +maghribAdhaan[1], 0),
  },
  {
    name: "It's time for Maghrib, Iqamah in ",
    date: new Date().setHours(+maghribIqamah[0], +maghribIqamah[1], 0),
  },
  {
    name: "Next Prayer : Isha Adhaan in ",
    date: new Date().setHours(+ishaAdhaan[0], +ishaAdhaan[1], 0),
  },
  {
    name: "It's time for Isha, Iqamah in ",
    date: new Date().setHours(+ishaIqamah[0], +ishaIqamah[1], 0),
  },
];

const getNextEvent = (currentDate: DateTime) => {
  
  for (let i = 0; i < events?.length; i++) {
    if (currentDate < events[i].date) {
      return events[i];
    }
  }
  const edmontonDateToday = DateTime.local().setZone("Canada/Mountain");
  const edmontonDateTomorrow = edmontonDateToday.plus({ days: 1}).set({hour : +fajrAdhaanTomorrow?.[0]!, minute : +fajrAdhaanTomorrow?.[1]! });
    
  return {
    name: "Fajr Adhaan",
    date: edmontonDateTomorrow
  };
};

export default function CountDownTimer() {
  const [currentEvent, setCurrentEvent] = useState<Event>(getNextEvent(DateTime.local().setZone("Canada/Mountain")));
  const [timeLeft, setTimeLeft] = useState<Record<string, number>>({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const difference = (currentEvent.date as number) - DateTime.local().setZone("Canada/Mountain").toMillis();
      if (difference <= 0) {
        clearInterval(intervalId);
        setCurrentEvent(getNextEvent(DateTime.local().setZone("Canada/Mountain")));
      } else {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentEvent]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

    

      return (
        

      

          <div className="p-[5%] sm:p-[4%] lg-p-[0%] sm:m-1 sm:mb-6  bg-lime-500 text-slate-900 rounded-lg mb-10">
            <h1 className="text-3xl my-5">{currentEvent.name} </h1>
            <h2 className="text-3xl my-5">{timerComponents?.length ? timerComponents : <span>Time's up!</span>}</h2>
          </div>
            
      );
    }


