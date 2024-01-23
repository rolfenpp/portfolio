import styled from 'styled-components';


const ProjectTextField = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 80%;
`

const ProjectText = () => {
    return (
    <ProjectTextField>
        <h1>Social media</h1>
        <p>.NET webapi ReactTS Frontend</p>
    </ProjectTextField>
    
    )
}

export default ProjectText