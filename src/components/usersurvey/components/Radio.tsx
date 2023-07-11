import React, { useEffect, useState } from 'react';
import { UserSurveyFormRadioProps } from '@/types/components/form';
import { UserSurveyFormRadioWrapper } from '@/styles/survey.styled';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { UserSurveyForm, useUserSurveyForm } from '@/store/userSurvey';

const variants: Variants = {
  hover: {
    backgroundColor: '#0061FF',
    color: '#fff',
  },
  animate: {
    backgroundColor: '#0061FF',
    color: '#fff',
  },
};
function Radio({ handleUpdateFormValue, formData, children }: UserSurveyFormRadioProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { questionTitle: title, categoryList, questionNumber, placeHolder, questionIdentify } = formData;

  const { userSurveyForm } = useUserSurveyForm();

  const handleOnClick = (index: number) => {
    setSelectedIndex(index);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: categoryList[index].category,
      questionIdentify,
    };

    handleUpdateFormValue((prev) => {
      const isExist = prev.find((data) => data.questionNumber === questionNumber);
      if (isExist) {
        return prev.map((data) => (data.questionNumber === questionNumber ? currentData : data));
      } else {
        return [...prev, currentData];
      }
    });
  };

  useEffect(() => {
    if (!!userSurveyForm) {
      const isExist = userSurveyForm.find((data) => data.questionNumber === questionNumber);
      if (isExist) {
        setSelectedIndex(categoryList.findIndex((data) => data.category === isExist.answer));
      }
    }
  }, []);

  return (
    <UserSurveyFormRadioWrapper>
      <span className="title">{title}</span>
      <div className="radio-wrapper">
        {categoryList?.map((data, index) => (
          <motion.div
            className="radio-item"
            key={data.id}
            variants={variants}
            animate={selectedIndex === index ? 'animate' : ''}
            onClick={() => handleOnClick(index)}
            whileHover="hover"
          >
            <span>{data.category}</span>
          </motion.div>
        ))}
      </div>
      {questionIdentify === 'SERVICEDURATION' && (
        <Link href="https://www.yolda.me/login/chat" target="_blank">
          <span>{placeHolder}</span>
        </Link>
      )}
      {children && children}
    </UserSurveyFormRadioWrapper>
  );
}

export default Radio;
