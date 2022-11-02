import React from "react";

export default function Err({ userName }) {
  if (userName === "bomb") {
    throw new Error();
  }
  return (
    <>
      <h1>ёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёёё</h1>
    </>
  );
}
