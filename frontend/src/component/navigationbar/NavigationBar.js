
import '../style/Navigation.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze'

export default function NavigationBar() {
    return (
        <div className='navigation-item'>
            <div className='hamburger-menu'>
                <label className='menu'>
                    <DehazeIcon
                        style={{ height: '50px', width: '45px' }}
                        className='burger'
                    />
                </label>
            </div>
            
            <nav className='item'>
                <ul className='ul'>
                    <CustomLink to='/home' className='home'>home</CustomLink>
                    <CustomLink to='/profile'>proflie</CustomLink>
                </ul>
            </nav>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
