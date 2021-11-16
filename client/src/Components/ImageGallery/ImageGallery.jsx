import React from 'react';

class ImageGallery extends React.Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={{ height: '650px' }}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: '650px' }}>
              <img
                className="d-block w-100"
                src="./Images/Home3.png"
                alt="Third slide"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  display: 'block',
                }}
              />
            </div>
            <div className="carousel-item" style={{ height: '650px' }}>
              <img
                className="d-block w-100"
                src={'./Images/Home2.png'}
                alt="Second slide"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  display: 'block',
                }}
              />
            </div>
            <div className="carousel-item" style={{ height: '650px' }}>
              <img
                className="d-block w-100"
                src={'./Images/Home1.png'}
                alt="First slide"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  display: 'block',
                }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
