import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoPython } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonCard>
          <div className='imgDiv'>

            <img src='assets/images/Picture1.png'></img>
          </div>
          <IonCardTitle>Expression Detection</IonCardTitle>
          {/* <IonCardSubtitle><i className='icon ion-logo-python'></i></IonCardSubtitle> */}
          <IonCardContent>
            Expression Detection is a program that integrates the artificial
            intelligence modules in the cloud service made available by
            Microsoft Azure to process the expression in the images and
            display the emotion related to it. This is being applied in big
            corporations to keep track of sentiments of the customers and
            decide business strategies based on that
          </IonCardContent>
        </IonCard>
        <IonCard>
          <div className='imgDiv'>

            <img src='assets/images/OsScanning.png'></img>
          </div>
          <IonCardTitle>OS Scanning</IonCardTitle>
          <IonCardContent>
            Python app that will read the contents of any computer, and it
            should produce an output based on the input provided. The output
            will be written into a logging/logger log file, for a view on
            demand and verification. All the lines of the log file should be
            accompanied by time stamps, along with level message.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <div className='imgDiv'>

            <img src='assets/images/Dash.jpeg'></img>
          </div>
          <IonCardTitle>Stocks Data Plotting</IonCardTitle>
          <IonCardContent>
            Loaded dataframe and used the DASH library in python to develop
            front end web app which plots the data for stocks using parameters
            like volume stock price and other historical data.
          </IonCardContent>
        </IonCard>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" /> */}

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
