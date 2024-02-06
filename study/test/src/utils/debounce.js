export default function debounce(callback, timeout = 400 /* 400ms */) {
  let cleanUp;

  // closure

  return (...args) => {
    clearTimeout(cleanUp);
    cleanUp = setTimeout(callback.bind(null, ...args), timeout);
  };
}

/* 
Function.prototype.bind()

bind() 가 호출되면 새로운 함수를 생성합니다.
첫 번째 인자는 this 키워드를 설정하고, 이어지는 인자들은 바인드된 함수의 인수에 제공됩니다.
*/
