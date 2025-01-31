import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // ฟังก์ชันสำหรับดึง cookie
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const token = getCookie('token'); // ดึง token จาก cookie
    if (!token) {
      navigate('/admin'); // ถ้าไม่มี token ให้ redirect ไปหน้า login
    }
  }, [navigate]);

  return children;
};

export default PrivateRoute;
