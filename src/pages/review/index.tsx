import React, { useEffect, useState } from 'react';
import * as S from '../../styles/Review.styled';
import ReviewLayout from '@/components/review/ReviewLayout';
import { BestReviewRes, ReviewData, ReviewRes } from '@/types/review';
import { getBestReview, getReviews } from '@/apis/review';
import { bestReviewDummy, reviewDummy } from '@/constants/dummyRevies';

interface ReviewPageProps {
  reviews: ReviewRes;
  bestReview: BestReviewRes;
}

// export const getStaticProps = async () => {
//   let reviews;
//   let bestReview;
//   try {
//     reviews = await getReviews();
//   } catch (err) {
//     reviews = {
//       data: [bestReviewDummy],
//     };
//   }

//   try {
//     bestReview = await getBestReview();
//   } catch (err) {
//     bestReview = {
//       data: bestReviewDummy,
//     };
//   }
//   return { props: { reviews: reviews, bestReview: bestReview }, revalidate: 60 * 60 };
// };

function ReviewPage({ reviews, bestReview }: ReviewPageProps) {
  const [page, setPage] = useState(1);
  const [totalReviewCount, setToTalReviewCount] = useState(reviewDummy.length);
  // const [totalReviewCount, setToTalReviewCount] = useState(reviews.data.length);
  const [pagedReviews, setPagedReviews] = useState<ReviewData[]>([]);

  const reviewPaging = (page: number) => {
    setPage(page);
    const startIdx = (page - 1) * 3;
    const endIdx = startIdx + 3;
    // const filteredReviews = reviews.data.filter((reviewDummy, idx) => idx >= startIdx && endIdx > idx);
    const filteredReviews = reviewDummy.filter((reviewDummy, idx) => idx >= startIdx && endIdx > idx);
    setPagedReviews(filteredReviews);
  };

  useEffect(() => {
    reviewPaging(page);
  }, []);

  useEffect(() => {
    // if (!reviews) return;
    setToTalReviewCount(reviewDummy.length);
    // setToTalReviewCount(reviews.data.length);
    reviewPaging(1);
  }, []);
  // }, [reviews]);

  return (
    <S.ReviewContainer>
      <ReviewLayout
        posts={pagedReviews}
        // bestReview={bestReview.data}
        bestReview={bestReviewDummy}
        page={page}
        pageLength={totalReviewCount}
        pagingHandler={reviewPaging}
      />
    </S.ReviewContainer>
  );
}

export default ReviewPage;
