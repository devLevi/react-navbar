import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigation-bar';
import './index.css';

const links = [
    {
        text: 'Discover App',
        href: 'https://devlevi.github.io/Discover-App/'
    },
    {
        text: 'Tripbook',
        href: 'https://node-tripbook-app.herokuapp.com/'
    }
];

ReactDOM.render(
    <NavigationBar title="Levi's Capstone Projects" links={links} />,
    document.getElementById('root')
);
