# CSE341 W01 - Backend API

이미 완성된 frontend를 위한 backend API 입니다.

## 구조

```
backend/
├── server.js              # 진입점, Express 앱 시작
├── routes/
│   ├── index.js           # 메인 라우터
│   └── professional.js    # /professional 엔드포인트 라우트
├── controllers/
│   └── professional.js    # 실제 데이터 응답 로직
├── package.json
├── .gitignore
└── rest.http              # REST Client 테스트 파일
```

## 설치 및 실행

```bash
cd backend
npm install
npm start
```

서버는 `http://localhost:8080` 에서 실행됩니다.

## 엔드포인트

- `GET /` - 환영 메시지
- `GET /professional` - 프론트엔드에 표시될 모든 데이터 반환

## 테스트

### 1) REST Client (VS Code 확장)로 테스트
`rest.http` 파일을 열고 "Send Request" 클릭

### 2) 브라우저로 테스트
`http://localhost:8080/professional` 접속

### 3) Frontend로 테스트
백엔드를 실행한 상태에서, frontend 폴더의 `index.html`을 브라우저에서 열기
