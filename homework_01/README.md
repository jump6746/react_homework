# 1주차 과제

## Vanilla 프로젝트에서 구현한 인터페이스의 일부를 마크업하여 웹 브라우저에 렌더링되도록 만듭니다.

저는 Vanilla 프로젝트에서 인터페이스의 일부분 중 header 부분을 새롭게 리액트에서 만들어봤습니다.

### Header 부분 컴포넌트화 하기

![headerComponent](https://github.com/jump6746/react_homework/assets/102586637/249f1dc7-8cb6-47e9-94cf-a8954321d7d0)

- header
  - topBanner
  - headerSign
  - headerLogo
  - formInput
  - headerIcon

header에 들어가는 내용들을 기능별로 나누어서 컴포넌트화 해봤습니다.

### 컴포넌트화 설명

컴포넌트화 시킨 파일의 경로 입니다.

![files](https://github.com/jump6746/react_homework/assets/102586637/f16b2654-87df-4718-b993-287a701c6250)


header.jsx에서 생성해놓은 컴포넌트들을 불러주어 header를 완성 시켰습니다.

```jsx
return (
    <>
      {topBanner()}
      <div style={styles.headerContainer}>
        {headerSign()}
        <div style={styles.headerBottomContainer}>
          {headerLogo()}
          {formInput()}
          {headerIcon()}
        </div>
      </div>
    </>
  );
```

### 과제를 하면서 느낀점

- 리액트에서 컴포넌트화 하는 방법을 얼추 느껴본 것 같다.
- 여기에 애니메이션과 자바스크립트도 사용하는 법을 알게 된다면 더 유용하게 사용할 수 있을 것 같다.