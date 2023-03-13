import React from "react";
import classes from './MyModal.module.css';


const MyModal = ({children, visivle, setVisivle}) => {

    const rootClasses = [classes.myModal]

    if (visivle) {
        rootClasses.push(classes.active);
    }

    return(
        <div className={rootClasses.join(' ')} onClick={()=>setVisivle(false)}>
            <div className={classes.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal