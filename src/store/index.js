import  { createStore } from "vuex";
import {photoModule} from "./photoModule";
import {todoModule} from "./todoModule";

export default createStore({
  modules: {
    photo: photoModule,
    todo: todoModule
  },
});
