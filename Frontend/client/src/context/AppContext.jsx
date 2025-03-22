// context/AppContext.jsx
import {createContext, useEffect, useState} from 'react';
import {dummyCourses} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(); // Context definition

export const AppProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();


    const [allCourses, setAllCourses] = useState([]);

    //Fetch All Courses
    const fetchAllCourses =async ()=>{

        setAllCourses(dummyCourses);
    }

    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = {
        currency,allCourses,navigate
    };

    return (
        <AppContext.Provider value={value}>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </AppContext.Provider>
    );
};