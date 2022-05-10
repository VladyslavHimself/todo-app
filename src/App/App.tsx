import 'normalize.css';
import './globals.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IRoute } from '../Routes/routes';
import routes from '../Routes/routes';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route: IRoute, index: number) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                        {...routes}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
