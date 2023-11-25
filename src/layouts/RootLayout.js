// React outlet
import { Outlet } from 'react-router-dom';

// Navigation menu component
import Navigation from '../components/Navigation';

export default function RootLayout(){
    return(
        <>
            <Navigation />
            <Outlet />
        </>
        
    )
}