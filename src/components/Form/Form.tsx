import { FC, useState } from 'react';
import styles from './Form.module.scss';
import { Button } from '@components/Button/Button.tsx';
import { BASE_URL } from '@utils/constants.ts';
import clsx from 'clsx';

export type IFormProps = {
	id: string;
};

export const Form: FC<IFormProps> = ({ id }) => {
	const [title, setTitle] = useState('');
	const [city, setCity] = useState('');
	const [description, setDescription] = useState('');
	const [error, setError] = useState({ title: '', city: '' });
	const [btnTitle, setbtnTitle] = useState('отправить');
	const [isError, setIsError] = useState(false);
	const [isSuccess, setisSuccess] = useState(false);

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		if (!title || !city) {
			setError({
				title: 'Поле не заполнено',
				city: 'Поле не заполнено',
			});
			return;
		}

		if (title && city) {
			setError({
				title: '',
				city: '',
			});

			fetch(`${BASE_URL}comments/post/${id}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, city, description }),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setbtnTitle('Отправлено');
					setisSuccess(true);
				})
				.catch((error) => {
					console.error(error);
					setIsError(true);
					setbtnTitle('Произошла ошибка');
					setTimeout(() => {
						setIsError(false);
						setbtnTitle('Отправить');
					}, 3000);
				});
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.input_wrapper}>
				<label
					htmlFor={'name'}
					className={clsx(styles.label, {
						[styles.label_error]: error.title,
					})}
					aria-required="true"
				>
					Фамилия, имя, отчество
				</label>
				<input
					className={clsx(styles.input, {
						[styles.input_error]: error.title,
					})}
					type="text"
					value={title}
					name={'name'}
					onChange={(event) => setTitle(event.target.value)}
				/>
				{error.title && <span className={styles.error}>{error.title}</span>}
			</div>
			<div className={styles.input_wrapper}>
				<label
					htmlFor={'city'}
					className={clsx(styles.label, {
						[styles.label_error]: error.city,
					})}
					aria-required="true"
				>
					Город
				</label>
				<input
					id={'city'}
					className={clsx(styles.input, {
						[styles.input_error]: error.city,
					})}
					type="text"
					value={city}
					name={'city'}
					onChange={(event) => setCity(event.target.value)}
				/>
				{error.title && <span className={styles.error}>{error.title}</span>}
			</div>
			<div className={styles.input_wrapper}>
				<label htmlFor={'description'} className={styles.label}>
					Ваше мнение
				</label>
				<textarea
					className={styles.textarea}
					value={description}
					name={'description'}
					onChange={(event) => setDescription(event.target.value)}
				/>
			</div>
			<Button
				title={btnTitle}
				isSecondary={isSuccess}
				isError={isError}
				type="submit"
				width={'limited'}
			/>
		</form>
	);
};
