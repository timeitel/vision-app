const isProduction = process.env.NODE_ENV === "production";

export const getScanServices = () => {
  return isProduction ? {} : {};
};
