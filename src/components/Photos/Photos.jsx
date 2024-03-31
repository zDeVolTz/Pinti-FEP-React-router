import style from "./Photos.module.scss";
import { useState, useEffect } from "react";
import { Link , useLocation } from 'react-router-dom';

const Photos = () => {

	const [photos, setPhotos] = useState([]);
	const {search} = useLocation();

    
	
	useEffect(() => {
		const searchParams = new URLSearchParams(search);
		
    	const paramName = searchParams.keys().next().value;
        const paramValue = searchParams.get(paramName);

		fetch(`https://jsonplaceholder.typicode.com/photos?${paramName}=${paramValue}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Сервер ушел за печенькой");
				}
				return response.json();
			})
			.then((data) => {
				setPhotos(data.map((item) => ({
					id: item.id,
					albumId: item.albumId,
					title : item.title,
					url : item.url
				})));
			})
			.catch((error) => {
				alert("Не удалось получить данные");
			});
	}, [search]);

		return (
			<section className={style.photos}>
				<div className={style.photosList} >
					{photos.map(element => (
						<div key={element.id} className={style.photosList__block}>
							<img src={element.url} alt="/" />
							{element.title}
						</div>
					))}
				</div>
			</section>
		);
}

export default Photos
