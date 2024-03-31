import style from "./Albums.module.scss";
import { useState, useEffect } from "react";
import { Link , useRouteMatch , useLocation } from 'react-router-dom';

const Albums = () => {

	const [albums, setAlbums] = useState([]);
	const { path } = useRouteMatch();
	const {search} = useLocation();

    
	
	useEffect(() => {
		const searchParams = new URLSearchParams(search);
		
    	const paramName = searchParams.keys().next().value;
        const paramValue = searchParams.get(paramName);

		fetch(`https://jsonplaceholder.typicode.com/albums?${paramName}=${paramValue}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Сервер ушел за печенькой");
				}
				return response.json();
			})
			.then((data) => {
				setAlbums(data.map((item) => ({
					id: item.id,
					userId: item.userId,
					title : item.title
				})));
			})
			.catch((error) => {
				alert("Не удалось получить данные");
			});
	}, [search]);

		return (
			<section className={style.albums}>
				<div className={style.albumsList} >
					<ul>
					{albums.map(element => (
						<li key={element.id}>
							<Link to={`${path}/photos?albumId=${element.id}`}>
								{element.title}
							</Link>
						</li>
					))}
					</ul>
				</div>
			</section>
		);
}

export default Albums
