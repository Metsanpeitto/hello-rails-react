
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetings";

const Greetings = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings);
  const raw = greetings[0]
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