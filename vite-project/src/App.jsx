import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components';
import './App.css'
import ProfileImage from './Component/ProfileImage'
import ProfileText from './Component/ProfileText'
import ProjectImage from './Component/ProjectImage';
import ProjectText from './Component/ProjectText';

const ProfileHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
height: 100vh;
`
const ProjectSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: white;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileHeader>
        <ProfileImage />
        <ProfileText />
      </ProfileHeader>
      <ProjectSection>
       
       <ProjectText />
       <ProjectImage />

      </ProjectSection>
    </>
  )
}

export default App
