import { notification } from "antd";

export const base64ToFile = (base64String) => {
  const byteCharacters = atob(base64String);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: "application/octet-stream" });
  const file = new File([blob], "test.txt");

  return file;
};

export const customNotifications = (type, message, text) => {
  const errorClass = "bg-customRed/90 font-bold text-white";
  const successClass = "bg-green-400/90 font-bold text-white";
  return notification[type]({
    message: message,
    description: text,
    className: type == "error" ? errorClass : successClass,
  });
};
