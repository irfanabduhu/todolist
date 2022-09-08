import "./index.css";
import { createRoot } from "react-dom/client";
import AddTodo from "./AddTodo";

const App = () => {
	return (
		<div className="container">
			<h1>Todo List</h1>
			<AddTodo />
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
