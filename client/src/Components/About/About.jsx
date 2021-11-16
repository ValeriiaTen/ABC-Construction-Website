import React from 'react';
// import images from '/client/public/images.js';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import { Content, ImageDiv, TextDiv } from './About.style.jsx';

class About extends React.Component {
  render() {
    return (
      <div>
        <ImageGallery />

        <Content>
          <TextDiv>
            <h2>Christopher Spear, Owner and Lead Project Manager</h2>
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
          <ImageDiv>
            <img
              className="d-block w-100"
              src={'./Images/Owner.png'}
              alt="First slide"
              style={{ objectFit: 'fill' }}
            />
          </ImageDiv>
        </Content>
        <div class="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque
            hic, incidunt mollitia. Eius autem, asperiores velit, quaerat
            blanditiis ratione.
          </p>
          <blockquote cite="Tim Berners-Lee">
            The Semantic Web is not a separate Web but an extension of the
            current one, in which information is given well-defined meaning,
            better enabling computers and people to work in cooperation.
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            quam, dignissimos voluptas, vel provident delectus blanditiis
            assumenda sunt tenetur, cupiditate adipisci tempora beatae quibusdam
            quisquam nemo facilis illum voluptatibus eaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque
            hic, incidunt mollitia. Eius autem, asperiores velit, quaerat
            blanditiis ratione.
          </p>
        </div>
        <Content>
          <TextDiv>
            <h2>Christopher Spear, Owner and Lead Project Manager</h2>
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
          <ImageDiv>
            <img
              className="d-block w-100"
              src={'./Images/Owner.png'}
              alt="First slide"
              style={{ objectFit: 'fill' }}
            />
          </ImageDiv>
        </Content>
      </div>
    );
  }
}

export default About;
