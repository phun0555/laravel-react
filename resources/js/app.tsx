import React from 'react';
import ReactDOM from 'react-dom/client';
import Fruit from './pages/Fruit'; // หรือหน้าหลักที่คุณใช้

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
    <React.StrictMode>
        <Fruit />
    </React.StrictMode>
);
