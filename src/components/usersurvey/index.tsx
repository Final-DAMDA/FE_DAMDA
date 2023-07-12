import React, { useEffect, useRef, useState } from 'react';
import * as S from '@/styles/survey.styled';
import { IoIosArrowBack } from 'react-icons/io';
import FirstStep from '@/components/usersurvey/step/FirstStep';
import SecStep from '@/components/usersurvey/step/SecStep';
import { useRouter } from 'next/router';
import { useUserSurveyForm } from '@/store/userSurvey';
import { useQuery } from '@tanstack/react-query';
import { getFormList } from '@/apis/form';
import { UserSurveyFormDataType } from '@/types/api/formTypes';
import { getTotalPrice } from '@/utils';
import { dummySurveyForm as data } from '@/constants/dummySurveyForm';

function Index() {
  // const { data } = useQuery(['FormList'], getFormList);

  const router = useRouter();
  const UsersurveyRef = useRef<HTMLDivElement | null>(null);
  const [steps, setSteps] = useState<0 | 1>(0);
  const [userSurveyFormData, setUserSurveyFormData] = useState<UserSurveyFormDataType[]>([]);
  const [userSurveyFormDataSec, setUserSurveyFormDataSec] = useState<UserSurveyFormDataType[]>([]);

  const { price, perPerson, serviceDuration, isSale, setPrice } = useUserSurveyForm();

  const handleNextStep = () => {
    setSteps(1);
  };

  const handlePrevStep = () => {
    setSteps(0);
  };

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    if (UsersurveyRef.current) {
      UsersurveyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [steps]);

  useEffect(() => {
    if (!data) return;

    const copiedData = data.sort((a, b) => a.questionOrder - b.questionOrder) as UserSurveyFormDataType[];

    copiedData
      .find((data) => data.questionIdentify === 'SERVICEDURATION')
      ?.categoryList.sort((a, b) => {
        const durationA = parseFloat(a.category[0]);
        const durationB = parseFloat(b.category[0]);
        return durationA - durationB;
      });

    copiedData
      .find((data) => data.questionIdentify === 'AFEWSERVINGS')
      ?.categoryList.sort((a, b) => {
        const personA = parseFloat(a.category[0]);
        const personB = parseFloat(b.category[0]);
        return personA - personB;
      });

    const firstStep = copiedData.filter((data) => data.page === 1);
    const secStep = copiedData.filter((data) => data.page === 2);

    setUserSurveyFormData(firstStep);
    setUserSurveyFormDataSec(secStep);
  }, [data]);

  useEffect(() => {
    if (isSale) {
      const copiedPrice = price;
      const salePrice = Math.floor(copiedPrice * 0.9);
      setPrice(salePrice);
    } else {
      const copiedPrice = getTotalPrice(serviceDuration, perPerson);
      setPrice(copiedPrice.price);
    }
  }, [isSale]);

  return (
    <S.UserSurveyWrapper ref={UsersurveyRef}>
      <S.ProgressBar />
      <IoIosArrowBack onClick={steps === 0 ? goBack : handlePrevStep} />
      {steps === 0 && <S.UserSurveyTitle>열다 옷장 정리 서비스 예약</S.UserSurveyTitle>}
      <S.UserSurveyFormWrapper>
        {steps === 0 && <FirstStep handleNextStep={handleNextStep} userSurveyFormData={userSurveyFormData} />}
        {steps === 1 && <SecStep userSurveyFormData={userSurveyFormDataSec} />}
      </S.UserSurveyFormWrapper>
      {price === 0 ? null : (
        <div className="footer">
          <div className="price">
            견적(현금가) <span>{price}원</span>
          </div>
          <div className="des">
            작업 매니저 <span>{perPerson}명</span> / 작업 시간 <span>{serviceDuration} 시간</span>
          </div>
        </div>
      )}
    </S.UserSurveyWrapper>
  );
}

export default Index;
