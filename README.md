# We Bible

### Description

성경 어플

### Feature

- 성경
- 좋아요
- 메모

## Folder Structure & Description

```
src/
├── api/
├── components/
├── db/
├── domain/
├── hooks/
├── pages/
├── router/
├── store/
├── util/
```

| **폴더**       | **설명**                                                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **api**        | likeService, memoService, bibleService 등 component 및 page 파일에서 데이터 관련 로직을 호출<br>api 안의 소스들은 domain, db 폴더의 파일들을 사용한다.                                                                                                                                     |
| **components** | 도메인별 컴포넌트, 글로벌 컴포넌트, 레이아웃 컴포넌트                                                                                                                                                                                                                                      |
| **db**         | 데이터를 저장소에 실제로 저장하고, 가공, 조회하는 소스<br>api 소스에서 호출하며 예를 들면 api 소스에서 domain 소스를 호출해 객체를 생성하고 해당 객체를 db 소스를 호출해 외부에 저장한다.<br>App 단의 Sqlite로 저장할지, 실제 외부 DB에 저장할지 로그인 여부로 판단해 db 소스에서 분기처리 |
| **domain**     | 외부 기능, api와 독립된 javascript, typescript 소스<br>타입, 객체 생성, 가공 등 담당<br>api 소스에서 호출                                                                                                                                                                                  |
| **hooks**      | 커스텀 훅                                                                                                                                                                                                                                                                                  |
| **pages**      | 페이지 폴더                                                                                                                                                                                                                                                                                |
| **router**     | 페이지 라우팅 관련                                                                                                                                                                                                                                                                         |
| **store**      | 상태관리에 관련한 파일들을 보관                                                                                                                                                                                                                                                            |
| **util**       | 프론트단에서 사용하는 데이터 가공, 유틸성 함수                                                                                                                                                                                                                                             |

## Tech Skills

- React Native (WebView)
- Javascript & Typescript
- React
- React-Query, Zustand, Context-Api
- notistack
- tailwind css, Material UI
- Supabase
