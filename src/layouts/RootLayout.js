import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function RootLayout(){
    return(
        <>
            <Navigation />
            <Outlet />
        </>
        
    )
}