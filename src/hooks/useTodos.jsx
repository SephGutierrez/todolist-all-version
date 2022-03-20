import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";


const useTodos = () => useContext(TodoContext);

export default useTodos;