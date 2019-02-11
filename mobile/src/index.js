import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);
YellowBox.ignoreWarnings(['Possible Unhandled']);

import Routes from './routes';

const App = () => <Routes />;

export default App;
