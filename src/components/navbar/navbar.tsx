'use client';

import { MdWbSunny } from 'react-icons/md';
import './navbar.css';
import { Dispatch, SetStateAction, useState } from 'react';
import SearchBox from '../searchbox/searchbox';
import axios from 'axios';

type Props = {
    place: string;
    setPlace: Dispatch<SetStateAction<string>>;
    location: string[];
}

export default function Navbar(props : Props){
    const [city, setCity] = useState('');       // 입력값 담기
    const [error, setError] = useState('');     // 에러메시지

    // 검색박스의 onChange에 제공할 함수
    async function handleInputChange(value : string){
        setCity(value);
        if(value.length >= 3){
            try{
                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
                )
            }catch(error){
                console.log(error);
            }
        }
    }

    // 검색박스의 onSubmit에 제공할 함수
    function handleSubmitSearch(e : React.FormEvent<HTMLFormElement>){
        // 클릭의 영향이 버블링되지 않게 막는다 (form제출 버튼으로 새로고침 되는것을 막음)
        e.preventDefault();
        if(props.location.includes(city)){
            props.setPlace(city);       // 검색지역 업데이트
            setError("");
        }else{
            setError("해당하는 지역이 없습니다.");
        }
    }

    return(
        <div className='navbar-container'>
            <div className='navbar-inner'>
                <div className='navbar-title'>
                    <h2 className='navbar-heading'>Nextjs 날씨앱</h2>
                    <MdWbSunny className='navbar-logo-icon'/>
                </div>

                <section className='navbar-section'>
                    <p className='location-text'>{props.place}</p>
                    <div style={{position:'relative'}}>
                        {/* 입력창 */}
                        <SearchBox searchValue={city} onChange={(e)=>handleInputChange(e.target.value)} onSubmit={handleSubmitSearch} />
                        {
                            error && (
                                <p style={{color:'red'}}>
                                    {error}
                                </p>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

// 리액트 아이콘 (글자)
// npm install react-icons --save


// chatGPT API 사용법
// npm install openai
// chatGPT API 사이트 로그인
// 상단 Dashboard -> API Keys 로 접속
// Create new secret key
// Name 입력 후 생성
// Save your key 페이지에서 Secret Key 백업!!!
// 우측 상단의 Setting 에서 Billing 접속하여 잔여요금확인
// add payment details 에서 카드 등록하고 충전 (자동충전 체크박스 해제)
// (첫카드 등록시 5달러 제공)
