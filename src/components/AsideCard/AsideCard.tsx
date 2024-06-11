import styles from './AsideCard.module.scss';
import image from '@assets/image.jpg';

export const AsideCard = () => {
	return (
		<article className={styles.container}>
			<div className={styles.card}>
				<img
					src={image}
					alt={`Изображение рекламы`}
					className={styles.card_image}
				/>
			</div>
		</article>
	);
};
