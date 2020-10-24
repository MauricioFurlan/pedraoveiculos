import React, { useState } from 'react';
import { VideoCardContainer, ModalContent, ModalContainer, Text } from './styles';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import login from '../../../../assets/login.png';
import whats from '../../../../assets/whatsapp.svg';
import './cars.css'

const VideoCard = ({
  videoTitle,
  videoURL,
  videoFotos,
  videoDescrition,
  videoPreco,
  videoDestaque,
}: {
  videoFotos: [];
  videoTitle: string;
  videoURL: string;
  videoDescrition: string;
  videoPreco: string;
  videoDestaque: string;
}) => {
  const getYouTubeId = (youtubeURL: string) => {
    return youtubeURL.replace(
      /^.((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]).*/,
      '$7',
    );
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const img1 = videoFotos
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL,
    )}/maxresdefault.jpg`;
    const breakPoints = [
  { width: 1, itemsToShow: 1 ,slidesToScroll: 1 },
  { width: 550, itemsToShow: 2, slidesToScroll: 1 },
  { width: 768, itemsToShow: 1, slidesToScroll: 1, },
  { width: 1200, itemsToShow: 4 , slidesToScroll: 1},
];

// function importAll(r) {
//   return r.keys().map(r);
// }
function ResponsiveImage( src: string, width: number, height: number) {
  return (
    <div
      style={ { 
        width,
      } }
      className="responsive-image">
      <div style={ {
          paddingBottom: ( height / width * 100 ) + '%'
        } } />
      <img
        src={ src }
        className="responsive-image__image" />
    </div>
  );
}

// const images = importAll(require.context('../../../../assets/carros/polo', false, /\.(png|jpe?g|svg)$/));
// console.log(images)
const whatsMsg = `https://api.whatsapp.com/send?1=pt_BR&phone=5519994229146&text=Olá Pedrão, gostei do ${videoTitle}`
  return (
    <>
    
      <VideoCardContainer
        url={videoDestaque}
        title={videoTitle}
        onClick={() => setModalIsOpen(!modalIsOpen)}
        >
        <span>{videoTitle}</span>
      </VideoCardContainer>
      {modalIsOpen && (
        <ModalContainer open={modalIsOpen}>
          <ModalContent>
            <span onClick={() => setModalIsOpen(!modalIsOpen)}>&#10060;</span>
        <main>
            <article className="teacher-item">
              
                <header>
                    <img 
                        src={login}
                        alt="Pedrão"/>
                    <div>
                        <strong>{videoTitle}</strong>
                        <span>Vendido</span>
                    </div>
                </header>
          <Carousel breakPoints={breakPoints}>

          {img1.map(item => (
            // <img src={item} />
                        <ResponsiveImage
    src={item}
    width={ 1200 }
    height={ 800 } />
            // <Item url={item}></Item>
          ))}
        </Carousel>
                <p>{videoDescrition}</p>
                <footer>
                    <p><strong>R${videoPreco}</strong>
                    </p>
                    <a href={whatsMsg} className="button" target="_blank">
                    <img src={whats} alt="WhatsApp" /> Entrar em contato
                    </a>
                </footer>
            </article>
          </main>
          </ModalContent>

        </ModalContainer>
      )}
    </>
  );
};

export default VideoCard;