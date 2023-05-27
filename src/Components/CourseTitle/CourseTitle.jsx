import { useEffect } from 'react';

const CourseTitle = title => {
    useEffect(()=>{
        document.title = `${title}-Chef-Krunch-app`;
   },[title])
};

export default CourseTitle;