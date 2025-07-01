import React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import HomeLayout from '../components/HomeLayout';
import AllFood from '../components/AllFood';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/allFoods",
    element: <AllFood></AllFood>
  },

]);

export default router;