import React from 'react';

import styles from './index.module.css'

export const InputText = ({ value, onChange }:{value:string, onChange:(event: React.ChangeEvent<HTMLInputElement>) => void}) => (
    <input className={styles.textInput} type='text' value={value} onChange={onChange} />
)