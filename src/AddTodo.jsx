import { useState } from "react";
import TodoList from "./TodoList";

const todoList = [];

const AddTodo = () => {
	const [title, setTitle] = useState("");

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					todoList.push(title);
					console.log(todoList);
					setTitle("");
				}}
			>
				<input
					id="title"
					placeholder="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button>Add</button>
			</form>

			<TodoList todoList={todoList} />
		</div>
	);
};

export default AddTodo;
