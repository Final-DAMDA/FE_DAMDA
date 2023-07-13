import { UserSurveyForm } from '@/store/userSurvey';

export type ErrorMsg = {
  questionNumber: number;
  errorMsg: string;
};

export const isValidAnswer = (formData: UserSurveyForm[]) => {
  const [...everyObj] = formData;
  let errorMsg: ErrorMsg[] = [];

  if (everyObj.length === 0) {
    errorMsg.push({
      questionNumber: 0,
      errorMsg: '질문이 없습니다.',
    });
    return errorMsg;
  }

  everyObj.forEach((obj) => {
    if (obj.answer === '') {
      errorMsg.push({
        questionNumber: obj.questionNumber,
        errorMsg: '햔재 질문에 답변이 없습니다.',
      });
    }
  });

  const phone = everyObj.find((obj) => obj.questionIdentify === 'APPLICANTCONACTINFO');
  const address = everyObj.find((obj) => obj.questionIdentify === 'ADDRESS');

  if (phone) {
    const error = phoneValid(phone);
    if (error.length !== 0) {
      errorMsg = errorMsg.concat(error);
    }
  }

  if (address) {
    const error = addressValid(address);
    if (error.length !== 0) {
      errorMsg = errorMsg.concat(error);
    }
  }

  return errorMsg;
};

const phoneValid = (phone: UserSurveyForm) => {
  const regex = /^[0-9]+$/;
  let errorMsg: ErrorMsg[] = [];
  if (!regex.test(phone.answer)) {
    errorMsg.push({
      questionNumber: phone.questionNumber,
      errorMsg: '전화번호는 숫자만 입력해주세요.',
    });
  }
  if (phone.answer.length !== 11) {
    errorMsg.push({
      questionNumber: phone.questionNumber,
      errorMsg: '전화번호는 11자리로 입력해주세요.',
    });
  }
  return errorMsg;
};

const addressValid = (address: UserSurveyForm) => {
  const regex = /^[가-힣0-9a-zA-Z\s]+$/;
  let errorMsg: ErrorMsg[] = [];
  if (!regex.test(address.answer)) {
    errorMsg.push({
      questionNumber: address.questionNumber,
      errorMsg: '주소는 한글, 영문, 숫자만 입력해주세요.',
    });
  }
  if (address.answer.length > 70) {
    errorMsg.push({
      questionNumber: address.questionNumber,
      errorMsg: '주소는 70자리 이하로 입력해주세요.',
    });
  }
  if (address.answer.split(' ')[2] === '') {
    errorMsg.push({
      questionNumber: address.questionNumber,
      errorMsg: '세부주소가 빠져있습니다.',
    });
  }
  return errorMsg;
};
