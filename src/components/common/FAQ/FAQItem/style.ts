import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const FAQItem = styled.li<{ isFAQOpen: boolean }>`
  width: 320px;
  margin-top: ${({ isFAQOpen }) => (isFAQOpen ? '-2px' : '-1px')};
  background-color: #ffffff;
  list-style: none;
  border-radius: 5px;
  cursor: pointer;
  border: ${({ isFAQOpen }) => (isFAQOpen ? '2px' : '1px')} solid
    ${({ isFAQOpen }) => (isFAQOpen ? theme.colors.main_blue : theme.colors.yolda_black_1)};
`;

export const FAQCard = styled.article`
  position: relative;
  padding: 10px 36px 10px 10px;
  font-size: 14px;
  line-height: 160%;

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
  }
`;

export const CardHeader = styled.header`
  strong {
    margin-bottom: 2px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 135%;
  }
`;

export const CardContent = styled.div<{ isFAQOpen: boolean }>`
  ${({ isFAQOpen }) =>
    isFAQOpen &&
    css`
      padding-top: 10px;
      margin-top: 10px;
      border-top: 1px solid ${theme.colors.yolda_black_1};
    `}
  transition: height 200ms ease-in-out;
  overflow: hidden;

  strong {
    font-weight: 700;
  }

  a {
    color: ${({ theme }) => theme.colors.sub_blue_2};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.sub_blue_1};
      text-decoration: none;
    }
  }

  p {
    white-space: pre-wrap;
  }
`;
