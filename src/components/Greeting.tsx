import React from "react";

interface GreetingProps {
  userName: string | null | undefined;
}

function Greeting({ userName }: GreetingProps) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return (
    <h1 className="hidden md:flex">
      {greeting}, {userName}
    </h1>
  );
}

export default Greeting;
