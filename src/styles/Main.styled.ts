import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import theme from '@/styles/theme';
import Link from 'next/link';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: relative;
`;

export const MainFABContainer = styled.div`
  position: fixed;
  bottom: 258px;
  right: calc(50% - ${theme.size.max_width} / 2);
  display: flex;
  flex-direction: column;
  z-index: 3;
`;

export const MainFABButton = styled.button<{ color: string }>`
  cursor: pointer;
  width: 5.8rem;
  height: 4.5rem;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #212121;
  border-radius: 5px 0 0 5px;
  padding: 0 0.8rem;
  background-color: ${({ color }) => color};

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const MainTitleContainer = styled.div`
  padding: ${({ theme }) => theme.padding.mobile};
  background-image: url('/img/MainClothBg.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.3rem;

  h1 {
    margin-top: 10%;
    width: 60%;
    ${({ theme }) => theme.font.bold_30_135};
    color: ${({ theme }) => theme.colors.yolda_black_1};
  }

  p {
    width: 50%;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.yolda_black_1};
  }
`;

export const MainContentContainer = styled.div`
  overflow: hidden;
  margin-top: -10%;
  width: ${theme.size.max_width};
  padding: ${({ theme }) => theme.padding.mobile};
  display: flex;
  flex-direction: column;
  gap: 7.2rem;

  @media (max-width: 420px) {
    width: 100vw;
  }
`;

export const MainButtonGroupContainer = styled.div<{ groupIndex: number }>`
  display: ${({ groupIndex }) => (groupIndex === 2 ? 'flex' : 'grid')};
  flex-direction: column;
`;

export const MainRequestGroupContainer = styled.div`
  display: flex;

  .desc {
    padding: 1rem;
    background: linear-gradient(90deg, #ffffff 23.04%, rgba(255, 255, 255, 0) 100%);
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;

    svg {
      width: 24px;
      height: 24px;
      stroke-width: 1px;
    }

    p {
      ${({ theme }) => theme.font.bold_16};
      font-weight: 500;
    }
  }

  .btn {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;

export const MainRequestButton = styled(motion.button)<{ width?: number }>`
  background-color: ${({ theme }) => theme.colors.main_blue};
  border: 1px solid #212121;
  padding: 1.6rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 19px;
  height: 5.5rem;
  text-align: start;
  cursor: pointer;

  width: ${({ width }) => (width ? `${width}%` : '100%')};
`;

export const MainContentButton = styled.button<{ index?: number }>`
  background-color: #fff;
  border: 1px solid #212121;
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.yolda_black_1};
  font-weight: 500;
  line-height: 19px;
  height: 6rem;
  text-align: left;
  font-size: 1.6rem;
  width: ${({ index }) => (index === 3 ? '80%' : '100%')};
  justify-self: ${({ index }) => (index === 3 ? 'end' : 'start')};
`;

export const MainContentSection = styled.section``;

export const MainPersonButton = styled(MainContentButton)<{ itemIndex: number }>`
  padding: 1rem 1.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: ${({ itemIndex }) => {
    switch (itemIndex) {
      case 0:
        return '45%';
      case 1:
        return '60%';
      case 2:
        return '90%';
    }
  }};

  p {
    ${({ theme }) => theme.font.light_14};
  }

  h2 {
    ${({ theme }) => theme.font.bold_19};
    font-size: 1.6rem;
  }
`;

export const MainPriceButton = styled(MainContentButton)<{ index: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5px;
  padding-left: 15px;
  width: ${({ index }) => {
    switch (index) {
      case 0:
        return '100%';
      case 1:
        return '70%';
      case 2:
        return '50%';
    }
  }};

  color: ${({ theme, index }) => {
    switch (index) {
      case 0:
        return theme.colors.yolda_gray_4;
      case 1:
        return theme.colors.yolda_gray_2;
      case 2:
        return theme.colors.yolda_black_1;
    }
  }};
  text-decoration: ${({ index }) => (index === 1 ? 'line-through' : 'none')};
  p {
    ${({ theme }) => theme.font.light_14};
  }
  h2 {
    ${({ theme }) => theme.font.bold_19};
  }
  svg {
    width: 2rem;
    height: 2rem;
    stroke-width: 0.8px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  .how {
    position: absolute;
    right: -90%;
  }
`;

export const MainPriceContent = styled.div`
  position: relative;
  padding: 1rem 3.6rem 1rem 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  height: fit-content;
  border: 2px solid ${({ theme }) => theme.colors.main_blue};
  border-radius: 5px;

  .head {
    display: flex;
    flex-direction: column;
    gap: 2px;

    p {
      ${({ theme }) => theme.font.light_14};
    }

    h2 {
      ${({ theme }) => theme.font.bold_19};
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.yolda_gray_3};
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    h1 {
      ${({ theme }) => theme.font.bold_24};
    }
    span {
      ${({ theme }) => theme.font.light_14};
      strong {
        ${({ theme }) => theme.font.bold_19};
      }
    }
  }

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    stroke-width: 0.8px;
  }
`;

export const MainSvg = styled.h1<{ index: number }>`
  position: absolute;
  bottom: 0;
  right: 0;

  background-image: ${({ index }) => `url(/icons/${index + 1}-person.svg)`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  width: ${({ index }) => {
    switch (index) {
      case 0:
        return '28px';
      case 1:
        return '54px';
      case 2:
        return '85px';
    }
  }};
  height: 46px;
`;

export const MainDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 3.2rem;
  position: relative;
  z-index: 2;
  &:last-child {
    height: 327px;
    margin-bottom: 17rem;
  }
  p {
    ${({ theme }) => theme.font.light_14};
    font-weight: 400;
  }

  span {
    ${({ theme }) => theme.font.bold_19};
  }

  h1 {
    ${({ theme }) => theme.font.bold_24};
    line-height: 3.2rem;
  }
`;

export const MainReSellerContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.yolda_black_1};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;
  border-radius: 5px;

  h1 {
    width: 100%;
    ${({ theme }) => theme.font.bold_19};
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
  }

  p {
    ${({ theme }) => theme.font.light_14};
  }

  .svg {
    width: 24px;
    height: 24px;
    stroke-width: 1px;
  }
`;

export const MainReSellerTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const MainReSellerTableContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 70px;
  height: 2rem;

  .paragraph {
    display: flex;
    ${({ theme }) => theme.font.light_14};
    flex-wrap: nowrap;
    width: 20rem;
  }
  .graph {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
    p {
      position: absolute;
      right: 0;
      ${({ theme }) => theme.font.light_14};
      color: ${({ theme }) => theme.colors.yolda_black_1};
    }
  }
`;

export const MainReSellerTableGraph = styled(motion.div)<{ graphsize: number }>`
  width: ${({ graphsize }) => {
    switch (graphsize) {
      case 0:
        return '10%';
      case 1:
        return '18%';
      case 2:
        return '27%';
      case 3:
        return '40%';
      case 4:
        return '65%';
    }
  }};
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.sub_blue_2};
  border-radius: 3px;
`;

export const MainMoreReviewButton = styled(Link)`
  display: flex;
  margin-top: 2.4rem;
  justify-content: end;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.main_blue};
  text-decoration-line: underline;
`;

export const MainYoldaService = styled.img`
  width: 360px;
  height: 383px;
  position: absolute;
  border: none;
  right: -50px;
  top: -26px;
  z-index: -9;
`;
