import { FC } from 'react';
import styles from './Card.module.scss';
import { ICard } from './types';
import defaultimage from '@assets/default-image.jpg';
import { Link } from 'react-router-dom';

export const Card: FC<ICard> = (data: ICard) => {
	const { id, title, description, image, text } = data;

	return (
		<article className={styles.container}>
			<div className={styles.card}>
				<img
					src={image || defaultimage}
					alt={`Изображение ${title}`}
					className={styles.card_image}
				/>
				<div className={styles.card_info}>
					<p className={styles.card_detail_text}>{text}</p>
					<button className={styles.card_detail_button} type="button">
						<Link className={styles.card_detail_link} to={`/about/${id}`}>
							СМОТРЕТЬ
						</Link>
					</button>
				</div>
			</div>
			<div>
				<p className={styles.card_title}>{title}</p>
				<p className={styles.card_description}>{description}</p>
			</div>
		</article>
	);
};
