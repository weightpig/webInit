import axios from 'axios';
import { message } from 'antd';

// 修改 API 基础路径为代理路径
// export const BASE_URL = 'http://localhost:5173/api';
export const BASE_URL = 'http://103.68.194.195:8000/api';

// 创建 axios 实例，接受 headers 作为参数
const createInstance = (headers = {}) => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        validateStatus: function (status) {
            return status >= 200 && status < 300; // 只有状态码在 200 - 299 之间才认为请求成功
        }
    });
};

// 封装高阶函数统一处理 try...catch
const withErrorHandling = async (requestFn) => {
    try {
        const response = await requestFn();
        if (response.data.code !== 0) {
            throw new Error(response.data.msg || '接口请求出错，请稍后重试');
        }
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = '/login';
        } else {
            message.error(error.response?.data?.error || '接口请求出错，请稍后重试')
            console.log(error)
        }
        throw error;
    }
};

// 定义test接口
export const test = async (formData, headers = {}) => {
    const instance = createInstance(headers);
    return withErrorHandling(() => instance.post('/test', formData));
};




