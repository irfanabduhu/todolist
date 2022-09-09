import "./Todo.css";
import { useState } from "react";

const Todo = ({ identifier, title, updateFn, deleteFn }) => {
	const [isDone, toggleActivity] = useState(false);

	return (
		<div className="todo">
			<label htmlFor="done" className={isDone ? "done" : ""}>
				<input
					type="checkbox"
					id="check"
					onChange={(e) => toggleActivity(!isDone)}
				/>
				{title}
			</label>
			<a href="#" onClick={() => updateFn(identifier)}>
				Update
			</a>
			<a href="#" onClick={() => deleteFn(identifier)}>
				Delete
			</a>
		</div>
	);
};

export default Todo;
