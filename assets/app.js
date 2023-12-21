import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import HabitantForm from './react/controllers/HabitantForm.jsx';
import ListHabitants from './react/controllers/ListHabitants.jsx';

const root = ReactDOM.createRoot(
    document.getElementById('mon-composant')
);

root.render(
    <React.StrictMode>
        <HabitantForm/>
        <ListHabitants/>
    </React.StrictMode>
)


