function Card({ title, id, thumbnail, price, handleClick }) {
  return (
    <div className='store-items item w-72 h-80'>
      <h2 style={{ padding: '5px' }}>Name: {title}</h2>
      <img src={thumbnail} alt='' />
      <span style={{ paddingLeft: '4%' }}>ID: {id}</span>
      <div className='buy-div'>
        <h3>
          Price: <span className='price'>{price}</span> KLV{' '}
        </h3>
        <div className='btn-buy'>
          <button
            type='button'
            className=' bg-violet-600 hover:bg-violet-700
            ext-white font-bold py-0 px-2 rounded-full transition'
            onClick={handleClick}
          >
            Buy NFT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
