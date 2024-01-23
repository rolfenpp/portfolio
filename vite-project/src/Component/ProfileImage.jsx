import styled from 'styled-components';


import Hair from '../assets/Profile/Hair.png';
import Neck from '../assets/Profile/Neck.png';

import BR1 from '../assets/Profile/Pixles/BR1.png';
import BR2 from '../assets/Profile/Pixles/BR2.png';
import BR3 from '../assets/Profile/Pixles/BR3.png';

const Frame = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    background: linear-gradient(260deg, #007668, #0076683d);
    color: 'white';
    margin: 20px;
    padding: 20px;
`
export const Image = styled.img `
    width: ${props => props.width || 0}vw;
`
const PixelContainer = styled.div `
    position: relative;
    height: 100%;
    width: 100%;
`
const PixlImg = styled.div`
  position: relative;
  background-image: url(${props => props.src});
  top: ${props => props.top || 0}px;
  left: ${props => props.left || 0}px;
  background-size: cover;
  width: 50px;
  height: 50px;
`;



const ProfileImage = () => {
    return (
        <Frame>
            <Image src={Hair} width={13} />
            <Image src={Neck} width={14}/>
            <PixelContainer>
                {/* <PixlImg top={-30} left={10} src={BR1} />
                <PixlImg top={50} left={80} src={BR2} />
                <PixlImg top={120} left={150} src={BR3} /> */}
            </PixelContainer>
        </Frame>
    );
}

export default ProfileImage;