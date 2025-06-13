import React from 'react';

import styles from './index.module.css'

export const TextH1 = ({ children }:{ children:React.ReactNode }) => (
    <h1 className={styles.h1}>{children}</h1>
)