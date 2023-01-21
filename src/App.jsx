import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

function App() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default App;
