import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsTemplateWorking } from 'redux/models/TemplateModel/actions';
import { selectIsTemplateWorking } from 'redux/models/TemplateModel/selectors';

interface AppHookInterface {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
}

export const useAppHook = (): AppHookInterface => {

  const isTemplateWorking = useSelector(selectIsTemplateWorking);

  const dispatch = useDispatch();
  const onComponentMount =
    (value: boolean) => dispatch(setIsTemplateWorking(value));

  useEffect(() => {
    onComponentMount(true);
  }, []);

  return {
    isLoading: isTemplateWorking === null,
    isSuccess: !!isTemplateWorking,
    isFailure: !isTemplateWorking && isTemplateWorking !== null
  };
}