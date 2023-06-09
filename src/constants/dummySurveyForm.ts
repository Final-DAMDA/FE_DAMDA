export const dummySurveyForm = [
  {
    questionNumber: 0,
    questionOrder: 0,
    page: 1,
    questionTitle: '옷장정리 서비스를 찾아주셔서 감사합니다! 💁‍♀️ ',
    questionType: 'TITLE',
    questionIdentify: 'TITLE',
    required: false,
    categoryList: [],
    // Component?: React.ReactNode,
    placeHolder: '',
  },
  {
    questionNumber: 1,
    questionOrder: 1,
    page: 1,
    questionTitle: '서비스를 받으실 분을 알려주세요',
    questionType: 'STRING',
    questionIdentify: 'APPLICANTNAME',
    required: true,
    categoryList: [],
    // Component?: React.ReactNode,
    placeHolder: '김열다',
  },
  {
    questionNumber: 2,
    questionOrder: 2,
    page: 1,
    questionTitle: '',
    questionType: 'STRING',
    questionIdentify: 'APPLICANTCONACTINFO',
    required: true,
    categoryList: [],
    // Component?: React.ReactNode,
    placeHolder: '010-0000-0000',
  },
  {
    questionNumber: 3,
    questionOrder: 3,
    page: 1,
    questionTitle: '서비스를 받으실 지역과 주소를 입력해주세요',
    questionType: 'SELECT',
    questionIdentify: 'ADDRESS',
    required: true,
    categoryList: [],
    // Component?: React.ReactNode,
    placeHolder: '연락처',
  },
  {
    questionNumber: 4,
    questionOrder: 4,
    page: 1,
    questionTitle: '정리가 필요한 옷이 몇 사람의 분량인가요?',
    questionType: 'SELECT',
    questionIdentify: 'AFEWSERVINGS',
    required: true,
    categoryList: [
      {
        id: 0,
        category: '1인',
        price: '30000',
      },
      {
        id: 2,
        category: '2인',
        price: '50000',
      },
      {
        id: 3,
        category: '3인',
        price: '60000',
      },
      {
        id: 4,
        category: '4인',
        price: '80000',
      },
    ],
    // Component?: React.ReactNode,
    placeHolder: '인원',
  },
  {
    questionNumber: 5,
    questionOrder: 5,
    page: 1,
    questionTitle: '옷장 정리가 몇 시간 정도 필요하신가요?',
    questionType: 'RADIO',
    questionIdentify: 'SERVICEDURATION',
    required: true,
    categoryList: [
      {
        id: 0,
        category: '3시간',
        price: '30000',
      },
      {
        id: 2,
        category: '4시간',
        price: '50000',
      },
      {
        id: 3,
        category: '5시간',
        price: '60000',
      },
    ],
    // Component?: React.ReactNode,
    placeHolder: '몇 시간 정도 걸릴 지 상담받고 싶어요!',
  },
  {
    questionNumber: 6,
    questionOrder: 6,
    page: 1,
    questionTitle: '할인 되는 코드가 있으신가요?',
    questionType: 'STRING',
    questionIdentify: 'SALECODE',
    required: false,
    categoryList: [],
    // Component?: React.ReactNode,
    placeHolder: '할인코드를 입력해주세요',
  },
];
