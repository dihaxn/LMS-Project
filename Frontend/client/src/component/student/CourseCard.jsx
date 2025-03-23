import { useContext } from 'react';
import { assets } from "../../assets/assets.js";
import { AppContext } from "../../context/AppContext.jsx";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CourseCard = ({ course }) => {
    const { currency , calculateRating } = useContext(AppContext);

    return (
        // eslint-disable-next-line react/prop-types
        <Link to={'/course/' + course._id} onClick={() => scrollTo(0, 0)}
              className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
            {/* eslint-disable-next-line react/prop-types */}
            <img className='w-full' src={course.courseThumbnail} alt='' />
            <div className='p-3 text-left'>
                {/* eslint-disable-next-line react/prop-types */}
                <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
                {/* eslint-disable-next-line react/prop-types */}
                <p className='text-gray-500'>{course.educator.name}</p>
                <div className='flex items-center space-2'>
                    <p>{calculateRating(course)}</p>
                    <div className='flex'>
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src={i< Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt='' className='w-3.5 h-3.5' />
                        ))}
                    </div>
                </div>
                <p className='text-gray-500'>22</p>
                {/* Move the price paragraph here */}
                <p className='text-base font-semibold text-gray-800'>
                    {/* eslint-disable-next-line react/prop-types */}
                    {currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
                </p>
            </div>
        </Link>
    );
}

export default CourseCard;