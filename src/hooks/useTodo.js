import { useAtom } from 'jotai';
import useSWR from 'swr';

import { isSubmittingAtom, isSubmitErrorAtom } from '../store/global';

const fetcher = (url) => fetch(url).then((r) => r.json());

function useTodo() {
  const { data, error, mutate } = useSWR(
    'https://node-rest-starter.herokuapp.com/api/v1/todos',
    fetcher
  );

  const [isSubmitting, setIsSubmitting] = useAtom(isSubmittingAtom);
  const [isSubmitError, setIsSubmitError] = useAtom(isSubmitErrorAtom);

  const addTodo = async (title) => {
    try {
      setIsSubmitError(false);
      setIsSubmitting(true);

      const formData = {
        title,
        body: 'Example body from todo app',
        user_id: 1,
      };
      const response = await fetch(
        'https://node-rest-starter.herokuapp.com/api/v1/todos',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      ).catch(() => {
        throw new Error('Something went wrong');
      });
      mutate({ ...data, todos: [...data.todos, await response.json()] });
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitError(true);
      setIsSubmitting(false);
    }
  };

  return {
    data,
    isLoading: !data && !error,
    isError: error,
    addTodo,
    isSubmitting,
    isSubmitError,
  };
}

export default useTodo;
