import { Routes, Route, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';                // Adjusted path
import CoursesList from './pages/student/CoursesList';  // Adjusted path
import CourseDetails from './pages/student/CourseDetails'; // Adjusted path
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './component/student/Loading';
import Educator from './pages/educator/Educator';
import DashBoard from './pages/educator/DashBoard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './component/student/Navbar';
const App = () => {
    const isEducatorRoute = !!useMatch('/educator/*'); // Ensure it's a boolean

    return (
        <div className="text-default min-h-screen bg-white">
            {!isEducatorRoute && <Navbar />}
            <Routes>
                {/* Student Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/course-list" element={<CoursesList />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/my-enrollments" element={<MyEnrollments />} />
                <Route path="/course-list/:input" element={<CoursesList />} />
                <Route path="/player/:courseId" element={<Player />} />
                <Route path="/loading/:path" element={<Loading />} />

                {/* Educator Routes - Nested Properly */}
                <Route path="/educator" element={<Educator />}>
                    <Route index element={<DashBoard />} /> {/* Default route inside /educator */}
                    <Route path="add-course" element={<AddCourse />} />
                    <Route path="my-courses" element={<MyCourses />} />
                    <Route path="students-enrolled" element={<StudentsEnrolled />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;