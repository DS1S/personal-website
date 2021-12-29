import synduceImg from "../../assets/images/projects/synduce.png";
import bracketsImg from "../../assets/images/projects/brackets.png";
import covidTrackerImg from "../../assets/images/projects/covid_tracker.png";
import arrayItImg from "../../assets/images/projects/arrayit.png";
import techConferenceImg from "../../assets/images/projects/techconf.png";


export const projectsData = [
    {
        title: 'Synduce Web Client',
        imgSrc: synduceImg,
        technologies: 'React, AWS Lambda, AWS Gateway, GitHub Actions, Heroku',
        description: 'Synduce is an open-source recursive function transformer. More simply it fills in gaps to incomplete snippets of codes and provides a greater understanding of the algorithm. The web client was built to interface with the CLI app.',
        hasDemo: true,
        demoLink: 'http://synduce.herokuapp.com/',
        githubLink: 'https://github.com/DS1S/synduce-app'
    },
    {
        title: 'Brackets',
        imgSrc: bracketsImg,
        technologies: 'React, Express, MongoDB, Heroku, GitHub Actions',
        description: 'Brackets is a web-app for tournament organization and attending. Users can create tournaments and manage brackets as well as participate. The project was completed with friends Vedang, Aarya, and Makan.',
        hasDemo: true,
        demoLink: 'https://csc309-brackets.herokuapp.com/',
        githubLink: ''
    },
    {
        title: 'ArrayIt.js',
        imgSrc: arrayItImg,
        technologies: 'ES6 Javascript, Heroku',
        description: 'ArrayIt.js is a vanilla javascript library used to help those teaching anything related to array algorithms in a simplified manner. Removes worrying about DOM manipulation and focuses more on expressing the algorithm.',
        hasDemo: true,
        demoLink: 'https://pure-fortress-27269.herokuapp.com/',
        githubLink: ''
    },
    {
        title: 'Covid API',
        imgSrc: covidTrackerImg,
        technologies: 'Python, FastAPI, GitHub Actions, Heroku',
        description: 'Covid API stores covid data uploaded and upon request can be used to synthesize the raw csv files previously provided. Utilizes design patterns and clean architecture to establish a robust API.',
        hasDemo: true,
        demoLink: 'https://a2-covid-data-api.herokuapp.com/docs',
        githubLink: ''
    },
    {
        title: 'Tech Conference',
        imgSrc: techConferenceImg,
        technologies: 'Java',
        description: 'Tech Conference is a java application meant to demonstrate the benfit of clean architecture and SOLID principles. Built with a team of 8, took on lead-design role and programming of the majority of systems.',
        hasDemo: false,
        githubLink: 'https://github.com/DS1S/techconference-app'
    }
];