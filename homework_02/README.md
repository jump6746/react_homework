# 2주차 과제

## 바닐라 프로젝트에서 활용했던 데이터베이스의 데이터를 JSON 파일로 저장하여 불러와 마크업에 연결하여 UI 구현하기.

저는 Vanilla 프로젝트에서 인터페이스의 일부분 중 상품 swiper 부분을 새롭게 리액트에서 만들어봤습니다.

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