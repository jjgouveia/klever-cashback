import ReactLoading from 'react-loading';
import cardsList from '../providers/api/nft';

function Modal({ visible, handleModal, cardId, isLogged, buyCard, isLoading }) {
  if (!visible) return null;

  const card = cardsList[cardId];

  function calcCashback() {
    const cardPrice = card.price;
    const cashback = 5;
    return (cardPrice / 100) * cashback;
  }

  return (
    <div
      className='fixed inset-0 bg-klever-darkness bg-opacity-80
      flex justify-center items-center font-MonteSerrat'
    >
      <div
        className='rounded bg-klever-footer h-[480px] w-80
         flex justify-evenly items-center gap-4 flex-col p-4'
      >
        {isLoading ? (
          <ReactLoading type='spin' />
        ) : (
          <>
            <div className='w-full'>
              <img
                src={card.thumbnail}
                alt={card.title}
                className='rounded w-full h-full'
              />
            </div>
            <div
              className='flex bg-klever-footer
          h-full flex-col text-slate-100 gap-8 w-full'
            >
              <h1 className='text-xl'>{card.title}</h1>
              <div>
                <p>
                  On sale for{' '}
                  <span className='price'>{`${card.price} KLV`}</span>
                </p>
                <p>
                  Cashback of{' '}
                  <span className='cashback'>{`${calcCashback()} KLV`}</span>
                </p>
              </div>
              <div className='flex gap-2'>
                <button
                  className='border-klever-strong border-2
              w-full p-3 hover:bg-klever-hover transition
              rounded-lg text-white font-bold sm:text-base
              hover:border-klever-hover'
                  type='button'
                  onClick={handleModal}
                >
                  Dismiss
                </button>
                <button
                  className='bg-klever-strong w-full p-3
              enabled:hover:bg-klever-hover transition rounded-lg
              text-white font-bold sm:text-base
              disabled:cursor-not-allowed'
                  type='button'
                  disabled={!isLogged}
                  onClick={() => buyCard(card.price - calcCashback())}
                >
                  Buy now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
