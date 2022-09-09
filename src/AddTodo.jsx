import { useEffect, useState } from "react";
import TodoList from "./TodoList";

let identifier = 0;
let maxId = 0;
let mode = "add";

const AddTodo = () => {
	const [title, setTitle] = useState("");
	const [query, setQuery] = useState("");
	const [todoList, setTodoList] = useState([]); // interacts with the local storage
	const [view, setView] = useState([]); // interacts with todoList; applies filter

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));
		if (todos) {
			setTodoList(todos);
		}
	}, []); // load todos from local storage only the first time.

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todoList));
		setView(todoList);
	}, [todoList, todoList.length]); // updates local storage to sync with todoList

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

	function searchTodos(key) {
		console.log(key);
		if (!key.length) {
			setView(todoList);
			return;
		}
		const results = todoList.filter(([_, title]) => title.includes(key));
		setView(results);
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

			<form
				onSubmit={(e) => {
					e.preventDefault();
					searchTodos(query);
				}}
			>
				<input
					placeholder="search for tasks"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
						searchTodos(e.target.value);
					}}
				/>
				<button type="submit" disabled={!query.length}>
					Search
				</button>
			</form>

			<TodoList
				todoList={view}
				updateFn={updateTodo}
				deleteFn={deleteTodo}
			/>
		</div>
	);
};

export default AddTodo;
