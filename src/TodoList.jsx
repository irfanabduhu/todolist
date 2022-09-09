import Todo from "./Todo";

const TodoList = ({ todoList, updateFn, deleteFn }) => {
	return (
		<div className="todo-list">
			{todoList.map(([id, todo]) => (
				<div className="todo" key={`div-${id}`}>
					<Todo
						title={todo}
						key={id}
						identifier={id}
						updateFn={updateFn}
						deleteFn={deleteFn}
					/>
				</div>
			))}
		</div>
	);
};

export default TodoList;
