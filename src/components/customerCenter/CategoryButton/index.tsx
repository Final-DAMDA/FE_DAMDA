import React from 'react';
import * as S from './style';

interface CategoryButtonProps {
  category: string;
  filterFAQHandler: (category: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

function CategoryButton({ category, filterFAQHandler, activeCategory, setActiveCategory }: CategoryButtonProps) {
  const isActive = category === activeCategory;

  // const renderCategory = () => {
  //   switch (category) {
  //     case '전체':
  //       return '전체';

  //     case 'PRICE':
  //       return '가격';

  //     case 'SERVICE':
  //       return '서비스 관련';

  //     case 'ETC':
  //       return '기타';

  //     default:
  //       break;
  //   }
  // };

  const clickHandler = (category: string) => {
    filterFAQHandler(category);
    setActiveCategory(category);
  };

  return (
    <S.CategoryFilterButton type="button" isActive={isActive} onClick={() => clickHandler(category)}>
      {category}
    </S.CategoryFilterButton>
  );
}

export default CategoryButton;
