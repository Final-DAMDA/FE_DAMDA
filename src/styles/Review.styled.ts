import styled from '@emotion/styled';
import theme from './theme';


export const ReviewContainer = styled.div``;

export const TitleLarge = styled.h2`
  padding: 25px;
  ${theme.font.bold_24}


  span {
    display: block;
    line-height: 1.6;
  }
`;

export const TitleMedium = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 12px 0;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Description = styled.p`
  padding: 0 25px;
  line-height: 1.6;

  span {
    display: block;
  }
`;

export const SlideContainer = styled.div``;

export const Slider = styled.div``;

export const Reviews = styled.div`
  padding: 0 25px;
`;

export const BestReview = styled.div``;

export const AllReview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const Pagenation = styled.div`
  padding: 25px;
`;
