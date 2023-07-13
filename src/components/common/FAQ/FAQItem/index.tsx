import React, { useEffect, useRef, useState } from 'react';
import { replaceStringsWithTags } from '@/utils';

import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';
import { faqType } from '@/types/constants/faqType';

import * as S from './style';

interface FAQItemProps {
  type: string;
  faq: faqType;
  index: number;
}

function FAQItem({ type, faq, index }: FAQItemProps) {
  const [isFAQOpen, setIsFAQOpen] = useState(index === 0 ? true : false);
  const [height, setHeight] = useState<string>('');
  const descRef = useRef<HTMLDivElement | null>(null);
  const { title, contents, info, qnaCategory } = faq;

  const renderFaqCategory = () => {
    let transformedCategory;
    switch (qnaCategory) {
      case 'PRICE':
        return (transformedCategory = '가격');

      case 'SERVICE':
        return (transformedCategory = '서비스 관련');

      case 'ETC':
        return (transformedCategory = '기타');

      default:
        break;
    }
  };

  useEffect(() => {
    if (descRef.current !== null) {
      setHeight(isFAQOpen ? `${descRef.current.getBoundingClientRect().height + 16}px` : '0px');
    }
  }, [descRef, isFAQOpen]);

  return (
    <S.FAQItem onClick={() => setIsFAQOpen(!isFAQOpen)} isFAQOpen={isFAQOpen}>
      <S.FAQCard>
        {isFAQOpen ? <FiArrowUpLeft /> : <FiArrowDownRight />}

        <S.CardHeader>
          <strong>{info || renderFaqCategory()}</strong>
          <h3>{title}</h3>
        </S.CardHeader>

        <S.CardContent isFAQOpen={isFAQOpen} style={{ height }}>
          <hr />
          {type === 'manager-apply' && <p dangerouslySetInnerHTML={replaceStringsWithTags(contents)} ref={descRef}></p>}
          {type === 'support' && <p ref={descRef}>{contents}</p>}
        </S.CardContent>
      </S.FAQCard>
    </S.FAQItem>
  );
}

export default FAQItem;
