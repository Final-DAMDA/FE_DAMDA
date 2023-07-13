import { BestReviewRes, ReviewRes } from '@/types/review';
import { instance } from './instance';

export const getReviews = async () => {
  const res = await instance.get<ReviewRes>('/user/review/list');
  return res.data;
};

export const getBestReview = async () => {
  const res = await instance.get<BestReviewRes>('/review/best');
  return res.data;
};
