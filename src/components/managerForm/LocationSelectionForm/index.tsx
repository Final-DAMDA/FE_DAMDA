import React, { ChangeEvent, RefObject, createRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { citiesData } from '@/constants/locationData';
import useManagerFormStore from '@/store/managerForm';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import * as G from '../style';
import * as S from './style';

interface LocationSelectionFormProps {
  isLocationOptionsOpen: boolean;
  setIsLocationOptionsOpen: (isOpen: boolean) => void;
}

function LocationSelectionForm({ isLocationOptionsOpen, setIsLocationOptionsOpen }: LocationSelectionFormProps) {
  const { region, setActivityRegion, setFilterLocation, setRemoveTag } = useManagerFormStore((state) => state);
  const [selectedRegion, setSelectedRegion] = useState('');
  const listRef: RefObject<HTMLDivElement> = createRef();

  const regionChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRegion(e.target.value);
  };

  const closeHandler = (e: MouseEvent) => {
    if (isLocationOptionsOpen && listRef.current && !listRef.current.contains(e.target as Node)) {
      setIsLocationOptionsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeHandler);

    return () => {
      window.removeEventListener('click', closeHandler);
    };
  });

  const cityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const district = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setActivityRegion(selectedRegion, district);
    } else {
      setFilterLocation(district);
    }
  };

  const filterTagHandler = (districtItem: string) => {
    setRemoveTag(districtItem);
  };

  // 지역 태그
  const seoul = region.서울특별시.map((item, index) => (
    <div key={index}>
      서울 {item}
      <button type="button" onClick={() => filterTagHandler(item)}>
        <Image src="/icons/tag-close-icon.svg" alt="tag-close-icon" width={10.5} height={10.5} />
      </button>
    </div>
  ));

  const gyeonggi = region.경기도.map((item, index) => (
    <div key={index}>
      경기 {item}
      <button type="button" onClick={() => filterTagHandler(item)}>
        <Image src="/icons/tag-close-icon.svg" alt="tag-close-icon" width={10.5} height={10.5} />
      </button>
    </div>
  ));

  return (
    <S.LocationSelectionForm>
      <G.SubTitle>어디서 활동 가능 하신가요?</G.SubTitle>
      <p>활동이 가능하신 모든 지역을 등록해주세요.</p>

      {/* 지역 태그 */}
      <S.SelectedLocation>
        {seoul}
        {gyeonggi}
      </S.SelectedLocation>

      <div style={{ position: 'relative' }}>
        {/* Select Button */}
        <S.SelectButton
          type="button"
          region={selectedRegion}
          isOptionsOpen={isLocationOptionsOpen}
          onClick={(e) => {
            e.stopPropagation();
            setIsLocationOptionsOpen(!isLocationOptionsOpen);
          }}
        >
          <div className="select-region">
            지역 선택
            {isLocationOptionsOpen ? <BsChevronUp /> : <BsChevronDown />}
          </div>

          <div className="select-detail">
            <span>{selectedRegion === '서울특별시' ? '서울특별시' : '경기도'}</span>

            <span>
              세부 선택
              <BsChevronUp />
            </span>
          </div>
        </S.SelectButton>

        {/* Options */}
        {isLocationOptionsOpen && (
          <S.ListWrapper ref={listRef}>
            <ul>
              <li>
                <input
                  type="radio"
                  name="manager_available_region"
                  id="seoul"
                  value="서울특별시"
                  onChange={regionChangeHandler}
                />
                <label htmlFor="seoul">서울특별시</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="manager_available_region"
                  id="gyeonggi"
                  value="경기도"
                  onChange={regionChangeHandler}
                />
                <label htmlFor="gyeonggi">경기도</label>
              </li>
            </ul>

            {isLocationOptionsOpen && selectedRegion && citiesData[selectedRegion] && (
              <ul>
                {citiesData[selectedRegion].map((district: string) => (
                  <li key={district}>
                    <input
                      type="checkbox"
                      name="manager_available_district"
                      id={district}
                      value={district}
                      checked={region[selectedRegion].includes(district)}
                      onChange={cityChangeHandler}
                    />
                    <label htmlFor={district}>{district}</label>
                  </li>
                ))}
              </ul>
            )}
          </S.ListWrapper>
        )}
      </div>
    </S.LocationSelectionForm>
  );
}

export default LocationSelectionForm;
