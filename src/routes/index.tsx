import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import MainLayout from './../layout';

const Home = lazy(() => import('./../components/Home'));
const About = lazy(() => import('./../components/About'));

const sampleData = {
    name: "Hibiki KAWAHASHI",
    age: 20,
    bio: "Student ad Kyushu Institute of Technology. I'm major in Computer Science.",
};

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About {...sampleData} />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRoutes;