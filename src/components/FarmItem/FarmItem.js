import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import styles from "./FarmItem.module.css"

const FarmItem = ({farm}) => {

    return <div className={styles.main}> 
            <div>   
                Farm name : <span> {farm.Name} </span>
            </div>
    </div>
};

export default FarmItem;