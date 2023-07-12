import React, { useEffect, useState } from 'react';
import * as S from '@/styles/Main.styled';
import Carousel from '@/components/common/Carousel';
import { useQuery } from '@tanstack/react-query';
import { getReviews } from '@/apis/review';
import { ReviewData } from '@/types/review';
import { reviewDummy } from '@/constants/dummyRevies';

function UserReview() {
  // const { data: review } = useQuery(['review'], getReviews);
  const [reviewData, setReviewData] = useState<ReviewData[]>();

  useEffect(() => {
    const bestReview = reviewDummy.filter((item) => item.bestReview)[0];
    const firstItem = reviewDummy.filter((item) => !item.bestReview)[0];

    setReviewData([bestReview, firstItem]);
  }, []);
  // useEffect(() => {
  //   if (!review) return;
  //   console.log(review.data);

  //   const bestReview = review?.data.filter((item) => item.bestReview)[0];
  //   const firstItem = review?.data.filter((item) => !item.bestReview)[0];

  //   setReviewData([bestReview, firstItem]);
  // }, [review]);

  return (
    <>
      {!reviewData && (
        <S.MainTitleContainer>
          <h1>후기를 불러오는 중입니다...</h1>
          <p>만약 오랜 시간 동안 불러와지지 않는 다면 관리자에게 즉시 연락해주세요!</p>
        </S.MainTitleContainer>
      )}
      {reviewData && <Carousel carouselItems={reviewData} height={32} width={100} />}
      <S.MainMoreReviewButton href={'/review'}>더 많은 후기 보러가기</S.MainMoreReviewButton>
    </>
  );
}

export default UserReview;
