import React, { useEffect, useState } from 'react';
import { UserSurveyFormDataType } from '@/types/api/formTypes';
import FormElements from '@/components/usersurvey/FormElements';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';
import { UserSurveyFormNextBox } from '@/styles/survey.styled';
import { getTotalPrice } from '@/utils';
import { isValidAnswer } from '@/utils/isValidAnswer';

interface FirstStepProps {
  handleNextStep: () => void;
  userSurveyFormData: UserSurveyFormDataType[];
}
function FirstStep({ handleNextStep, userSurveyFormData }: FirstStepProps) {
  const [formValue, setFormValue] = useState<UserSurveyForm[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const { setUserSurveyForm, userSurveyForm, setPrice, setPerPerson, setServiceDuration } = useUserSurveyForm();
  const checkRequiredQuestions = (formValue: UserSurveyForm[]) => {
    if (formValue.length === 0) return;
    const requiredQuestionsIndex = userSurveyFormData
      .filter((data) => data.required)
      .map((data) => data.questionNumber);

    const isAllRequiredQuestionsAnswered = requiredQuestionsIndex.every((questionNumber) => {
      return formValue.some((data) => data.questionNumber === questionNumber);
    });
    const msg = isValidAnswer(formValue);
    setIsValid(msg.length === 0 && isAllRequiredQuestionsAnswered);
  };

  const checkPersonNTime = (formValue: UserSurveyForm[]) => {
    const person = formValue.find((data) => data.questionIdentify === 'AFEWSERVINGS')?.answer;
    const time = formValue.find((data) => data.questionIdentify === 'SERVICEDURATION')?.answer;

    if (time) {
      const timeNum = time.replace(/\D/g, '');
      if (timeNum === '' || timeNum === '0') return;
      setServiceDuration(Number(timeNum));
    }

    if (!person || !time) return;

    const personNum = person.replace(/\D/g, '');
    const timeNum = time.replace(/\D/g, '');
    if (!personNum || !timeNum) return;
    if (personNum === '' || timeNum === '') return;
    if (personNum === '0' || timeNum === '0') return;

    const price = getTotalPrice(Number(timeNum), Number(personNum));
    setPrice(price.price);
    setPerPerson(price.perPerson);
  };

  useEffect(() => {
    checkRequiredQuestions(formValue);
    checkPersonNTime(formValue);
  }, [formValue]);

  useEffect(() => {
    if (!!userSurveyForm) {
      setFormValue(userSurveyForm);
    }
  }, []);

  const handleGoNextStep = () => {
    setUserSurveyForm(formValue);
    handleNextStep();
  };

  return (
    <div className="form-container">
      {userSurveyFormData.map((data, index) => (
        <FormElements data={data} key={index} handleUpdateFormValue={setFormValue} />
      ))}
      <UserSurveyFormNextBox
        onClick={isValid ? handleGoNextStep : undefined}
        animate={isValid ? { backgroundColor: '#0061FF', color: '#fff' } : ''}
      >
        {isValid ? '날짜 예약하기' : '예약하기'}
      </UserSurveyFormNextBox>
    </div>
  );
}

export default FirstStep;
