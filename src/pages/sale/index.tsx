import React from 'react';
import * as S from '../../styles/Sale.styled';
import MainResellerGraph from '@/components/main/MainResellerGraph';
import { FiArrowDownRight, FiArrowUpLeft } from 'react-icons/fi';
import BlueButton from '@/components/common/BlueButton';
import { salePopupData, saleProcedureData } from '../../constants/saleData';
import { replaceStringsWithTags } from '@/utils';
import ProcedureCarousel from '@/components/sale/Swiper';
import Popup from '@/components/sale/Popup';
import { useRouter } from 'next/router';

function SalePage() {
  const [popupStates, setPopupStates] = React.useState<boolean[]>(salePopupData.map(() => false));
  const router = useRouter();

  const togglePopup = (index: number) => {
    setPopupStates((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  const handleNavigation = (route: string) => {
    window.open(route, '_blank', 'noopener, noreferrer');
  };

  return (
    <S.SaleContainer>
      <S.SaleTitleContainer>
        <S.SaleTitleImg />
        <S.ImgCover>
          <h1>
            안 입는 옷도
            <br />
            새로운 방향으로
          </h1>
          <p>
            서비스를 이용하신 후에
            <br />
            정리된 안 입는 옷은
            <br />
            열다에서 전문 셀러를 통해 수익화하세요.
          </p>
        </S.ImgCover>
      </S.SaleTitleContainer>

      <S.SaleProcedureContainer>
        <h1>
          판매 대행 절차를
          <br />
          알아볼까요?
        </h1>
        <ProcedureCarousel procedureData={saleProcedureData} />
      </S.SaleProcedureContainer>

      <S.SaleClosetContainer>
        <h1>
          안 입는 옷으로
          <br /> 판매수익도 챙기세요.
        </h1>
        {salePopupData.map((popup, index) => (
          <Popup
            key={index}
            popupData={popup}
            isOpen={popupStates[index]}
            togglePopup={() => togglePopup(index)}
            closeHeight={'70px'}
          />
        ))}
        <BlueButton title="옷장 정리 서비스 바로가기" width="100%" onClick={() => handleNavigation('/closet')} />
      </S.SaleClosetContainer>
      <S.SaleGraphContainer>
        <h1>
          많이 버리게 되어도
          <br />
          아쉽지 않아요
        </h1>
        <p style={{ marginBottom: '1.6rem' }}>
          열다를 통해 안 입으시는 옷을 판매하세요
          <br />
          나에게는 하나의 수익이 되지만,
          <br />또 다른 누군가에게는 가치있는 옷일 수 있으니까요
        </p>
        <MainResellerGraph />
        <BlueButton
          title="상담 신청"
          width="50%"
          onClick={() =>
            handleNavigation(
              'https://accounts.kakao.com/login/?continue=http%3A%2F%2Fpf.kakao.com%2F_ksPxixj%2Fchat%3Fapi_ver%3D1.1%26kakao_agent%3Dsdk%252F1.43.1%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fyolda.kr%26app_key%3D6840dd88707cb50fd39088f3624bd147%26referer%3Dhttps%253A%252F%252Fyolda.kr%252F#login',
            )
          }
        />
      </S.SaleGraphContainer>
      <S.SaleEstimateContainer>
        <S.EstimateTitle>
          <h1>
            안입는 옷을
            <br />
            정리 하는 게 <br />
            귀찮으신가요?
          </h1>
          <p>
            지금 옷장정리 서비스를 이용하고
            <br />
            바로 수익 창출까지 해보세요!!
          </p>
        </S.EstimateTitle>
        <S.EstimateCover />
        <S.EstimateImg />
        <S.SaleButton>
          <p>
            회원 할인가
            <br />
            <span>59,900원</span>
          </p>
          <FiArrowDownRight style={{ fontSize: '30px' }} />
        </S.SaleButton>
        <BlueButton title="무료 견적 받기" width="50%" onClick={() => handleNavigation('/usersurvey')} />
      </S.SaleEstimateContainer>
    </S.SaleContainer>
  );
}

export default SalePage;
