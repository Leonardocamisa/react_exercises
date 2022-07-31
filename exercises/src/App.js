import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
	render() {
		return (
			<>
				<div>
					<TodoList
						render={(items,newState,deleteState) => {
							const itemsCopy = [...items.items];
							return (
								<ul className="list">
									{itemsCopy.map((el, i) => (
										<div key={i}>
											<li>
												{el}
												<button
													onClick={() => {deleteState(itemsCopy,i);newState(itemsCopy)}
													}
												>
													CLEAR
												</button>
											</li>
										</div>
									))
                }
								</ul>
							);
						}}
					
          setState = ""/>
				</div>
			</>
		);
	}
}

export default App;
