import { isEmail, isPhone } from "./validate";

// hide email or phone
export const hideMobileEmail = (data) => {
  if (isEmail(data)) {
    let com = data.split("@")[1];
    let mail = data.split("@")[0];

    const first = mail.substr(0, 2);
    const last = mail.substr(-2, 2);

      return `${first}***********${last}@${com}`;
      
  } else if (isPhone(data)) {
      
    const first = data.substr(0, 3);
    const last = data.substr(-2);

    return `${first}******${last}`;
  }
};
