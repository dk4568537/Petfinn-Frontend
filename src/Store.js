import { configureStore } from "@reduxjs/toolkit";
import webSystem from "./webSystem";

const Store = configureStore({
    reducer:{
       user: webSystem
    },
});
export default Store;