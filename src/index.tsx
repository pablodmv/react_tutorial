import Hello from './components/Hello';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Hello name="Typescript " enthusiasmLevel={10} />,
document.getElementById('root') as HTMLElement
);
registerServiceWorker();
