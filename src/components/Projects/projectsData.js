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
        description: 'Some description',
        hasDemo: true,
        demoLink: 'http://synduce.herokuapp.com/',
        githubLink: 'https://github.com/DS1S/synduce-app'
    },
    {
        title: 'Brackets',
        imgSrc: bracketsImg,
        technologies: 'React, Express, MongoDB, Heroku, GitHub Actions',
        description: 'Some description',
        hasDemo: true,
        demoLink: 'https://csc309-brackets.herokuapp.com/',
        githubLink: ''
    },
    {
        title: 'ArrayIt.js',
        imgSrc: arrayItImg,
        technologies: 'ES6 Javascript, Heroku',
        description: 'Some description',
        hasDemo: true,
        demoLink: 'https://pure-fortress-27269.herokuapp.com/',
        githubLink: ''
    },
    {
        title: 'Covid API',
        imgSrc: covidTrackerImg,
        technologies: 'Python, FastAPI, GitHub Actions, Heroku',
        description: 'Some description',
        hasDemo: true,
        demoLink: 'https://a2-covid-data-api.herokuapp.com/',
        githubLink: ''
    },
    {
        title: 'Tech Conference',
        imgSrc: techConferenceImg,
        technologies: 'Java',
        description: 'Some description',
        hasDemo: false,
        githubLink: ''
    }
];