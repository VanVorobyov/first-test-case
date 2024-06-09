const useLocalStorage = (key: string) => {
	const addItem = (item: unknown) => {
		localStorage.setItem(key, JSON.stringify(item));
	};
	const getItem = () => {
		return JSON.parse(localStorage.getItem(key) || '[]');
	};

	return { addItem, getItem };
};

export default useLocalStorage;
