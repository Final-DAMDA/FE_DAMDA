import * as S from './style';
import HeaderLayout from './HeaderLayout';
import { useState } from 'react';
import Menu from './Menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <S.Header isMenuOpen={isMenuOpen}>
        <HeaderLayout isMenuOpen={isMenuOpen} menuHandler={menuHandler} />
      </S.Header>
      <Menu isMenuOpen={isMenuOpen} menuHandler={menuHandler} />
    </>

  );
}

export default Header;
