import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Client-Server app' ?
            <ToggleButton active value="Client-Server app" onClick={() => setToggle('Client-Server app')}>CLIENT-SERVER</ToggleButton>
            :
            <ToggleButton value="Client-Server app" onClick={() => setToggle('Client-Server app')}>CLIENT-SERVER</ToggleButton>
          }
          <Divider />
          {toggle === 'block chain' ?
            <ToggleButton active value="block chain" onClick={() => setToggle('block chain')}>BLOCK CHAIN</ToggleButton>
            :
            <ToggleButton value="block chain" onClick={() => setToggle('block chain')}>BLOCK CHAIN</ToggleButton>
          }
          <Divider/>
          {toggle === 'frontend' ?
            <ToggleButton active value="frontend" onClick={() => setToggle('frontend')}>FRONTEND</ToggleButton>
            :
            <ToggleButton value="frontend" onClick={() => setToggle('frontend')}>FRONTEND</ToggleButton>
          }
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects