import * as S from './style';
import HeaderLayout from './HeaderLayout';
import { useEffect, useState, useContext } from 'react';
import Menu from './Menu';
import useAuthStore from '@/store/auth';
import { useRouter } from 'next/router';
import { HeaderContext } from '../Layout';
import { useAuth } from '@/hook/useAuth';

function Header() {
  const router = useRouter();
  const { user } = useAuthStore((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const getUserData = useAuth();
  const context = useContext(HeaderContext);

  const toSurvey = () => {
    if (context?.isInView) return;
    router.push('/usersurvey');
  };

  useEffect(() => {
    // getUserData();
  }, []);

  return (
    <>
      <S.Header isMenuOpen={isMenuOpen}>
        <HeaderLayout
          user={user}
          isMenuOpen={isMenuOpen}
          menuHandler={setIsMenuOpen}
          toSurvey={toSurvey}
          isInView={context?.isInView}
        />
      </S.Header>
      <Menu isMenuOpen={isMenuOpen} menuHandler={setIsMenuOpen} />
    </>
  );
}

export default Header;
