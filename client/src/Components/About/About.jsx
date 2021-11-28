import React from 'react';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import {
  Container,
  ImageDiv1,
  ImageDiv,
  TextDiv1,
  TextDiv,
  TeamPhoto,
  TeamText,
  Blockquote,
} from './About.style.jsx';

class About extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: '25px' }}>
          <ImageGallery />
        </div>

        <Container>
          {/* FIRST BLOCK */}
          <ImageDiv1>
            <img
              // className="d-block w-100"
              src={'./Images/Owner.png'}
              alt="First slide"
              style={{ width: '100%' }}
            />
          </ImageDiv1>

          <TextDiv1>
            <h2>Christopher Spear, Owner and Lead Project Manager</h2>
            <p>
              It is a long establishesum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </TextDiv1>

          <Blockquote>
            <div className="container">
              <blockquote cite="Tim Berners-Lee">
                The Semantic Web is not a separate Web but an extension of the
                current one, in which information is given well-defined meaning,
                better enabling computers and people to work in cooperation.
              </blockquote>
            </div>
          </Blockquote>

          {/* SECOND BLOCK */}
          <TextDiv>
            <h2>Moscow</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </TextDiv>

          <ImageDiv>
            <img
              // className="d-block w-100"
              src={'./Images/Moscow1.png'}
              alt="First slide"
              style={{ width: '100%' }}
            />
          </ImageDiv>

          <Blockquote></Blockquote>
          <ImageDiv>
            <img
              // className="d-block w-100"
              src={'./Images/Moscow2.png'}
              alt="First slide"
              style={{ width: '100%' }}
            />
          </ImageDiv>
          <TextDiv>
            <h2>Moscow, Russia</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </TextDiv>

          <TeamPhoto>
            <img
              className="d-block w-100"
              src={'./Images/Team.png'}
              alt="First slide"
            />
          </TeamPhoto>
          <TeamText>
            <h2>Our Team</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over
            </p>
          </TeamText>
        </Container>
      </div>
    );
  }
}

export default About;
