import "./Todo.css";
import { useState } from "react";

const Todo = ({ title }) => {
	const [isDone, toggleActivity] = useState(false);

	return (
		<div className="todo">
			<label htmlFor="done" className={isDone ? "done" : ""}>
				<input
					type="checkbox"
					id="done"
					onChange={(e) => toggleActivity(!isDone)}
				/>
				{title}
			</label>
			<a href="update">Update Todo</a>
			<a href="delete">Delete Todo</a>
		</div>
	);
};

export default Todo;
