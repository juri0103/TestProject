import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

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

  return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>스프링 부트 + 리액트 배포 테스트</h1>
        <button
            onClick={callApi}
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          서버에서 글씨 가져오기
        </button>
        <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: 'blue' }}>
          {message}
        </p>
      </div>
  );
}

export default App;