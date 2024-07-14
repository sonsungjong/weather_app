import { convertKelvinToCelsius } from '@/utils/convertKelvinToCelsius';
import ListBox from '../listbox/listbox';
import WeatherIcon from '../weathericon/weathericon';
import './forecast_detail.css';
import TodayDetail, { TodayDetailProps } from './today_detail';

type Props = {}

// interface는 type과 다르게 상속이 가능(복붙)
export interface ForcastDetailProps extends TodayDetailProps
{
    // TodayDetailProps 에 적은 내용이 여기에 복붙됨(==상속)
    weatherIcon: string;
    date: string;
    day : string;
    temp : number;
    feels_like : number;
    temp_min : number;
    temp_max : number;
    description: string;
}

export default function ForecastDetail(props : ForcastDetailProps){
    // null이 들어올경우 props에 기본값 대입
    const{
        weatherIcon = "02d",
        date = "12.09",
        day = "Monday",
        temp,
        feels_like,
        temp_min,
        temp_max,
        description
    } = props;

    return(
        <ListBox className='box-style5'>
            <section className='forecast-left-section'>
                {/* 요약정보 */}
                <div>
                    <WeatherIcon iconName={weatherIcon} />
                    <p style={{fontSize:'1rem'}}>{date}</p>
                    <p style={{fontSize:'1rem'}}>{day}</p>
                </div>
                <div className='additional-info'>
                    <span>{`${convertKelvinToCelsius(temp ?? 273.15)}℃`}</span>
                    <p className='additional-para'>
                        <span>체감온도</span>
                        <span>{`${convertKelvinToCelsius(feels_like ?? 273.15)}℃`}</span>
                    </p>
                    <p style={{textTransform:'capitalize', fontSize:'1rem'}}>{description}</p>
                </div>
            </section>
            <section className='forecast-right-section'>
                {/* 기후정보 */}
                <TodayDetail {...props} />
            </section>
        </ListBox>
    )
}