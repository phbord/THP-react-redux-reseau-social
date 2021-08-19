import { useSelector, useDispatch } from 'react-redux';

export const checkAuth = () => {
  const { checkLogOutBtn } = useSelector(state => state)
  return checkLogOutBtn
}

export const setCheckAuth = (bool) => {
  const { checkLogOutBtn } = useSelector(state => state)
  return checkLogOutBtn = bool
}