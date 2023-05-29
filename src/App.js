import TodoForm from "./TodoForm";
import ItemsList from "./ItemsList";
import { defaultTheme, Provider } from "@adobe/react-spectrum";

function App() {
  return (
    <>
    <Provider theme={defaultTheme}>
    <div className="h-auto w-auto flex flex-col justify-center bg-emerald-700">
    <TodoForm />
      <ItemsList />
    </div>
    </Provider>
    </>
  );
}

export default App;