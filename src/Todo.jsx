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
			<button className="link-btn" onClick={() => updateFn(identifier)}>
				Update
			</button>
			<button className="link-btn" onClick={() => deleteFn(identifier)}>
				Delete
			</button>
		</div>
	);
};

export default Todo;
