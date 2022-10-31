import TodoList from "./TodoList";

function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add Task</button>
      <button>Clear Task</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
