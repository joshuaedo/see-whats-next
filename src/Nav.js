import './Nav.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { photoURLState } from './atoms/photoAtom.js';

export default function Nav() {
  const navigate = useNavigate();
  const [show, handleShow] = useState(false);
  const [userImg, setUserImg] = useRecoilState(photoURLState);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <>
      <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
          <img
            onClick={() => navigate('/')}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427'
            alt='see-whats-next logo'
            className='nav__logo'
          />
          <img
            onClick={() => navigate('/profile')}
            src={
              userImg
                ? userImg
                : 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
            }
            alt='avatar'
            className='nav__avatar'
          />
        </div>
      </div>
    </>
  );
}
