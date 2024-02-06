import { Stack } from '@/components';
import { useId, useState } from 'react';

/* --------------------------------------------- */
function Exercise() {
  return (
    <>
      <FormControlExample />
    </>
  );
}

/* --------------------------------------------- */

function FormControlExample() {
  return (
    <Stack vertical gap={16} my={20}>
      <Stack vertical gap={4}>
        <h2>폼 컨트롤 II</h2>
        <p>멀티 체크박스 활용해 피자 주문 폼 제작</p>
      </Stack>
    </Stack>
  );
}

/* ----------------------------------------------- */

// initial value


const PIZZA = {
  types:
    '밀라노 스폰티니 피자, 시찰리아 칼조네 피자, 시카고 피자, 페페로니 피자, 하와이안 피자'.split(
      ','
    ),
  toppings: '새우, 고구마, 감자, 올리브, 페페로니'.split(','), 
  // [새우, 고구마, 감자, 오로리브, 페페로니]
};

const INITAIL_ORDER = {
  type: PIZZA.types[0],
  isAllToppings: false,
  toppings: [],
};

/* ------------------------------------------------- */

function Form() {

  // 주문 상태
  const [orderState, setOrderState] = useState(INITAIL_ORDER);

  // event function
  // type
  const handleChangePizzaType = (e) => {
    const {value} = e.target;
    const nextOrderState = {
      ...orderState,
      type: value,
    };

    setOrderState(nextOrderState);
  }
  
  // AllTopping 
  const handleChangeAllToppings = (e) => {
    const {checked} = e.target;

    const nextOrderState = {
      ...orderState,
      isAllToppings: checked,
      toppings: checked ? PIZZA.toppings : [],
    };

    setOrderState(nextOrderState);
  }

  

  return();
}
