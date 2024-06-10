import { FC } from 'react';
import styles from './CardList.module.scss';
import { useFetchCards } from '@hooks/useFetchCards.ts';
import { Card } from '@components/Card/Card.tsx';
import { ICard } from '@components/Card/types.ts';
import { UNKNOWN_ERROR } from '@utils/constants.ts';

export const CardList: FC = () => {
	const { cards, loading, error } = useFetchCards();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{UNKNOWN_ERROR}</div>;
	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{cards &&
					cards.map((card: ICard) => (
						<li className={styles.list_item}>
							<Card key={card.id} {...card} />
						</li>
					))}
			</ul>
		</div>
	);
};
