import axios from 'axios';

const api = axios.create({
    withCredentials: true,
    baseURL: 'https://profile.minuteszone.com/api',
});

// ฟังก์ชันเพื่อดึงข้อมูลโปรไฟล์ผู้ใช้ พร้อมกับการจัดการข้อผิดพลาด
export const userProfile = async () => {
    try {
        const response = await api.get('/profile');
        return response.data; // ส่งข้อมูลที่ได้รับกลับไป
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw new Error('Unable to fetch user profile');
    }
};

export const aboutUser = async () => {
    try {
        const response = await api.get('/abouts');
        return response.data;
    } catch (error) {
        console.error('Error fetching about user:', error);
        throw new Error('Unable to fetch about user');
    }
};

export const skillUser = async () => {
    try {
        const response = await api.get('/skills');
        return response.data;
    } catch (error) {
        console.error('Error fetching skill user:', error);
        throw new Error('Unable to fetch skill user');
    }
};

export const experienceUser = async () => {
    try {
        const response = await api.get('/experiences');
        return response.data;
    } catch (error) {
        console.error('Error fetching experience user:', error);
        throw new Error('Unable to fetch experience user');
    }
}

export const educationUser = async () => {
    try {
        const response = await api.get('/educations');
        return response.data;
    } catch (error) {
        console.error('Error fetching education user:', error);
        throw new Error('Unable to fetch education user');
    }
}

export const certificateUser = async () => {
    try {
        const response = await api.get('/certificates');
        return response.data;
    } catch (error) {
        console.error('Error fetching certificate user:', error);
        throw new Error('Unable to fetch certificate user');
    }
}

export const projectUser = async () => {
    try {
        const response = await api.get('/projects');
        return response.data;
    } catch (error) {
        console.error('Error fetching project user:', error);
        throw new Error('Unable to fetch project user');
    }
}

export const authUser = async (username: string, password: string) => {
    try {
        const response = await api.post('/auth/login', { username, password });
        return response.data;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw new Error('Unable to authenticate user');
    }
}

export default api;
