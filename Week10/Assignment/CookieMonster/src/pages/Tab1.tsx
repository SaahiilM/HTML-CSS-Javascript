import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>About Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle><h3>Saahiil Meswaanii</h3></IonCardTitle>
            <IonCardSubtitle><h4>MS. Computer Science</h4></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent >
            <ul>
              <li>Graduate student interested in web and API development.</li>
              <li>Currently working on developing API using Go as an backend developer intern.</li>
              <li>Always learning javascript and ReactJS</li>
            </ul>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle><h3>Education</h3></IonCardTitle>
            <IonCardSubtitle>
              <h4>
                Pace University, New York.
              </h4>
            </IonCardSubtitle>
            {/* <IonCardSubtitle>Master of Science(Ms.) in Computer Science</IonCardSubtitle> */}
            <IonCardContent>
              <ul>
                <li>Master of Science(Ms.) in Computer Science</li>
                <li>Graduation Date: August 2022</li>
              </ul>
            </IonCardContent>
            <IonCardSubtitle>
              <h4>
                Xavier Institute of Technology, Mumbai, India.
              </h4>
            </IonCardSubtitle>
            {/* <IonCardSubtitle>Master of Science(Ms.) in Computer Science</IonCardSubtitle> */}
            <IonCardContent>
              <ul>
                <li>Bachelor of Engineering (B.E) in Computer Engineering</li>
                <li>Graduation Date: August 2019</li>
              </ul>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle><h3>Experience</h3></IonCardTitle>
            <IonCardSubtitle>
              <h4>
                DeltaKai
              </h4>
            </IonCardSubtitle>
            <IonCardSubtitle>Backend Developer Intern</IonCardSubtitle>
            <IonCardContent>
              <ul>
                <li>
                  Designed and developed a RESTful API using GoLang with Gin framework which created and controlled AWS EC2 instances and served data in JSON format.
                </li>
                <li>
                  Containerized and deployed endpoint using Docker.
                </li>
                <li>
                  Used Git for version control, regularly pushed code to Bitbucket, reviewed and merged code from teammates.
                </li>
              </ul>

            </IonCardContent>
            <IonCardSubtitle>
              <h4>
                Atos-Syntel
              </h4>
            </IonCardSubtitle>
            <IonCardSubtitle>Project Trainee</IonCardSubtitle>
            <IonCardContent>
              <ul>
                <li>
                  Assisted in the development of web application using HTML and CSS for employees to book work-related transportation between cities, this streamlined the reimbursement process.
                </li>
                <li>
                  Improved device compatability by making web application responsive using Javascript improving efficiency by 15%
                </li>
              </ul>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
