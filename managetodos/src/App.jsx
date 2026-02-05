import "./App.css";
import Addtodos from "../src/components/Addtodos";
import { Todoslist } from "./components/Todoslist";
import TodosContextProvider from "./context/TodosContext";

function App() {
  return (
    <>
      <TodosContextProvider>
        <div className="bg-[#070D2D] rounded-2xl p-6 shadow-xl w-[600px] ">
          <Addtodos />
            <Todoslist />
        </div>
      </TodosContextProvider>
    </>
  );
}

export default App;
