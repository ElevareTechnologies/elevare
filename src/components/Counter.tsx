"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import Home from "../../public/svg/mobile.svg";
import Map from "../../public/svg/seo.svg";
import People from "../../public/svg/vr.svg";
import Happy from "../../public/svg/web.svg";

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const [isCounterVisible, setIsCounterVisible] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCounterVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to control when the animation starts
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section className="py-14 bg-primary dark:bg-transparent" ref={counterRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center text-white p-6">
            <CountUp
              start={isCounterVisible ? 0 : undefined}
              end={126}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <strong className="block text-4xl font-semibold">
                  <span ref={countUpRef} />
                </strong>
              )}
            </CountUp>
            <span className="block text-lg ">Customers</span>
          </div>
          <div className="text-center text-white p-6">
            <CountUp
              start={isCounterVisible ? 0 : undefined}
              end={63}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <strong className="block text-4xl font-semibold">
                  <span ref={countUpRef} />
                </strong>
              )}
            </CountUp>
            <span className="block text-lg">Completed Projects</span>
          </div>
          <div className="text-center text-white p-6">
            <CountUp
              start={isCounterVisible ? 0 : undefined}
              end={18}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <strong className="block text-4xl font-semibold">
                  <span ref={countUpRef} />
                </strong>
              )}
            </CountUp>
            <span className="block text-lg">Partners</span>
          </div>
          <div className="text-center text-white p-6">
            <CountUp
              start={isCounterVisible ? 0 : undefined}
              end={27}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <strong className="block text-4xl font-semibold">
                  <span ref={countUpRef} />
                </strong>
              )}
            </CountUp>
            <span className="block text-lg">Happy Clients+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;