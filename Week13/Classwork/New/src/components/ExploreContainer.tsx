import {
    IonButton, IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent, IonIcon,
    IonicSwiper,
    IonImg,
    IonItem
} from "@ionic/react";
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import './ExploreContainer.css';
import 'swiper/swiper-bundle.min.css';
//doesn't do much, supposed to adjust height/width
import '@ionic/react/css/ionic-swiper.css';
import React, { useEffect, useState } from "react";
import { arrowForwardCircleOutline, arrowBackCircleOutline } from 'ionicons/icons';
// import 'axios'
import axios from "axios";

interface ContainerProps {
    name: string;
}

SwiperCore.use([IonicSwiper]);

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [disablePrevButton, setDisablePrevButton] = useState<any>(null);
    const [disableNextButton, setDisableNextButton] = useState<any>(null);
    const [joke, setJoke] = useState<any>(null);
    const [data, setData] = useState<any>(null);
    const [appLog, setAppLog] = useState("");

    let photos =
        [
            { "image": "./assets/airplane/abhilash.jpg", "name": "Abhilash" },
            { "image": "./assets/airplane/aleks.png", "name": "Aleksander" },
            { "image": "./assets/airplane/dongphil.jpg", "name": "Dong Phil" },
            { "image": "./assets/airplane/hemaswi.jpeg", "name": "Hemaswi" },
            { "image": "./assets/airplane/michael.jpg", "name": "Michael" },
            { "image": "./assets/airplane/saahiil.png", "name": "Saahiil" },
            { "image": "./assets/airplane/sanket.jpg", "name": "Sanket" },
            { "image": "./assets/airplane/tanvi.jpg", "name": "Tanvi" },
            { "image": "./assets/airplane/tom.jpeg", "name": "Tom" }
        ];

    let obvious = data
    console.log(obvious)

    function goGetData() {
        let theUrl = "https://api.chucknorris.io/jokes/random";
        axios.get(theUrl).then(
            (response) => {
                log("the data is...", response.data.value);
                setJoke(response.data.value)
            }
        )
    }

    function getNewData() {
        let newURL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
        axios.get(newURL).then(
            (response) => {
                log(response)
                setData(response.data.data)
            }
        )
    }
    // log(data)
    function onPrevButtonClick(e: any) {
        log("onPrevButtonClick(): ");
        goGetData()
        swiperInstance.slidePrev();
    }

    function onNextButtonClick(e: any) {
        log("onNextButtonClick(): ");
        swiperInstance.slideNext();
        getNewData();
    }

    function disableButtonsAsNeeded() {
        if (!swiperInstance) return;
        setDisablePrevButton(swiperInstance.isBeginning);
        setDisableNextButton(swiperInstance.isEnd);
    }

    function onInit() {
        log("onInit:");
    }

    function onUnInit() {
        log("onInit:");
    }

    function onSlideChange() {
        log("onSlideChange()");
        disableButtonsAsNeeded();
    }

    function onSwiperInit() {
        log("onSwiperInit()");
    }

    function onSlideUpdate() {
        log("onSlideUpdate()");
        disableButtonsAsNeeded();
    }

    function log(...theText: any) {
        setAppLog(appLog + theText + ", ");
        console.log("ExploreContainer: ", ...theText);
    }

    useEffect(
        () => {
            onInit();
            return () => {
                onUnInit();
            };
        },
        [],
    );

    return (
        <div>
            {/* <IonItem>
                {obvious.map((dataIndex,) => (
                    <IonItem>
                        <div>
                        </IonItem>
                ))}
            </IonItem> */}

            <Swiper
                onSwiper={setSwiperInstance}
                onAfterInit={() => onSwiperInit()}
                onSlideChange={() => onSlideChange()}
                onUpdate={() => onSlideUpdate()}
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={photo.name}>
                        <IonCard routerLink={"/detail/" + photo.name}>
                            <div className="studentImage">
                                <img src={photo.image}></img>
                            </div>
                            <IonCardHeader>
                                <IonCardTitle>{photo.name}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            </IonCardContent>
                        </IonCard>
                    </SwiperSlide>
                ))}
            </Swiper>
            <IonItem>
            </IonItem>
            <IonCard>
                <IonCardContent>
                    <IonButtons slot="secondary" class="navButtons">
                        <IonButton id="prevButton" color="primary" onClick={onPrevButtonClick}
                            disabled={disablePrevButton}>
                            <IonIcon slot="start" icon={arrowBackCircleOutline} />
                            Previous
                        </IonButton>
                        <IonButton id="nextButton" color="primary" onClick={onNextButtonClick}
                            disabled={disableNextButton}>
                            <IonIcon slot="end" icon={arrowForwardCircleOutline} />
                            Next
                        </IonButton>
                    </IonButtons>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Joke</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {joke}
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Application Log</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {appLog}
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default ExploreContainer;
