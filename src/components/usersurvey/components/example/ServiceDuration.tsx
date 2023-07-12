import React, { useState } from 'react';
import { Example, Wrapper } from '@/components/usersurvey/components/example/style.styled';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

function ServiceDuration() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Wrapper>
      <h1>어느 정도 시간이 걸릴 지 잘 모르시겠다면?</h1>
      <p>아래 탭을 눌러 서비스 예시를 확인하세요!</p>
      <div className="head" onClick={onClick}>
        {isOpen ? (
          <>
            <AiOutlineUp />
            예시 접기
          </>
        ) : (
          <>
            <AiOutlineDown />
            예시 보기
          </>
        )}
      </div>

      {isOpen && (
        <div className="example-wrapper">
          <Example hours={3}>
            <div className="title">3시간 서비스 예시</div>
            <div className="content">
              <div className="img"></div>
              <span>
                보통 <strong>행거 4개, 서랍장 1개</strong>를 동시에 정리 받으실 수 있어요!
              </span>
            </div>
          </Example>

          <Example hours={5}>
            <div className="title">5시간 서비스 예시</div>
            <div className="content">
              <div className="img"></div>
              <span>
                보통 <strong>행거 4개, 서랍장 2개, 리빙박스 4개를</strong>를 동시에 정리 받으실 수 있어요!
              </span>
            </div>
          </Example>
        </div>
      )}
    </Wrapper>
  );
}

export default ServiceDuration;
