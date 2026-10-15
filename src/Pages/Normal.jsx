import { Header } from "../ICS/Header/Header.jsx";
import { About } from "../ICS/Story/About.jsx";
import { Journey } from "../ICS/Journey/Journey.jsx";
import { Education } from "../ICS/Education/Education.jsx";
import { Skills } from "../ICS/Skills/Skills.jsx";
import { Projects } from "../ICS/Projects/Projects.jsx";
import { Connect } from "../ICS/Connect/Connect.jsx";

export function Normal() {
    return (
        <>
            <Header />
            <About />
            <Journey />
            <Education />
            <Skills />
            <Projects />
            <Connect />
        </>
    );
}
