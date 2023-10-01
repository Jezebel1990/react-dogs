import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos} from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Exit} from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
 const { userLogout} = React.useContext(UserContext);
 const navigate = useNavigate();
 function handleLogout() {
   userLogout();
   navigate('/login');
 }

 const mobile = useMedia('(max-width: 40rem)');
const [mobileMenu, setMobileMenu] = React.useState(false);

const { pathname } = useLocation();
React.useEffect(() => {
    setMobileMenu(false);
}, {pathname});

  return (
    <>
    {mobile && (
    <button 
        aria-label="Menu" 
        className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
        }`}
        onClick={() => setMobileMenu(!mobileMenu)}
    ></button>
)}

   <nav 
   className={`${mobile ? styles.navMobile : styles.nav} ${
    mobileMenu && styles.navMobileActive
}`}

    >
    <NavLink to="/account" end>
        <MyPhotos />
        {mobile && 'Minhas Fotos'}
        </NavLink>
    <NavLink to="/account/statistic">
        <Statistics />
        {mobile && 'Estatísticas'}
    </NavLink>
    <NavLink to="/account/post">
        {mobile && 'Adicionar Foto'}
        <AddPhoto />
        </NavLink>
<button onClick={handleLogout}>
    <Exit />
   {mobile && 'Sair'}
    </button>
   </nav>
   </>
  )
};


export default UserHeaderNav
