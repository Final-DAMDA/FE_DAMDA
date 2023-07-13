import React from 'react';
import * as S from './style';
import { FABButtonTexts } from '@/constants/FABButton';
import { BiArrowToTop } from 'react-icons/bi';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useRouter } from 'next/router';

interface FabProp {
  mainContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}

function FabButton({ mainContainerRef }: FabProp) {
  const router = useRouter();

  const goToTop = () => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (type: string) => {
    console.log('type', type);
    switch (type) {
      case 'goTop':
        goToTop();
        break;
      case 'kakao':
        window.open('https://www.yolda.me/login/chat', '_blank', 'noopener, noreferrer');
        break;
    }
  };

  return (
    <S.MainFABContainer>
      {FABButtonTexts.map((item, index) => (
        <S.MainFABButton color={item.color} key={index} onClick={() => handleClick(item.type)}>
          {item.type === 'goTop' ? <BiArrowToTop /> : <RiKakaoTalkFill />}
        </S.MainFABButton>
      ))}
    </S.MainFABContainer>
  );
}

export default FabButton;
