import React from 'react';
import {
  createBrowserRouter,

} from "react-router-dom";
import HomeLayout from '../components/HomeLayout';
import AllFood from '../components/AllFood';
import Error from '../components/Error';
import SingleFood from '../components/SingleFood';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/allFoods",
    element: <AllFood></AllFood>
  },
  {
    path: "/singleFood/:id",
    element: <SingleFood></SingleFood>
  },
  {
    path: "*",
    element: <Error></Error>,
  },

]);

export default router;