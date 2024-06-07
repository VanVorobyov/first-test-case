import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from '@/pages/Layout/Layout.tsx';
import '@/utils/normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>,
);
