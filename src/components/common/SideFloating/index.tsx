import React from 'react';
import * as S from './style';
import Image from 'next/image';

function SideFloating() {
  return (
    <S.Yolda>
      <S.Logo>
        <p>
          내 옷장 속 <br />
          숨겨진 가능성을
        </p>
        <Image src={'/icons/Yolda_logo.svg'} alt="열다" width={120} height={56} />
      </S.Logo>
      <S.Form href={'/usersurvey'}>간편 견적</S.Form>
      <S.Form className="white" href={'https://www.yolda.me/login/chat'} target="_blank">
        상담 신청
      </S.Form>
      <S.Copyright>2023 powerd by yolda</S.Copyright>
    </S.Yolda>
  );
}

export default SideFloating;
