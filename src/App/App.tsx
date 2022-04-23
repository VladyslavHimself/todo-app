import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/404';
import Auth from '../Pages/Auth';

import authRoute from '../Routes/auth.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
                {authRoute}
            </Routes>
        </Router>
    );
}

export default App;
