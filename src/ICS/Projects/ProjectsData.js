import BugTrack from '../../assets/Images/image-15.svg'
import ToDo from '../../assets/Images/image-14.svg'
import  Aeris from '../../assets/Images/image-10.svg'

export const ProjectsData = [
    {
        id: 1,
        title: "Aeris",
        image: Aeris,
        description: "A responsive React Weather App for Beheira Governorate, Egypt, using a weather API to display current, maximum, and minimum temperatures and weather conditions. The app supports Arabic and English using i18next, with a modern Glassmorphism UI and React Icons.",
        skills: ["React.js", "JavaScript", "i18next" ,'API'],
        githubUrl: "https://github.com/samar20ebrahem-cyber/weather-api",
        liveUrl: "https://..."
    },
    {
        id: 2,
        title: "Bug Tracking System",
        image: BugTrack,
        description: "A dynamic Bug Tracking System built with JavaScript to manage and track bugs efficiently. It includes a search bar, dynamic statistics, filtering, and automatic data saving using Local Storage. The project helped me practice writing clean, organized code and handling dynamic data and user interactions.",
        skills: ["Local Storage", "Events", "DOM"],
        githubUrl: "https://github.com/samar20ebrahem-cyber/Bug-Tracking-System",
        liveUrl: "https://samar20ebrahem-cyber.github.io/Bug-Tracking-System/"
    },
    {
        id: 3,
        title: "To Do App",
        image: ToDo,
        description: "A responsive To-Do App built with JavaScript that allows users to add, manage, filter, and save tasks. The app supports Arabic and English using i18next and stores tasks using Local Storage.",
        skills: ["Local Storage", "Events", "DOM"],
        githubUrl: "https://github.com/samar20ebrahem-cyber/To-do-App",
        liveUrl: "https://samar20ebrahem-cyber.github.io/To-do-App/"
    }
];
