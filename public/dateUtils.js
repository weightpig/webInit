/**
 * 将时间戳转换为指定格式的日期字符串
 * @param {number} timestamp - 时间戳
 * @returns {string} - 格式化后的日期字符串
 */
export const formatTimestamp = (timestamp) => {
  if (typeof timestamp === 'number' && timestamp) {
    // 检查时间戳是否为秒级，如果值小于 1 亿，可能是秒级时间戳
    if (timestamp < 10000000000) { 
      timestamp = timestamp * 1000;
    }
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  return '';
};