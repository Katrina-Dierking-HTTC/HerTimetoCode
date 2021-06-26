import {v4 as uuid} from 'uuid'

export const projectData = [
    {
        id: uuid(), 
        title: 'MONSTER ROLODEX',
        img: 'https://blog.hertimetocode.com/wp-content/uploads/2021/06/Monsters.png',
        desc: 'Search through various monsters.', 
        details: 'JavaScript | React | class components, fetch',
        code: 'https://github.com/KDPractice/Monster-rolodex', 
    }, 
    {
        id: uuid(), 
        title: 'THREE CAR PILE UP',
        img: 'https://blog.hertimetocode.com/wp-content/uploads/2021/06/propsImg.png',
        desc: 'A project I created to host a prop-drilling workshop for web dev students.', 
        details: 'JavaScript | React | Hooks',
        code: 'https://github.com/Katrina-Dierking-HTTC/three-car-pileup',
        docs: 'https://blog.hertimetocode.com/wp-content/uploads/2021/06/React-_-Passing-Data-via-Props.pdf'
    }, 
    {
        id: uuid(), 
        title: 'CONTINUOUS GOOD',
        img: 'https://blog.hertimetocode.com/wp-content/uploads/2021/06/ConGood.png',
        desc: 'Drupal class project in progress.', 
        details: 'HTML/CSS | Drupal',
        code: 'https://github.com/Katrina-Dierking/da-assignments/tree/develop/files/continuousgood'
    }, 
    {
        id: uuid(), 
        title: 'PLZA - Let\'s Get Pizza',
        img: 'https://blog.hertimetocode.com/wp-content/uploads/2021/06/plza.png',
        desc: 'A social media site created to bring friends together around their favorite pizza places.', 
        details: 'React | Redux | Semantic UI | AWS | Node | Express | PostgresSQL',
        code: 'https://github.com/Lambda-School-Labs/lets-get-pizza-fe'
    }, 
    {
        id: uuid(), 
        title: 'HER HEATH JOURNAL',
        img: '',
        desc: 'Giving women a place to track all aspects of their physical and mental health, set goals, and share resources.',
        details: '', 
        code: 'https://github.com/HTTC-Freelance-Projects/HerHealthJournal',
        deployed: 'https://herhealthjournal.netlify.app/'
    }
];