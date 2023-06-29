"use client";

import styles from "./index.module.scss";

type TransverseLine = {
  bgGradientType: string;
};

const TransverseLine: React.FC<TransverseLine> = ({ bgGradientType }) => {
  const type = `bgGradient-${bgGradientType}`;
  return <div className={`h-1 w-[46px] rounded-[11px] ${styles[type]}`} />;
};

export default TransverseLine;
