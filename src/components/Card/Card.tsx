import { FC } from 'react';
import styles from './Card.module.scss';
import { ICard } from './types';
import defaultimage from '@assets/default-image.jpg';

export const Card: FC = () => {
	const data: ICard[] = [
		{
			id: 321,
			image: 'https://picsum.photos/id/321/488/275',
			title: 'Вечерний Ургант',
			description: '1336 выпуск от 03.07.2020',
			text: 'Сергей Смирнов — один из лучших «охотников на маньяков» в Москве. По особому приглашению губернатора он приступает к расследованию похищений и убийств мальчиков в родном городе — Хрустальном. По особому приглашению губернатора он приступает к расследованию похищений и убийств мальчиков в родном городе — Хрустальном. По особому...',
			detail: 'http://fedevofferapi-info3.b4a.run/item/321',
		},
	];

	const { title, description, image, text } = data[0];

	// const handleClick = () => {
	// 	window.open(detail, '_blank');
	// };

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
						СМОТРЕТЬ
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
