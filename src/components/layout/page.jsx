"use client"
import React from 'react'
import { Provider } from "react-redux";
import Store from "../../Store"

const page = ({children}) => {
  return (
    <>
    <Provider store={Store}>{children}</Provider>
    </>
  )
}

export default page