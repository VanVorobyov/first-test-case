import { useEffect, useState } from 'react';
import { BASE_URL, UNKNOWN_ERROR } from '@utils/constants.ts';
import { ICard } from '@components/Card/types.ts';

export const useFetchCards = () => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const response = await fetch(`${BASE_URL}list/`);
				const cards = await response.json();
				setCards(cards);

				console.log(`cards --> `, cards);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : UNKNOWN_ERROR;
				setError(errorMessage);
			} finally {
				setLoading(false);
			}
		};

		fetchCards();
	}, []);

	return { cards, loading, error };
};
