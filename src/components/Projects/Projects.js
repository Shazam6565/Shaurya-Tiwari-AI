import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import SA from "../../Assets/Projects/SA.png";
import metatrader from "../../Assets/Projects/metatrader.gif";
import sentiment from "../../Assets/Projects/sentiment.gif"
import cliques from "../../Assets/Projects/cliques.gif"


// import ExperienceCards from "../Experience/ExperienceCards"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={sentiment}
                isBlog={false}
              title="Sentiment Analysis"
              description="Stealing Ur Feelings is a deep learning-powered AR experience which analyzes your facial reactions to reveal the dangers of Big Tech's emotional surveillance programs. Using the AI techniques described in corporate patents, Stealing Ur Feelings learns your deepest secrets just by analyzing your face."
              ghLink="https://github.com/Shazam6565/Sentiment-Analysis"
              demoLink="https://stealingurfeelin.gs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cliques}
              isBlog={false}
              title="Improved Algorithm for Maximal Clique Discovery"
              description="Designed and implemented C++ algorithms for uncertain network analysis, improving speed by 25% and accuracy by 15% for social networks. Our Maximal Clique Algorithm reduced computational needs by 30% for datasets exceeding 350,000 nodes."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
              pdfLink=""

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metatrader}
              isBlog={false}
              title="Algorithmic Trading"
              description="Implemented a trio of S&P 500 algorithmic trading strategies leveraging Python, pandas, NumPy, and Matplotlib, encompassing the development of an Equal-weight index fund, Momentum investing, and Value investing strategies. This project aimed to enhance portfolio performance by integrating varied financial theories."
              ghLink="https://github.com/Shazam6565/Trading-Algo/tree/main"
              demoLink="https://www.tradingview.com/chart/vZeKfHCJ/?symbol=NYSE%3AGS"   
              pdfLink="https://docs.google.com/document/d/1WBKSGyQJhyFJl75_SqjhqLjzwEu8lEEajTmUqJW4qoc/edit?usp=sharing"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Real Estate Price Prediction"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          {/* <Col  md={4} className="project-card"> */}
          {/* <ExperienceCards
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
