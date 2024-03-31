import { useState, useEffect } from "react";
import style from "./Users.module.scss";
import { Link , useRouteMatch } from 'react-router-dom';

const Users = () => {
	
	const [users, setUsers] = useState([]);
	const { path } = useRouteMatch();

	useEffect(() => {

		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Сервер ушел за печенькой");
				}
				return response.json();
			})
			.then((data) => {
				setUsers(data.map((item) => ({
					id: item.id,
					name: item.name,
					username : item.username
				})));
			})
			.catch((error) => {
				alert("Не удалось получить данные");
			});
	}, []);

		return (
			<section className={style.users}>
				<div className={style.usersList} >
					<ul>
					{users.map(element => (
						<li key={element.id}>
							<Link to={`${path}/albums?userId=${element.id}`}>
								{element.username} : {element.name}
							</Link>
						</li>
					))}
					</ul>
				</div>
			</section>
		);
}

export default Users;
