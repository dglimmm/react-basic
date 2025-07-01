import { useState } from 'react';

export default function Counter({ onTotal }) {
  //useState 는 생성시 초기값을 넣고,
  // 반환값으로 배열 구조분해 할당을 통해 첫번째 인자로 상태를 받고, 두번째 인자로 그 상태를 변경할 수 있는 상태를 받음
  //상태명은 내가 원하는거, 뒤에는 set을 붙여 네이밍 하는것이 일반적
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(prevCounter => prevCounter + 1); //0+1
    setCounter(prevCounter => prevCounter + 1); //1+1
    setCounter(prevCounter => prevCounter + 1); //2+1
    //콜백함수로 로직을 보내면 그 반환값을 받을 수 있고, 그것을 통해 누적으로 계산할 수 있다.
    //결론적으로 하나의 로직에서 set 함수로 값을 여러번 변경하고자 하면 콜백함수를 넘기면 된다.
    if (onTotal) {
      onTotal();
    }
  };

  return <button onClick={handleCounter}>Counter: {counter}</button>;
}

// 함수 표현식(화살표함수) vs 함수 선언식
// 함수 표현식은 변수에 함수를 할당
// 함수 선언식은 함수 할당없이
//  어떤것을 쓰냐 ?
// 상태나 로직을 갖고있지 않고 간단히 ui만 던지는 함수는 함수 표현식
// 로직이 있으면 함수 선언식 사용(일반적)
