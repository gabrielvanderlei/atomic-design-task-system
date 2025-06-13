import React from 'react';

import styles from './index.module.css'

export const InputText = ({ name, value, onChange }:{name?:string, value?:string, onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void}) => (
    <input name={name} className={styles.textInput} type='text' value={value} onChange={onChange} />
)