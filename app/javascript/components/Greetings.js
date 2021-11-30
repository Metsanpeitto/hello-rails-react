
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetings";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Greetings = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings);
  const index = getRandomInt(5)
  const raw = greetings[index]
  let message = "Not fetched yet"
  if (raw) {
    message = raw.greeting
  }
  console.log(message)
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return <h1>{message}</h1>;
}


export default Greetings;