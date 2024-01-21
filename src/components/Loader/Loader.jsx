import React from 'react';

import { Loaders } from '../Loader/Loader.styled';
export const Loader = () => {
  return (
    <Loaders
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass=""
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};
