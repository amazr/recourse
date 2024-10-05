'use client'

import React from "react";
import { useEffect, useState } from "react";
import { optionsContract } from "../actions/polygon";
import { TextInput } from "@mantine/core";

export const OptionsContract = React.memo(function _optionsContract() {
  const [ticker, setTicker] = useState("")

  const [options, setOptions] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      optionsContract("O:SPY251219C00650000").then((data) => {
        setOptions(JSON.stringify(data, null, 2))
      });
    }, 2000);
    return () => clearInterval(intervalId)
  }, [setOptions]);
  return (
    <div>
      <TextInput
        value={ticker}
        onChange={(event) => setTicker(event.currentTarget.value)}
        label="Ticker"
        placeholder="AAPL"
      />
      {options}
    </div>
  );
});
