import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const greetings = ['Hello', 'Hi', 'Hey', 'Greetings', 'Welcome'];
  const Greeting = greetings[Math.floor(Math.random() * greetings.length)];

  return <h1>{ Greeting }, World!</h1>;
}

export default Greeting;