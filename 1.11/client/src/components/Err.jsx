import React from "react";

export default function Err({ userName }) {
  if (userName === "bomb") {
    throw new Error();
  }
  return (
    <>
      <h1>Тест на ошибки
      </h1>
      <p>введите 'bomb' в инпут, чтобы появилась ошибка</p>
    </>
  );
}
