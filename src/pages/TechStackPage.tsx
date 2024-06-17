import { FormControl, Grid, Input, InputLabel, Slider, Typography } from '@mui/material'
import JS from '../assets/images/js.png'
import REACT from '../assets/images/react.png'
import VUE from '../assets/images/vue.png'
import NODE from '../assets/images/node.png'
import MONGODB from '../assets/images/mongoDb.png'
import SQL from '../assets/images/SQL.png'
import UNITY from '../assets/images/unity.png'
import PYTHON from '../assets/images/python.jpg'
import CSHARP from '../assets/images/csharp.jpg'
import DOTNET from '../assets/images/.Net.png'
import TechStackCanvas from '../components/3D/techStack/TechStackCanvas'
import useHelper from '../hooks/useHelper'
import { useLayoutEffect, useRef, useState } from 'react'

export interface ITechStackList {
    name: string
    description: string
    image: string
    stars: number
}

const techStack: ITechStackList[] = [
    { name: 'JavaScript', description: 'A high-level, interpreted programming language that is a core technology of the World Wide Web, alongside HTML and CSS.', image: JS, stars: 5 },
    { name: 'React', description: 'A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.', image: REACT, stars: 4 },
    { name: 'Vue', description: 'A progressive JavaScript framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.', image: VUE, stars: 3 },
    { name: 'Node', description: 'An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.', image: NODE, stars: 4 },
    { name: 'MongoDB', description: 'A source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.', image: MONGODB, stars: 4 },
    { name: 'SQL', description: 'A standard language for managing data held in a relational database management system, or for stream processing in a relational data stream management system.', image: SQL, stars: 5 },
    { name: 'C#', description: 'A general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.', image: CSHARP, stars: 4 },
    { name: '.NET', description: 'A free, cross-platform, open-source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, and IoT.', image: DOTNET, stars: 5 },
    { name: 'Python Tkinter', description: 'Tkinter is Python\'s de-facto standard GUI (Graphical User Interface) package. It is a thin object-oriented layer on top of Tcl/Tk.', image: PYTHON, stars: 3 },
    { name: 'Unity', description: 'A cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.\'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.', image: UNITY, stars: 4 },
];

function TechStackPage() {
    const { getViewHeight } = useHelper();
    const [viewHeight, setViewHeight] = useState(0);
    const [speed, setSpeed] = useState(0.001);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleResize = () => {
        setViewHeight(getViewHeight() - sliderRef.current!.clientHeight);
    }

    useLayoutEffect(() => {
        setViewHeight(getViewHeight() - sliderRef.current!.clientHeight);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [getViewHeight]);

    return (
        <Grid container>
            <Grid ref={sliderRef} item xs={12} sm={1}>
                <span>Speed ({speed})</span>
                <Slider value={speed} onChange={(e, newValue) => setSpeed(newValue as number)} min={0.0001} max={0.002} step={0.0001} />
            </Grid>
            <Grid container height={viewHeight}>
                <TechStackCanvas techStack={techStack} speed={speed} />
            </Grid>
        </Grid>
    );
}
export default TechStackPage