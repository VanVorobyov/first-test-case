import { FC } from 'react';
import styles from './Comment.module.scss';
import { IComment } from './types';
import defaultimage from '@assets/default-image.jpg';

export const Comment: FC<IComment> = (data: IComment) => {
	const { id, author, description, comment, image } = data;

	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.commentInfo}>
						<h3 className={styles.author}>{author}</h3>
						<p className={styles.description}>{description}</p>
					</div>
					{image || id === 1634 ? ( // тут сделан default image тк есть в макете, но если бекенд не передает картинку будет пустота
						<img
							src={image || defaultimage}
							alt={`Фото ${author}`}
							className={styles.image}
						/>
					) : null}
				</div>
				<p className={styles.comment}>{comment}</p>
			</div>
		</>
	);
};
