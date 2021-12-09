import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
// import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import './ExploreContainer.css';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { useState } from 'react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [swipperInstance, setSwiperInstance] = useState<any>(null)
  // const [isbeginning, setDisabled] = useState<any>(null)

  function onNextClick() {
    swipperInstance.slideNext()
  }

  function onPrevClick() {
    // var disable = false
    // if (swipperInstance.isBeginning) {
    //   return true
    // }
    // else {
    swipperInstance.slidePrev()
    // }
  }

  return (
    <div className="container">
      <Swiper onSwiper={setSwiperInstance}>
        <SwiperSlide>
          <IonCard>
            <img src='assets/images/dongphil.jpg'></img>
            <IonCardHeader>Image 1</IonCardHeader>
            <IonCardContent>
              <IonCardTitle>Image by Dongphil</IonCardTitle>
            </IonCardContent>
          </IonCard>
        </SwiperSlide>
        <SwiperSlide>
          <IonCard>
            <img src='assets/images/abhilash.jpg'></img>
            <IonCardHeader>Image 2</IonCardHeader>
            <IonCardContent>
              <IonCardTitle>Image by Abhilash</IonCardTitle>
            </IonCardContent>
          </IonCard>
        </SwiperSlide>
        <SwiperSlide>
          <IonCard>
            <img src='assets/images/sanket.jpg'></img>
            <IonCardHeader>Image 3</IonCardHeader>
            <IonCardContent>
              <IonCardTitle>Image by Sanket</IonCardTitle>
            </IonCardContent>
          </IonCard>
        </SwiperSlide>

      </Swiper>
      {/* <br></br> */}
      <IonButton color='secondary' shape='round' onClick={onPrevClick} >Previous</IonButton>
      <IonButton color='secondary' shape='round' onClick={onNextClick}>
        Next
        {/* <IonIcon slot='end' icon='arrow-forward-outline'></IonIcon> */}
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
