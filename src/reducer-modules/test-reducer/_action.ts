interface INCREMENT_DECREMENT_PAYLOAD {
  number: number;
}
interface CHANGESIZE_PAYLOAD {
  size: number;
}

export interface INCREMENT_DECREMENT_ACTION {
  type: 'INCREMENT' | 'DECREMENT';
  payload: INCREMENT_DECREMENT_PAYLOAD;
}

export interface CHANGESIZE_ACTION {
  type: 'CHANGESIZE';
  payload: CHANGESIZE_PAYLOAD;
}

export const increment = (number: number): INCREMENT_DECREMENT_ACTION => ({
  type: 'INCREMENT',
  payload: {
    number: number,
  },
});

export const decrement = (number: number): INCREMENT_DECREMENT_ACTION => ({
  type: 'DECREMENT',
  payload: {
    number: number,
  },
});

export const changeSize = (size: number): CHANGESIZE_ACTION => ({
  type: 'CHANGESIZE',
  payload: {
    size: size,
  },
});
