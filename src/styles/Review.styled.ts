import styled from '@emotion/styled';
import theme from './theme';

export const ReviewContainer = styled.div`
  padding-top: 92px;
`;

export const TitleLarge = styled.h2`
  margin-bottom: 20px;
  padding: 0 20px;
  ${theme.font.bold_24}
  cursor: default;

  span {
    display: block;
    line-height: 1.35;
  }
`;

export const TitleMedium = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 53px 0 17px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: default;
`;

export const Description = styled.p`
  position: relative;
  padding: 0 20px;
  line-height: 1.6;
  cursor: default;
  z-index: 1;

  span {
    display: block;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  margin-top: -20px;
  width: ${theme.size.max_width};
  height: calc(130px * 2 + 14px);
  overflow: hidden;

  @media (max-width: 420px) {
    width: 100vw;
  }

  &::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 66px;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
  }
`;

export const ScrollDown = styled.div<{ isInView: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 30px;
  opacity: ${({ isInView }) => (isInView ? 0 : 1)};
  transition: opacity 0.5s;
  cursor: default;
`;

export const Reviews = styled.div`
  padding: 0 20px;
`;

export const AllReview = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Pagenation = styled.div`
  ${theme.font.regular_14}
  padding: 20px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;

    .disabled {
    }

    .active {
      ${theme.font.bold_14}
      color: ${theme.colors.main_blue};
    }

    .prev {
      display: block;
      width: 14px;
      height: 14px;
      text-indent: -9999px;
      background-image: url('/icons/angle-left.svg');
    }

    .next {
      display: block;
      width: 14px;
      height: 14px;
      text-indent: -9999px;
      background-image: url('/icons/angle-right.svg');
    }
  }
`;
