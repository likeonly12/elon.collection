import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../LoginModal/LoginModal';
import styles from './Header.module.css';

export default function Header() {
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={styles.headerWrap}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>&#9830;</span>
            <span className={styles.logoText}>elon.collection</span>
          </div>
          {user ? (
            <div className={styles.userArea}>
              <button
                className={styles.userBtn}
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className={styles.avatar}>{user.name.charAt(0).toUpperCase()}</span>
                <span className={styles.userName}>{user.name}</span>
              </button>
              {showMenu && (
                <div className={styles.dropdown}>
                  <p className={styles.dropdownEmail}>{user.email}</p>
                  <button className={styles.logoutBtn} onClick={() => { logout(); setShowMenu(false); }}>
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className={styles.loginBtn} onClick={() => setShowLogin(true)}>
              <span className={styles.loginIcon}>&#8594;</span>
              Login
            </button>
          )}
        </header>
      </div>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
