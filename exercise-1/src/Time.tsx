import React from "react";

export default function Time() {
  let date: Date = new Date();
  let time: string = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <div id="con">
      <p id="time">{time}</p>
    </div>
  );
}
