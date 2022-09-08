import Todo from "./Todo";

const TodoList = ({ todoList }) => {
	return (
		<div className="todo-list">
			{todoList.map((todo) => (
				<div className="todo">
					<Todo title={todo} key={todo} />
				</div>
			))}
		</div>
	);
};

export default TodoList;
