import { useFetchComments } from '@hooks/useFetchComments.ts';
import { FC } from 'react';
import { Comment } from '@components/Comment/Comment.tsx';
import { IComment } from '@components/Comment/types.ts';

export interface ICommentList {
	id: string;
}

export const CommentList: FC<ICommentList> = ({ id }) => {
	const { comments, loading, error } = useFetchComments(id);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			{comments.map((comment: IComment) => (
				<Comment key={comment.id} {...comment} />
			))}
		</>
	);
};
