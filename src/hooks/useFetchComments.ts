import { useEffect, useState } from 'react';
import { BASE_URL, UNKNOWN_ERROR } from '@utils/constants.ts';
import { IComment } from '@components/Comment/types.ts';

export const useFetchComments = (id: number) => {
	const [comments, setComments] = useState<IComment[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const response = await fetch(`${BASE_URL}comments/${id}`);
				const data = await response.json();
				const comments = data.comments;
				setComments(comments);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : UNKNOWN_ERROR;
				setError(errorMessage);
			} finally {
				setLoading(false);
			}
		};

		fetchComments();
	}, [id]);

	return { comments, loading, error };
};
