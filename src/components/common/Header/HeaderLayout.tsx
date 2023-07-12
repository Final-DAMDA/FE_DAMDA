import * as S from './style';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; // useRouter hook을 추가하여 현재 페이지의 경로를 가져옵니다.
import { UserState } from '@/store/auth';

interface HeaderProps {
  user: UserState;
  isMenuOpen: boolean;
  menuHandler: React.Dispatch<React.SetStateAction<boolean>>;
  toSurvey: () => void;
  isInView: boolean | undefined;
}

function HeaderLayout({ user, isMenuOpen, menuHandler, toSurvey, isInView }: HeaderProps) {
  const router = useRouter(); // useRouter hook을 사용하여 현재 페이지의 경로를 가져옵니다.
  const { pathname } = router; // 현재 페이지의 경로를 pathname 변수에 할당합니다.
  console.log(user.data);
  return (
    <>
      <S.Logo className="ir-text">
        {pathname !== '/manager/accept' && pathname !== '/manager/completed' && pathname !== '/completed-user' ? (
          <Link href={'/'}>열다</Link>
        ) : (
          <p>열다</p>
        )}
      </S.Logo>
      {/* pathname 값을 비교하여 조건에 맞는 경우에만 HeaderButtons 컴포넌트를 렌더링 */}
      {pathname !== '/manager/accept' &&
        pathname !== '/manager/completed' &&
        pathname !== '/completed-user' &&
        pathname !== '/manager/completed/success' && (
          <S.HeaderButtons>
            <S.EstimateButton
              onClick={toSurvey}
              initial={{ opacity: 1 }}
              animate={{ opacity: isInView ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              무료견적
            </S.EstimateButton>
            <S.LoginButton className="ir-text">
              {user.data ? (
                <S.ProfileImage>
                  <Image src={user.data.profileImage} alt="profileImage" fill />
                </S.ProfileImage>
              ) : (
                <Link href={'/login'}>login</Link>
              )}
            </S.LoginButton>
            <S.SideMenuButton className="ir-text" isMenuOpen={isMenuOpen} onClick={() => menuHandler((prev) => !prev)}>
              menu
            </S.SideMenuButton>
          </S.HeaderButtons>
        )}
    </>
  );
}

export default HeaderLayout;
