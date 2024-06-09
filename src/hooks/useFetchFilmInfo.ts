import { useEffect, useState } from 'react';
import { BASE_URL, UNKNOWN_ERROR } from '@utils/constants.ts';
import { IFilmInfo } from '@components/FilmInfo/types.ts';
import useLocalStorage from '@hooks/useLocalStorage.ts';

export const useFetchFilmInfo = (id: number) => {
	const [filmInfo, setFilmInfo] = useState<IFilmInfo>({} as IFilmInfo);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const { addItem } = useLocalStorage('filmInfo');

	useEffect(() => {
		const fetchFilmInfo = async () => {
			try {
				const response = await fetch(`${BASE_URL}item/${id}`);
				const data = await response.json();
				setFilmInfo(data);
				addItem(filmInfo);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : UNKNOWN_ERROR;
				setError(errorMessage);
			} finally {
				setLoading(false);
			}
		};

		fetchFilmInfo();
	}, [id]);

	return { filmInfo, loading, error };
};
