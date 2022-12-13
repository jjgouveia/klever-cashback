import { useEffect, useState } from 'react';
import cardsList from '../providers/api/nft';
import Card from './Card';
import Modal from './Modal';
import klever from '../providers/klever';
import '../styles/Store.css';

function Store() {
  const [selectedCardId, setSelectedCardId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [logged, setLogged] = useState(false);
  const [userToken, setUserToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    isUserLogged();
  }, [showModal, logged]);

  function isUserLogged() {
    const userToken = klever.address();
    setUserToken(userToken);
    setLogged(!!userToken);
  }

  function selectCard(cardId) {
    const cardIndex = cardId - 1;
    setShowModal(!showModal);
    setSelectedCardId(cardIndex);
  }

  async function buyCard(cardPrice) {
    try {
      setIsLoading(true);
      await klever.send(userToken, cardPrice);
    } finally {
      console.log('aipsdjkiopsd');
      setIsLoading(false);
    }
  }

  return (
    <div className='full-store-container flex justify-around space-x-1 h-1/2 w-full'>
      <Modal
        visible={showModal}
        cardId={selectedCardId}
        handleModal={() => setShowModal(!showModal)}
        isLogged={logged}
        buyCard={buyCard}
        isLoading={isLoading}
      />
      <div className='store-container flex justify-around space-x-1 h-1/2 w-full'>
        {cardsList.map(({ id, title, thumbnail, price }) => (
          <Card
            key={id}
            id={id}
            title={title}
            thumbnail={thumbnail}
            price={price}
            handleClick={() => selectCard(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Store;
