import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges from React</h1>
const name = 'Richard';
const element = React.createElement('h1', {}, `Hello ${name}`);
const container = document.getElementById('app');
const jsx = 
    <div>
        <h1>Hello</h1>
        <p>I'm an engineer</p>
    </div>

ReactDOM.render(jsx, container);