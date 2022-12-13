import swapSecure from '../assets/images/swap-easily.png';
import klever from '../providers/klever';

function Hero() {
  return (
    <section
      className='bg-klever-dark
      h-2/6 sm:h-fit font-MonteSerrat'
    >
      <div
        className='flex flex-col sm:flex-row gap-16 justify-center
        items-center h-fit sm:h-full sm:p-16 sm:justify-evenly self-center'
      >
        <div className='flex justify-center'>
          <img
            className='w-64 sm:w-96'
            src={swapSecure}
            alt='Bitcoins se transformando em KLV atravessando um celular'
          />
        </div>
        <div
          className='flex flex-col w-64 h-fit gap-8 sm:gap-0
          justify-evenly items-center sm:h-full sm:w-2/4 sm:p-0'
        >
          <h2
            className='text-white text-base
          sm:text-2xl font-semibold text-left'
          >
            Swap your Klever Cashback instantly. Get rewards for referring your
            friends. And much more.
          </h2>
          <button
            className='bg-klever-strong w-fit p-3
            rounded-lg text-white font-bold sm:text-base'
            type='button'
          >
            More about Klever Cashback
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
