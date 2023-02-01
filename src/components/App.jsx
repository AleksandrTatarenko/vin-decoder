import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import Home from 'pages/Home/Home';
import Variables from 'pages/Variables/Variables';
import Variable from 'pages/Variable/Variable';

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />} />

        <Route path='variables' element={<Variables />} />

        <Route path="variables/:variableId" element={<Variable />} />

        <Route path='*' element={<div>Page not found</div>} />

      </Route>
    </Routes>
  );
};
