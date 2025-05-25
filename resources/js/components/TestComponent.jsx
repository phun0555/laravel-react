import React from 'react';
import ReactDOM from 'react-dom/client';

function TestComponent() {
    return (
        <div>
            <h1>Hello from React!</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TestComponent />);