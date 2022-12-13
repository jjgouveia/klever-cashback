function Badge({ link, title, icon }) {
  return (
    <a
      href={link}
      rel='noreferrer'
      target='_blank'
      title={title}
      type='button'
      className='text-center border-2 border-slate-100 transition-all
      rounded-full h-10 w-10 inline-flex items-center justify-center
      bg-gradient-to-r from-purple-700 via-purple-800
      to-purple-700 hover:bg-gradient-to-br cursor-pointer'
    >
      {icon}
    </a>
  );
}

export default Badge;
