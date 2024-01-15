import React from 'react';
import styles from './Container.module.css';
import SideBar from '../SideBar/SideBar';
import WorkSpace from '../WorkSpace/WorkSpace';

const Container = () => {
  return (
    <div className={`${styles.mainContainer}`}>
        <SideBar/>
        <WorkSpace/> 
    </div>
  )
}

export default Container
