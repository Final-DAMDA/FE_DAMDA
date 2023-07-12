import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { motion } from 'framer-motion';

export const Header = styled.header<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 25px;
  width: 100%;
  height: ${theme.size.header_height};
  background-color: rgba(255, 255, 255, 0.55);
  /* background-color: ${({ isMenuOpen }) => (isMenuOpen ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.55)')}; */
  backdrop-filter: blur(4px);
  transition: background-color 0.2s;
  z-index: 10;
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  padding: 0 2px;
  border: 1px solid ${theme.colors.main_blue};
  border-radius: 4px;

  img {
    object-fit: cover;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;

export const Logo = styled.h1`
  a,
  p {
    display: block;
    width: 60px;
    height: 40px;
    background-image: url('/icons/Yolda_logo.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  a {
    cursor: pointer;
  }
  p {
    cursor: default;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 12px;
`;

export const EstimateButton = styled(motion.button)`
  border: none;
  outline: none;
  width: 88px;
  height: 35px;
  color: #fff;
  font-weight: 500;
  font-size: 1.6rem;
  background-color: ${theme.colors.main_blue};
  border-radius: 6px;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const LoginButton = styled(Icon)`
  background-image: url('/icons/login-icon.svg');
  a {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const SideMenuButton = styled(Icon)<{ isMenuOpen: boolean }>`
  background-image: ${({ isMenuOpen }) =>
    isMenuOpen ? "url('/icons/close-icon.svg')" : "url('/icons/menu-icon.svg')"};
  transition: all 0.2s;
`;
