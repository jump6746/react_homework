# 2주차 과제

## 바닐라 프로젝트에서 활용했던 데이터베이스의 데이터를 JSON 파일로 저장하여 불러와 마크업에 연결하여 UI 구현하기.

저는 Vanilla 프로젝트에서 인터페이스의 일부분 중 상품 swiper 부분을 새롭게 리액트에서 만들어봤습니다.

### 데이터를 저장한 json 파일

```json
{
  "name": "contacts.json",
  "version": "0.0.1",
  "author": "jump6746@naver.com",
  "items": [
    {
      "id": "3cshi9aez91rvtr",
      "name": "타임머신",
      "price": "990000",
      "discount": "3",
      "brand": "타임코스모스",
      "limit": "품절임박",
      "label": "삐야삐야 깐따삐야 가자 미래로~!"
    },
    {
      "id": "7pewm8dj527r6qm",
      "name": "어디로든 문",
      "price": "24300",
      "discount": "4",
      "brand": "Palkia",
      "limit": "",
      "label": "요기어때"
    },
    {
      "id": "vyvndu8syem4du2",
      "name": "타임보자기",
      "price": "9300",
      "discount": "0",
      "brand": "주먹",
      "limit": "",
      "label": "보자기"
    },
    {
      "id": "vyh8v8amkw50uy0",
      "name": "암기빵",
      "price": "15000",
      "discount": "15",
      "brand": "기억조작",
      "limit": "",
      "label": "식빵처럼 생겼다"
    },
    {
      "id": "y4asqubml00bz87",
      "name": "대나무 헬리콥터",
      "price": "30000",
      "discount": "0",
      "brand": "브라움박사",
      "limit": "한정수량",
      "label": "I can fly"
    },
    {
      "id": "v3ccb70c2fu6jyl",
      "name": "노진구",
      "price": "10000",
      "discount": "70",
      "brand": "zero",
      "limit": "",
      "label": "잔머리 대마왕"
    },
    {
      "id": "pzhts1c9q3rqxo8",
      "name": "도라미",
      "price": "65000",
      "discount": "10",
      "brand": "오빠",
      "limit": "한정수량",
      "label": "도라에몽 케어 담당"
    },
    {
      "id": "3a7fyhnwple6wi5",
      "name": "도라에몽",
      "price": "50000",
      "discount": "7",
      "brand": "너구리",
      "limit": "한정수량",
      "label": "도구보관함"
    }
  ]
}

```

### Swiper 부분 컴포넌트화 하기

![homework_02](https://github.com/jump6746/react_homework/assets/102586637/cf3fbbef-092e-41a9-8711-02b9e5e48cba)

- ProductSwiper
  - ProductButton
  - ProductContainer
  - ProductImage
  - ProductInfo
  - ProductTag

ProductSwiper에 들어가는 내용들을 기능별로 나누어서 컴포넌트화 해봤습니다.

### 컴포넌트화 설명

컴포넌트화 시킨 파일의 경로 입니다.

![files_02](https://github.com/jump6746/react_homework/assets/102586637/758a011e-70b9-4715-8525-9be9ac80ba49)

App.jsx에서 생성해놓은 컴포넌트들을 불러주어 main.jsx를 통하여 main에 완성 시켰습니다.

```jsx
import ProductSwiper from './components/ProductSwiper';

function App() {
  return (
    <div id="app">
      <h1>React Homework 2</h1>
      <ProductSwiper />
    </div>
  );
}

export default App;
```

### 과제를 하면서 느낀점

- 리액트에서 컴포넌트화 하면서 데이터를 불러와 사용하는 법을 알게 되었습니다.
- 아직 스와이퍼와 같은 자바스크립트 기능을 마음대로 사용하는 방법을 모르는게 아쉽습니다.