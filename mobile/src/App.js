import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const logged = useSelector(state => state.student.logged);

  const Routes = createRouter(logged);

  return <Routes />;
}
