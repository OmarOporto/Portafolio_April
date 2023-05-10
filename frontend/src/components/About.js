import Accordion from 'react-bootstrap/Accordion'
import './Contact.css'

function AboutBody() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How would you describe your experience in Full Stack development?</Accordion.Header>
        <Accordion.Body>
        I describe my experience as a constant learning process that began when I realized how vast and interesting web development is,
        prompting me to become a web developer by myself. I took my first step by taking free online courses on my own which culminated in
        obtaining a FullStack diploma from <b>Universidad Simón y Patiño</b> and completing the Open online course from <b>University
        of Helsinki</b>. Now I could embark on the next stage, which I consider to be the employment of the knowledge learned.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What programming languages do you master?</Accordion.Header>
        <Accordion.Body>
        I am proficient in <b>Javascript</b> <b>[</b>Express, Nodejs, jwt, bycrypt, axios, Eslint, async/await<b>]</b> and <b>React</b> <b>[</b>
        css, react-bootstrap, Collections, Keys Attributes ,Forms, etc<b>]</b>. I am also familiar with other programming languages such as
        Django and Python, although my preference and greater proficiency lie with the former.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What recent projects have you developed?</Accordion.Header>
        <Accordion.Body>
        This is the most recent project that I have at the moment, although as can be seen on my GitHub account, I have several projects that
        I have been working on during my learning process, but they are not yet at a level of completeness that allows me to showcase them at
        the moment in my <b>Portfolio</b>, with the exception of a calculator. I have also completed Dockerization projects with Jenkins and Nexus
        as a final project for a diploma.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do you like to work in a team?</Accordion.Header>
        <Accordion.Body>
        I like structured work environments where each person is assigned a clear task. I believe that communication between team members is
        vital for the proper development of a task, especially in the field of information technology. That's why I appreciate methodologies
        that are applied to achieve this, such as the Scrum methodology, as they seem to be ideal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How do you handle pressure and tight deadlines?</Accordion.Header>
        <Accordion.Body>
        My academic degree is in Electromechanical Engineering, and I worked in that field for several months, including as part of the
        construction of the metropolitan train system. As we know, this project faced various delays in meeting its objectives, and it was
        there that I learned to deal with the stress of such situations. I understood that when dealing with tight deadlines, one must adapt
        to meet the objective in the most professional manner possible. Failing to do so could lead to mistakes and further delays. Based on
        these experiences, I can work effectively under pressure.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What is your approach to solving complex problems?</Accordion.Header>
        <Accordion.Body>
        Taking some time to sit down and carefully consider the problem at hand while conducting thorough research is often a wise approach.
        It is rare to encounter a problem that has not been tackled before, and attempting to reinvent the wheel is usually not the most
        efficient course of action.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Do you have any experience working with agile methodologies?</Accordion.Header>
        <Accordion.Body>
        I must say sincerelythat I have no experience with agile methodologies. I know how they work and what they are about, but for now,
        I have not had the opportunity to find myself in a job where they are applied.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>What is your favorite project that you have developed so far and why?</Accordion.Header>
        <Accordion.Body>
        I am working on a simple blog page in which people can log write and point blogs presented. The database will be with Mongo and will
        have a small level of security with encryption and jwt but for the moment they are missing some tweaks so it can be presentable.
        Still attached I leave a link to the GitHub of what I have so far:<br/>
          <a href="https://github.com/OmarOporto/fullstack-open-2023-4" className="About" target="_blank" rel="noreferrer">Blogs</a>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  )
}

export default AboutBody