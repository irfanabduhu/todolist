import { useEffect, useState } from "react";
import TodoList from "./TodoList";

let identifier = 0;
let maxId = 0;
let mode = "add";

const AddTodo = () => {
	const [title, setTitle] = useState("");
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));
		if (todos) {
			setTodoList(todos);
		}
	}, []); // load todos from local storage only the first time.

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todoList));
	}, [todoList, todoList.length]);

	function updateTodo(id) {
		const elem = todoList.find(([i]) => i === id);
		const value = elem[1];

		// update DOM
		setTitle(value);
		document.getElementById("title").focus();

		// set identifier to the element to be updated:
		identifier = elem[0];
		mode = "update";
	}

	function deleteTodo(id) {
		const elem = todoList.find(([i]) => i === id);
		setTodoList(todoList.filter(([i, _]) => i !== elem[0]));
	}

	function saveTodo(e) {
		e.preventDefault();
		if (mode === "add") {
			maxId++;
			identifier = maxId;
			todoList.unshift([identifier, title]);
		} else if (mode === "update") {
			const index = todoList.findIndex(([i]) => i === identifier);
			todoList[index] = [identifier, title];
			mode = "add";
		}

		setTodoList(todoList);
		setTitle("");
	}

	return (
		<div>
			<form onSubmit={saveTodo}>
				<input
					id="title"
					placeholder="task to procrastinate :v"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button type="submit" disabled={!title.length}>
					{mode === "add" ? "Add" : "Update"}
				</button>
			</form>

			<TodoList
				todoList={todoList}
				updateFn={updateTodo}
				deleteFn={deleteTodo}
			/>
		</div>
	);
};

export default AddTodo;
