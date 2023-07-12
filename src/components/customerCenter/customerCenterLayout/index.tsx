import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getFAQs } from '@/apis/support';
import { dummyFAQ as faqs } from '@/constants/dummyFAQ';

import FrequentlyAskedQuestions from '@/components/common/FAQ/FrequentlyAskedQuestions';
import Category from '../Category';
import customerCenterImg from 'public/img/customerServiceCenter.png';

import * as S from './style';
import { faqType } from '@/types/constants/faqType';

function CustomerCenterLayout() {
  // const { data: faqs } = useQuery({
  //   queryKey: ['faqs'],
  //   queryFn: getFAQs,
  // });

  const [data, setData] = useState<faqType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('전체');

  useEffect(() => {
    const allCategories = ['전체', ...new Set(faqs?.map((faq: faqType) => faq.qnaCategory) as string[])];
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    setData(faqs);
  }, []);

  const filterFAQHandler = (category: string) => {
    if (category === '전체') return setData(faqs);
    const newData = faqs?.filter((faq: faqType) => faq.qnaCategory === category);
    setData(newData);
  };

  return (
    <>
      <S.CustomerCenterHeader style={{ marginTop: '-52px' }}>
        <Image src={customerCenterImg} alt="고객센터 페이지 이미지" fill />

        <S.Description>
          <h2>고객센터</h2>
          <p>열다에 대한 궁금증을 해소하세요!</p>
        </S.Description>
      </S.CustomerCenterHeader>

      <S.CustomerCenterContent>
        <S.Title>자주 묻는 질문</S.Title>

        <Category
          categories={categories}
          filterFAQHandler={filterFAQHandler}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <FrequentlyAskedQuestions type="support" enteredFAQs={data} />

        <S.PersonalConsultation>
          <h2>
            찾으시는
            <br /> 내용이 없으신가요?
          </h2>

          <Link href="https://www.yolda.me/login/chat" target="_blank" rel="noopener noreferrer">
            1:1 상담 신청
          </Link>
        </S.PersonalConsultation>
      </S.CustomerCenterContent>
    </>
  );
}

export default CustomerCenterLayout;
