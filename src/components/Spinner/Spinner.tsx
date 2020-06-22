import React from 'react';
import styles from './Spinner.module.scss';

export default function Spinner ({show}: {show?: boolean}) {
  if(!show) {
    return null;
  }
  return <div className={styles.Spinner}/>
}

