const logoSizes = {
  default: 'h-20',
  footer: 'h-28 md:h-32',
}

function Logo({ variant = 'default', size = 'default' }) {
  const logoSrc = variant === 'light' ? '/images/whit logo for blue background.png' : '/images/logo.png'

  return (
    <span className="flex items-center">
      <img
        src={logoSrc}
        alt="NELDA ENGINEERING SOLUTIONS LTD"
        className={`${logoSizes[size] || logoSizes.default} w-auto object-contain drop-shadow-sm`}
      />
    </span>
  )
}

export default Logo
