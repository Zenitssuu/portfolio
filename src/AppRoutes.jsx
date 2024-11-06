import React from "react";
import { createBrowserRouter , createRoutesFromElements, Route} from "react-router-dom";
import App from "./App.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { About } from "./components/About/About.jsx";
import {Skills} from "./components/Skills/Skills.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Hero />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/contact" element={<Contact />}/>
        </Route>
    )
)

export default router