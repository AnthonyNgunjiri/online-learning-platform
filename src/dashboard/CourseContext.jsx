
import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    imageurl: '',
  });
const[profileData,setProfileData]=useState({

})
  return (
    <CourseContext.Provider value={{ courseData, setCourseData }}>
      {children}
    </CourseContext.Provider>
  );
};
