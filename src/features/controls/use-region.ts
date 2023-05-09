import { useSelector } from 'react-redux'
import { SingleValue } from 'react-select';

import { setRegion } from './controls-slice';
import { selectRegion } from './controls-selectors';
import { useAppDispatch } from 'store';
import { CountryOption } from './CustomSelect';
import { Region } from 'types';

type onSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [Region | '', onSelect] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value));
    } else {
      dispatch(setRegion(''));
    }
  }

  return [region, handleSelect];
}
