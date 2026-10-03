import React from 'react';
import ReactDOM from 'react-dom/client';
import Testimonial from "./components/Testimonials/index";
import Banner from "./components/Banners/index";
import Card from "./components/Cards/index";
import Badge from "./components/Badges/Badge.jsx";

import { FiUploadCloud } from "react-icons/fi";

function App() {
  return (

    <div className="container">


      <h1>Compnent goes here</h1>

      <br />
      <br />
      <br />

      {/* 
        BADGE COMPONENT
        Use case:
        - Status labels
        - Categories
        - Tags
      */}

      {/* Green square badge */}
      <Badge color="green" type="square">
        Hello
      </Badge>

      <br />

      {/* 
        Badge without wrapper children
        Shows component flexibility
      */}
      <Badge children="Non-wrapper" />

      <br />

      {/* Red pill-shaped badge (status / alert style) */}
      <Badge color="red" type="pill">
        Hello
      </Badge>

      <br />

      {/* Indigo badge variant */}
      <Badge color="indigo" type="square">
        Hello
      </Badge>

      <br />

      {/* Blue badge variant */}
      <Badge color="blue" type="square">
        Hello
      </Badge>

      <br />
      <br />

      {/* 
        BANNER COMPONENT
        Use case:
        - Alerts
        - Notifications
        - System messages
      */}

      {/* Success banner */}
      <Banner status="success">
        <Banner.Title>success</Banner.Title>
      </Banner>
      <br />
      {/* Error / warning banner */}
      <Banner status="error">
        <Banner.Title>error</Banner.Title>
      </Banner>
      <br />
      {/* Update / update banner */}
      <Banner status="update">
        <Banner.Title>update</Banner.Title>
        <Banner.Body>new update available, pls update</Banner.Body>
      </Banner>

      <br />
      <br />

      {/* 
        CARD COMPONENT
        Use case:
        - Feature cards
        - Upload blocks
        - Dashboard widgets
        Pattern:
        - Icon passed as JSX prop
      */}
      <Card
        icon={<FiUploadCloud />}
        color="green"
      >
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Body>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Body>
      </Card>

      <br />
      <br />
      <br />


    </div>
  );
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
