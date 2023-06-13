import { validateToken } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';
import useAuthStore from '@/store/auth';

export const useAuth = () => {
  const { setUser, logout } = useAuthStore();
  const { mutate } = useMutation(validateToken, {
    onSuccess: (data) => {
      console.log(data);
      setUser(data.data);
    },
    onError: () => {
      logout();
      console.log('로그아웃 상태입니다. 로그인해주세요');
    },
  });

  return mutate;
};
