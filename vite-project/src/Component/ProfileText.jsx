import styled from 'styled-components';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;

    @media (max-width: 380px) {
    /* Styles for screens 768px and wider */
    font-size: 50%
  }

  @media (min-width: 380px) {
    /* Styles for screens 768px and wider */
    font-size: 80%
  }
  @media (min-width: 380px) {
    /* Styles for screens 768px and wider */
    font-size: 80%
  }

`
const TextColor = styled.span `
    color: #007668;
`

const ProfileText = () => {
    return (
        <TextContainer>
            <h1>Hi</h1>
            <h1>I'm Isak</h1>
            <h1>a</h1>
            <h1>Web <TextColor>Developer</TextColor></h1>
        </TextContainer>
    )
}

export default ProfileText