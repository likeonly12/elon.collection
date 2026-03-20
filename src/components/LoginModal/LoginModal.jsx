import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './LoginModal.module.css';

export default function LoginModal({ onClose }) {
  const { signup, login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      const result = signup(name, email, password);
      if (!result.success) {
        setError(result.error);
        return;
      }
    } else {
      const result = login(email, password);
      if (!result.success) {
        setError(result.error);
        return;
      }
    }

    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&#10005;</button>
        <h2 className={styles.title}>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
        <p className={styles.subtitle}>
          {isSignUp ? 'Join the elon.collection community' : 'Sign in to your account'}
        </p>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className={styles.submitBtn} type="submit">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p className={styles.switch}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button className={styles.switchBtn} onClick={() => { setIsSignUp(!isSignUp); setError(''); }}>
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}
