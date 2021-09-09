import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import ScrollContent from '../util/scrollcontent';

import GradImg from '../assets/grad_resize.png'
import MtImg from '../assets/mtman.png'
import DanImg from '../assets/danmaku_short.gif'

class About extends React.Component{
    componentDidMount(){
        document.title = "About - Benjamin Bazan"
    }
    render(){
    return(
        <>
            <Row className="mb-4">
                <Col xs={{order: 2, span: 12}} sm={{order: 2, span: 12}} md={{order: 1, span: 6}} lg={{order: 1, span: 6}}>
                    <Image src={MtImg} alt="On Mt. Elbert" fluid/>
                </Col>
                <Col xs={{order: 1, span: 12}} sm={{order: 1, span: 12}} md={{order:2, span: 6}} lg={{order: 1, span: 6}} className="my-auto text-center">
                    <ul className="introAbout">
                        <li><h1>Programmer</h1></li>
                        <li><h1>Creator of Things</h1></li>
                        <li><h1>Never knows what to eat</h1></li>
                    </ul>
                </Col>
            </Row>

            <ScrollContent activeFrom={-500} activeTo={400}>
            <Row className="bg-light pt-2 pb-2 mb-5">
                <Col xs={12} sm={12} md={7} lg={9} className="my-auto text-primary px-5">     
                    <p>My name is Benjamin Bazan, and thank you for taking the time to get to know me!</p>
                    <p>I am a software engineer born and living in Milwaukee, Wisconsin. I recently graduated from Carroll University with a B.S. in Computer Science and a minor in Mathematics</p>
                    <p>Previously, I have had experience working in professional settings developing and testing Kubernetes/Docker microservices written in Golang.</p>
                    <p>School and self study has influenced my ever growing set of skills; This includes full stack development knowledge through languages ranging through HTML/CSS/JS, Java, C++, C# or whatever else I decide to pick up.</p>
                </Col>
                <Col xs={12} sm={12} md={5} lg={3} className="text-center">
                <Image src={GradImg} alt="Benjamin Bazan Graduation" fluid/>      
                </Col>
            </Row>
            </ScrollContent>

            <ScrollContent activeFrom={-200} activeTo={600}>
                <h1 className="text-center pt-5 pb-5">Never Stop Learning</h1>
            </ScrollContent>

            <ScrollContent activeFrom={-500} activeTo={500}>
            <Row className="bg-light pt-2 pb-2 mt-5">
                <Col xs={12} sm={12} md={4} className="my-auto"> 
                    <Image src={DanImg} alt="Danmaku game project" fluid/>
                    <h6 className="text-center text-primary">Unity Danmaku Project</h6>
                </Col>
                <Col xs={12} sm={12} md={8} className="my-auto text-primary px-5"> 
                    <p className="mt-3">I am a learner by heart. Constantly in the mood to experience, learn and improve. This desire to expand my world can be shown through my interests: Traveling, Learning Japanese, Assisting friends with film projects, and Game Development.</p>
                    <p>Having an interest in videogames since childhood, it was obvious that I would end up picking up game development as a hobby. When I am not working on regular projects, you’ll typically find me working on game ideas in Unity, taking online courses, or shoving my head into a book on game design.</p>
                </Col>
            </Row>
            </ScrollContent>

            <ScrollContent activeTo={1000} activeFrom={0}>
            <Row className="endAbout pt-3">
                <p>To learn more about me please check out my resume, projects, or contact me using the links below.</p>
            </Row>     
            </ScrollContent>
        </>
    )
    }
}

export default About;