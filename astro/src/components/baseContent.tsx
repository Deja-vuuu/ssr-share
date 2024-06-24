import * as React from "react";

import { Image } from "astro:assets";
import { useState, useEffect } from "react";
import ButtonLink from "./links/ButtonLink";
import { format } from "./utils";

type ContentProps = {
  data?: any;
  title?: string;
  description?: string;
  disabledRealTime?: boolean;
};

const formatTime = (time: Date | number) => {
  try {
    return format(time, "kk:mm:ss O");
  } catch (e) {
    console.log(e);
  }
};

function useCurrentTime() {
  const [realTime, setRealTime] = useState(() => {
    return formatTime(new Date());
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRealTime(formatTime(new Date()));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <span suppressHydrationWarning>{realTime}</span>;
}

export default function Content({
  data,
  title,
  description,
  disabledRealTime,
}: ContentProps) {
  const cleanDate = data?.datetime && formatTime(new Date(data?.datetime));
  const realTime = useCurrentTime();
  return (
    <section className="bg-dark">
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-white layout">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-gray-300">{description}</p>
        {data ? (
          <>
            <h2 className="mt-8 md:text-2xl text-primary-400">
              {`pokeName : ${data?.name}`}
            </h2>
            <div className="mt-8">
              <img
                src={data?.front_default}
                width={200}
                height={200}
                alt="test"
              />
            </div>

            <h2 className="mt-8 text-2xl md:text-3xl text-primary-400">
              {cleanDate}
            </h2>
          </>
        ) : (
          <h2 className="mt-8 text-3xl md:text-5xl text-primary-400">
            LOADING...
          </h2>
        )}
        <ButtonLink className="mt-8" href="/">
          Back to Home
        </ButtonLink>
      </div>

      {!disabledRealTime && (
        <div className="absolute text-sm font-medium text-right right-4 bottom-8 sm:bottom-4">
          <p className="text-white">Real Time:</p>
          <p className="text-primary-400">{realTime}</p>
        </div>
      )}
    </section>
  );
}
