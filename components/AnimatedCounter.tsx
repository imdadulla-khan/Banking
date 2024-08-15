"use client";

import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," prefix="INR" end={amount} decimals={2}></CountUp>
    </div>
  );
};

export default AnimatedCounter;
