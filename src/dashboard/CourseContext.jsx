
import React, { createContext, useState } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    imageurl: '',
  });
const[profileData,setProfileData]=useState({
  imageurl:'',
  title:'',
  FirstName: '',
  LastName: '',
  level:'',
  bio:'',
 
})
const[userData,setUserData]=useState({
  FirstName: '',
  LastName: '',
  EmailAddress:'',
  PhoneNumber:'',
})
  return (
    <CourseContext.Provider value={{ courseData, setCourseData ,profileData,setProfileData,userData,setUserData}}>
      {children}
    </CourseContext.Provider>
  );
};
