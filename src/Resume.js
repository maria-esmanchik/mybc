//import { Col, Row, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Stack';


export default function Resume() {
    const experience = [
        {
            company: 'Jesmanczyk Sp. z o.o.',
            activities: 'A joint project “Traffic Sign Detector” written in Java  for Android (Camera API, Tensorflow,' +
                        'TextToSpeech API , UI, file storage, background thread and handlers).'
        },
        {
            company: 'Anitex',
            activities: 'In C#(WinForms and WPF) created the applications for accounting automation of the company: ' +
                        'Excel-to-XML accounting data converter for tax inspection and the program that extracts ' +
                        'invoice data from the file of custom bank  text format to Excel.'
        },
        {
            company: '100 ballov.by',
            activities: 'Internship as a Lego Mindstorms teacher.'
        },
        {
            company: 'Freelancer',
            activities: 'Created the Bitcoin trading bot for cex.io exchange using Spring Boot and ' +
                        'REST API. In HTML, JavaScript, Bootstrap created business card site for russian drift ' +
                        'trike entertainment company. In PHP, WordPress created visa application page for small ' +
                        'company from Belarus. Support for a small site in Drupal. For the German entrepreneur Academy.'
        },
        {
            company: 'Full Stack Engineer',
            activities: 'Software Development and Maintenance in C++, Java, Python, JavaScript and C#.'
        },
    ];

    const voluteeringExperience = [
        {
            company: 'Immigration period',
            activities: 'It was a difficult time for me. All this time I lived here on an H4 visa without the ' +
                        'right to work. Furthemore, I moved here to live without knowing English. Therefore, I ' +
                        'spent these 3+ years on learning English and self-development.  I think it was pretty ' +
                        'productive.'
        },
        {
            company: 'Baranova27',
            activities: 'I was accepting and sorting humanitarian aid for Ukraine by type. There were 5-8 people' +
                        'in my team. I had to tell how everything works here ahd check if there were sorting errors.' +
                        'Sometimes it was nessary to count the amount of packadged humanitarian aid and enter to into ' +
                        'tables for shipment.'
        },
        {
            company: 'Razom',
            activities: 'Volunteer at Razom, packing humanitarian medical aid for Ukraine. Used my math ' +
                        'skills to optimize the process :).'
        },
        {
            company: 'Web-dev consulting',
            activities: 'I was helping my entrepreneur friend to understand how work with GitHub, ' +
                        'find a developer(-s), and get the project done.'
        },
        {
            company: 'Software developer tutoring',
            activities: 'I guided women who just started studying programming in how to obtain basic coding skills.'
        },
        {
            company: 'Open Source Development',
            activities: 'I joined the projects: Organic Maps,Tomcat and Netty.'
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
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">                
                    <span class="fs-2 fw-bold">Maryia Yesmanchyk</span>
                </a>

                <ul class="nav nav-pills">
                   <li class="nav-item">
                        <a href="https://github.com/maria-esmanchik" class="nav-link link-dark px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/maryia-yesmanchyk-51213614b/" class="nav-link link-dark px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                </header>
            </div>

            <div class="container px-4 py-5">
            <div class="lead row g-4 py-5 row-cols-1 row-cols-lg-2">
                    <div>
                    <h4>Full-stack Software Engineer</h4>
                    <p class="lead">Fort Lee, NJ 07024, USA</p>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact</button>     
                    </div>
                    <div class="lead">
                        <h2 class="pb-2">Skills</h2>
                        {['Java', 'Android', 'C #', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'MS SQL', 'C++', 'WinAPI', 'UML',
                        'PHP', 'Python', 'AWS', 'Machine Learning'].map(
                            (variant)=> (
                                <span className="mx-1">
                                    <Badge bg="secondary">{variant}</Badge>
                                </span>
                            )
                        )}
                        
                    </div>
                </div> 
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                </div>
                <div class="col-lg-6">
    
                <div class="lead">
                <h2 class="pb-2 border-bottom">Education</h2>
                    {education.map(item =>(
                        <div>
                            <p>{item.nameCourse}
                            <Badge bg="secondary">{item.period}</Badge>
                            </p>
                        </div>
                    ))}               
                </div>  
                                      
                                  
                </div>
                </div>
            </div>

            <div class="container px-4 py-5" id="experience">
                <h2 class="pb-2 border-bottom">Experience</h2>
                <div class="lead row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {experience.map(item => (
                        <div class="col d-flex align-items-start">
                            <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            </div>
                            <div>
                            <h2>{item.company}</h2>
                            <p>{item.activities}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div class="container px-4 py-5" id="voluteeringExperience">
                <h2 class="pb-2 border-bottom">Immigration period/Voluteering experience</h2>
                <div class="lead row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {voluteeringExperience.map(item => (
                        <div class="col d-flex align-items-start">
                            <div class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            </div>
                            <div>
                            <h2>{item.company}</h2>
                            <p>{item.activities}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div class="container">
                <footer class="py-3 my-4">
                    <p class="text-center text-muted border-top">&copy; 2022 Company, Inc</p>
                </footer>
            </div>




            {/* <div class="list-group w-auto">
                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
                    <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">List group item heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                    </div>
                    <small class="opacity-50 text-nowrap">now</small>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
                    <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Another title here</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
                    </div>
                    <small class="opacity-50 text-nowrap">3d</small>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
                    <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Third heading</h6>
                        <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
                    </div>
                    <small class="opacity-50 text-nowrap">1w</small>
                    </div>
                </a>
            </div> */}
        </Stack>
    );
}