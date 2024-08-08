import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import MainLayout from './../layout';

const Home = lazy(() => import('./../Home'));
const About = lazy(() => import('./../About'));

const sampleData = {
    name: "John Doe",
    age: 25,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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