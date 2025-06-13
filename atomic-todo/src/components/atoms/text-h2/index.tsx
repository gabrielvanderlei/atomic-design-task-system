import React from 'react';

import styles from './index.module.css'

export const TextH2 = ({ className, children }:{className?:string, children?:React.ReactNode}) => (
    <h2 className={`${styles.h1} ${className}`}>{children}</h2>
)