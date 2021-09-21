 Node.js 의 개념 및 개발 로직, 모듈 정리
 =============
 ## 파일 설명
- CookSess => 쿠키와 세션 설정  
- EVENT =>  이벤트 설정   
- Exception =>  예외처리 설정  
- FileSystem => 파일 시스템 설정  
- InModule => node.js에서 사용되는 모듈 정리   
- InObect => node.js에서 사용되는 객체 정리   
- Restful => RestFul api 사용 관리   
- Sequelize => 시퀄라이즈 사용법 및 Database->model->서버->템플릿 구조 설계  
- Server => 연결설정   
- Learn-express => express 사용법   
- npm => 사용법   
- mongoose => mongoose 사용법 및 mongoDB 연결하여 nodejs개발 

## node js 개념 로직
> 1. npm init -> package.json 만들어짐 
> 2. express install 하면 -> node_module(다운 받은 dependecies들은 다 이 폴더에서 관리된다.)

## MOngoDB Model $ Schema 
> Model은 Schema를 감싸주는 역할을 한다. 

### BodyParser & PostMan 
>  API 요청에서 받은 body 값을 파싱하는 역할을 수행하는 것이 bodyParser 라는 미들웨어이다. 
>  PostMan API 개발을 보다 빠르고 쉽게 구현 할 수 있도록 도와주며, 개발된 API를 테스트하여 문서화 또는 공유 할 수 있도록 도와 주는 플랫폼이다
 
