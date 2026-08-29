import { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    // 새로 추가된 상태: 오늘 날짜를 저장할 공간
    const [currentDate, setCurrentDate] = useState('');

    // 2. 새로 추가된 상태: 오늘 시간를 저장할 공간
    const [currentTime, setCurrentTime] = useState('');

    const callApi = async () => {
        try {
            const response = await fetch('/api/hello');
            const text = await response.text();
            setMessage(text);
        } catch (error) {
            console.error('통신 실패:', error);
            setMessage('서버 통신에 실패했습니다.');
        }
    };

    // 새로 추가된 함수: 버튼을 누르면 오늘 날짜를 계산해서 넣어줌
    const handleShowDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        setCurrentDate(`${year}년 ${month}월 ${day}일`);
    };

    // 버튼을 누를 때 현재 시간을 구해서 상태에 담는 함수
    const handleShowTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds}`;
        setCurrentTime(timeString);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>스프링 부트 + 리액트 배포 테스트</h1>
            <button
                onClick={callApi}
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
                서버에서 글씨 가져오기
            </button>

            {/* 2. 개발자1이 새로 추가한 '오늘 날짜 보기' 버튼 */}
            <button
                onClick={handleShowDate}
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#e0f7fa' }}
            >
                오늘 날짜 보기
            </button>

            {/* 2. 개발자1이 새로 추가한 '오늘 시간 보기' 버튼 */}
            <button
                onClick={handleShowTime}
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#e0f7fa' }}
            >
                오늘 시간 보기
            </button>


            <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: 'blue' }}>
                {message}
            </p>

            {/* 새로 추가된 오늘 날짜 출력 */}
            {currentDate && (
                <p style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold', color: 'green' }}>
                    오늘의 날짜: {currentDate}
                </p>
            )}

            {/* 새로 추가된 오늘 날짜 출력 */}
            {currentTime && (
                <p style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold', color: 'red' }}>
                    오늘의 시간: {currentTime}
                </p>
            )}

        </div>
    );
}

export default App;