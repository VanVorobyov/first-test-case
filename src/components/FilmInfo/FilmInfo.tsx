import styles from './FilmInfo.module.scss';
import { IFilmInfo } from '@components/FilmInfo/types.ts';
import { ButtonWidget } from '@components/ButtonWidget/ButtonWidget.tsx';

export const FilmInfo = (data: IFilmInfo) => {
	const {
		title,
		image,
		genre,
		production: { year, country },
		labels: { fullhd, subtitles, age_restrictions },
	} = data;

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.film_wrapper}>
					<h2 className={styles.film_title}>{title}</h2>
					<div className={styles.film_info}>
						<div className={styles.film_subtitle_wrapper}>
							{fullhd && <span className={styles.film_subtitle}>Full HD</span>}
							{subtitles && <span className={styles.film_subtitle}>СУБ</span>}
							{age_restrictions && (
								<span className={styles.film_subtitle}>{age_restrictions}</span>
							)}
						</div>
						<div className={styles.film_production_wrapper}>
							{year && (
								<>
									<span className={styles.film_production}>{year}</span>
									<span className={styles.film_production}>&#183;</span>
								</>
							)}

							{genre.map((item, index) => (
								<span key={index} className={styles.film_production}>
									{item}
								</span>
							))}
							{country && (
								<span className={styles.film_production}>{country}</span>
							)}
						</div>
						<div className={styles.film_rating_wrapper}>
							<div className={styles.film_rating_logo}></div>
							<div className={styles.film_rating}>7.1</div>
						</div>
					</div>
				</div>
				<ButtonWidget />
			</div>
			<img
				className={styles.film_image}
				src={image}
				alt={`Обложка фильма "${title}"`}
			/>
		</div>
	);
};
