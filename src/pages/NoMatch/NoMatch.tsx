import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NoMatch: FC = () => {
	return (
		<>
			<h1 style={{ color: 'white' }}>404 Страница не найдена</h1>
			<Link
				to={'/'}
				style={{
					color: 'white',
					textDecoration: 'underline',
					fontSize: '20px',
				}}
			>
				Вернуться на главную
			</Link>
		</>
	);
};
