//import { Col, Row, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Stack';
import ContactMe from './components/ContactMe';


export default function Resume() {
    const experience = [
        {
            company: 'Full Stack Engineer',
            periodExp: 'September 2022 - Present',
            activities: 'Software Development and Maintenance in C++, Java, Python, JavaScript and C#.'
        },
        {
            company: 'Jesmanczyk Sp. z o.o.',
            periodExp: 'January 2017 – November 2018',
            activities: 'A joint project “Traffic Sign Detector” written in Java  for Android (Camera API, Tensorflow,' +
                        'TextToSpeech API , UI, file storage, background thread and handlers).'
        },
        {
            company: 'Freelancer',
            periodExp: 'September 2017 - November 2018',
            activities: 'Created the Bitcoin trading bot for cex.io exchange using Spring Boot and ' +
                        'REST API. In HTML, JavaScript, Bootstrap created business card site for russian drift ' +
                        'trike entertainment company. In PHP, WordPress created visa application page for small ' +
                        'company from Belarus. Support for a small site in Drupal. For the German entrepreneur Academy.'
        },
        {
            company: 'Anitex',
            periodExp: 'June 2016 – January 2018',
            activities: 'In C#(WinForms and WPF) created the applications for accounting automation of the company: ' +
                        'Excel-to-XML accounting data converter for tax inspection and the program that extracts ' +
                        'invoice data from the file of custom bank  text format to Excel.'
        },
        {
            company: '100 ballov.by',
            periodExp: 'September 2016 – November 2016',
            activities: 'Internship as a Lego Mindstorms teacher.'
        },
    ];

    const voluteeringExperience = [
        {
            company: 'Immigration period',
            periodVolExp: 'December 2018 – September 2022',
            activities: 'It was a difficult time for me. All this time I lived here on an H4 visa without the ' +
                        'right to work. Furthemore, I moved here to live without knowing English. Therefore, I ' +
                        'spent these 3+ years on learning English and self-development.  I think it was pretty ' +
                        'productive.'
        },
        {
            company: 'Open Source Development',
            periodVolExp: 'May 2021 – September 2022',
            activities: 'I joined the projects: Organic Maps,Tomcat and Netty.'
        },
        {
            company: 'Web-dev consulting',
            periodVolExp: 'August 2022 – September 2022',
            activities: 'I was helping my entrepreneur friend to understand how work with GitHub, ' +
                        'find a developer(-s), and get the project done.'
        },
        {
            company: 'Baranova27',
            periodVolExp: 'February 2022 - August 2022',
            activities: 'I was accepting and sorting humanitarian aid for Ukraine by type. There were 5-8 people' +
                        'in my team. I had to tell how everything works here ahd check if there were sorting errors.' +
                        'Sometimes it was nessary to count the amount of packadged humanitarian aid and enter to into ' +
                        'tables for shipment.'
        },
        {
            company: 'Razom',
            periodVolExp: 'April 2022 - May2022',
            activities: 'Volunteer at Razom, packing humanitarian medical aid for Ukraine. Used my math ' +
                        'skills to optimize the process :).'
        },
        {
            company: 'Software developer tutoring',
            periodVolExp: 'June 2020 – September 2022',
            activities: 'I guided women who just started studying programming in how to obtain basic coding skills.'
        },
    ];
    const education = [
        {
            nameCourse: 'New York Public Library – ESLCourses ',
            period: 'February 2019 - June 2022'            
        },
        {
            nameCourse: 'Bergen County Colledge, Hackensack NJ -ESLCourses  ',
            period: 'October 2021 - May 2022'            
        },        
        {
            nameCourse: 'Skillo - Test Automation with Java ',
            period: 'December 2020 – April 2021'            
        },        
        {
            nameCourse: 'Linkedin Learning-Python ',
            period: 'July 2021'            
        },        
        {
            nameCourse: 'Kaggle - Python ',
            period: 'August 2021'            
        },        
        {
            nameCourse: 'Kaggle - Intro to Machine Learning ',
            period: 'August 2021'            
        },        
        {
            nameCourse: 'Kaggle - Intermediate Machine Learning ',
            period: 'August 2021'            
        },        
        {
            nameCourse: 'Udemy - Java Tutorial for Complete Beginners ',
            period: 'September 2019'            
        },
        {
            nameCourse: 'Computer Academy ItStep, Minsk – Software development ',
            period: 'May 2015 – November 2017'            
        },        
        {
            nameCourse: 'Yanka Kupala State University of Grodno, Grodno – Faculty of Arts and Design/Arts-Teacher ',
            period: 'September 2007 – June 2012'            
        },
    ];
    return (
        <Stack >
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">                
                    <span className="fs-2 fw-bold">Maryia Yesmanchyk</span>
                </a>

                <ul className="nav nav-pills">
                   <li className="nav-item">
                        <a href="https://github.com/maria-esmanchik" className="nav-link link-dark px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/maryia-yesmanchyk-51213614b/" className="nav-link link-dark px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                </header>
            </div>

            <div className="container px-4 py-5">
            <div className="lead row g-4 py-5 row-cols-1 row-cols-lg-2">
                <div>
                <h4>Full-stack Software Engineer</h4>
                <p className="lead">Fort Lee, NJ 07024, USA</p>
                <ContactMe></ContactMe> 
                <div className="lead pt-4">
                    <h2 className="pb-2">Skills</h2>
                    {['Java', 'Android', 'C#', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'MS SQL', 'C++', 'WinAPI', 'UML',
                    'PHP', 'Python', 'AWS', 'Machine Learning'].map(
                        (variant)=> (
                            <span className="mx-1" key={variant.toLowerCase()}>
                                <Badge bg="secondary">{variant}</Badge>
                            </span>
                        )
                    )}
                </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="profileMy.jpg" className="img-fluid rounded-circle border border-primary" alt="Maryia Yesmanchyk" />
                </div>
            </div> 
            <div className="container px-4 py-5" id="experience">
                <h2 className="pb-2 border-bottom">Experience</h2>
                <div className="lead row row-cols-1 row-cols-lg-3">
                    {experience.map(item => (
                        <div className="col d-flex align-items-start" key={item.company}>
                            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                                <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"/>
                            </svg>
                            </div>
                        <div>
                            <h2>{item.company}</h2>
                            <h6>{item.periodExp}</h6>
                            <p>{item.activities}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            </div>

            <div className="container px-4 py-5" id="education">
                <div className="col-lg-6">    
                <div className="lead">
                <h2 className="pb-2 border-bottom">Education</h2>
                    {education.map(item =>(
                        <div key={item.nameCourse}>
                            <p>{item.nameCourse}
                            <Badge bg="secondary">{item.period}</Badge>
                            </p>
                        </div>
                    ))}               
                </div>                                     
                </div>
            </div>

            <div className="container px-4 py-5" id="voluteeringExperience">
                <h2 className="pb-2 border-bottom">Immigration period/Voluteering experience</h2>
                <div className="lead row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {voluteeringExperience.map(item => (
                        <div className="col d-flex align-items-start" key={item.company}>
                            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                            </svg>
                            </div>
                            <div>
                            <h2>{item.company}</h2>
                            <h6>{item.periodVolExp}</h6>
                            <p>{item.activities}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <footer className="py-3 my-4">
                    <p className="text-center text-muted border-top">&copy; 2022 Maryia Yesmanchyk</p>
                </footer>
            </div>
        </Stack>
    );
}