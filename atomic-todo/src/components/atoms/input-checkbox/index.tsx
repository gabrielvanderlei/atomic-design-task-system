import React from 'react';

export const InputCheckbox = ({ name, value, onChange }:{name?:string, value?:boolean, onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void}) => (
    <input className="mr-1" name={name} onChange={onChange} type='checkbox' checked={value} />
)