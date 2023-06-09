import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - ${theme.size.max_width} / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${theme.size.max_width};
  height: 100%;
  background-color: rgba(66, 66, 66, 0.88);
  z-index: 20;

  @media screen and (min-width: 810px) {
    position: absolute;
    top: -52px;
    left: 0;
    align-items: flex-start;
    height: 100%;
  }
`;

export const Modal = styled.div<{ textCenter: boolean }>`
  width: 346px;
  height: 348px;
  z-index: 20;
  padding: 58px 16px;
  border: 1px solid ${theme.colors.yolda_black_1};
  border-radius: 5px;
  background-color: #ffffff;
  text-align: ${({ textCenter }) => textCenter && 'center'};

  @media screen and (min-width: 810px) {
    position: sticky;
    top: calc(344px / 2);
  }

  img {
    display: inline-block;
    margin-bottom: 16px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-bottom: 26px;
    font-size: 18px;
    font-weight: 800;
    line-height: 135%;
  }

  p {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 135%;
  }

  strong {
    display: block;
    margin-bottom: 39px;
    font-weight: 600;
  }
`;

export const ButtonGrop = styled.div<{ isLoading?: boolean }>`
  display: flex;
  width: 100%;

  button {
    flex-grow: 1;
    flex-basis: 0;
    height: 55px;
    border: none;
    border-radius: 5px;
    color: ${theme.colors.yolda_gray_2};
    font-size: 19px;
    font-weight: 800;
    line-height: 160%;
    background-color: transparent;
    outline: none;
    cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};

    &:first-of-type {
      margin-right: 6px;
    }

    &:last-of-type {
      border: 1px solid ${({ isLoading }) => (isLoading ? theme.colors.yolda_gray_4 : theme.colors.yolda_black_1)};
      color: ${({ isLoading }) => (isLoading ? theme.colors.yolda_gray_4 : '#ffffff')};
      background-color: ${({ isLoading }) => (isLoading ? '#ffffff' : theme.colors.main_blue)};
    }
  }
`;
