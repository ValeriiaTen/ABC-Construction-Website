import React from 'react';
// import Projects from '../Projects/Projects.jsx';
// import About from '../About/About.jsx';
import Services from '../Services/Services.jsx';
import Header from '../Header/Header.jsx';
// import Contact from '../Contact/Contact.jsx';
// import Footer from '../Footer/Footer.jsx';
// import { Route, Routes, Navigate } from 'react-router-dom';

// class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/" element={<Navigate to="/about" />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/projects" element={<Projects />} />
//         </Routes>
//       </div>
//     );
//   }
// }

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
      </div>
    );
  }
}

export default Home;
