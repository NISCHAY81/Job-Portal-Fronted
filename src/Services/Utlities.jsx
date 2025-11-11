const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-US', options);
};

const timeAgo = (time) => {
  const now = new Date();
  const postDate = new Date(time);
  const diff = now - postDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (seconds < 5) {
    return "just now";
  } else if (seconds < 60) {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (days < 30) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
};

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      const base64Data = result.split(",")[1]; // ✅ removes data:application/pdf;base64,
      resolve(base64Data);
    };
    reader.onerror = (error) => reject(error);
  });
};

const formatInterviewTime = (dateStr) => {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'Asia/Kolkata' 
  });
  return formattedDate;
};

/**
 * ✅ Opens a base64 resume (PDF or JPG) in a new browser tab.
 * Automatically detects file type.
 */
const openBase64InNewTab = (base64Data, fileType = "pdf") => {
  let mimeType;

  if (fileType === "pdf") mimeType = "application/pdf";
  else if (fileType === "jpg" || fileType === "jpeg") mimeType = "image/jpeg";
  else if (fileType === "png") mimeType = "image/png";
  else mimeType = "application/octet-stream";

  // Convert base64 string to binary
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });

  // Create temporary URL and open it
  const blobUrl = URL.createObjectURL(blob);
  window.open(blobUrl, "_blank");
};

export { formatDate, timeAgo, getBase64, formatInterviewTime, openBase64InNewTab };
