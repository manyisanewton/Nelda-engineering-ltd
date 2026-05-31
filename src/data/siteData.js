import {
  FaBolt,
  FaBuilding,
  FaDroplet,
  FaFaucetDrip,
  FaSolarPanel,
  FaWrench,
} from 'react-icons/fa6'

export const company = {
  name: 'NELDA ENGINEERING SOLUTIONS LTD',
  displayName: 'Nelda Engineering Solutions Ltd',
  slogan: 'Innovative Engineering Solutions',
  email: 'info@neldaengineering.com',
  phone: '0792 369 485',
  phoneHref: 'tel:+254792369485',
  whatsappHref: 'https://wa.me/254792369485',
  postalAddress: 'P.O. Box 73795 - 02000',
  city: 'Nairobi, Kenya',
  physicalAddress: 'Gatatha House, Munyu Road, 1st Floor',
}

export const services = [
  {
    title: 'Water Treatment Solutions, Installation & Servicing',
    text: 'We supply, install and service advanced water treatment systems for homes, businesses and industries.',
    icon: FaDroplet,
    image: '/images/hero-water-treatment.jpeg',
    tags: ['Reverse Osmosis', 'Water Softening', 'Iron Removal', 'Filtration Systems'],
  },
  {
    title: 'Water Pumping Solutions',
    text: 'We supply, install and maintain pumping systems for boreholes, storage tanks, buildings and irrigation.',
    icon: FaFaucetDrip,
    image: '/images/hero-water-pumping.png',
    tags: ['Borehole Pumps', 'Booster Pumps', 'Transfer Pumps', 'Irrigation Systems'],
  },
  {
    title: 'Solar Power Design & Installations',
    text: 'Efficient solar power systems for homes, businesses and water pumping applications.',
    icon: FaSolarPanel,
    image: '/images/hero-solar.jpeg',
    tags: ['Solar Systems', 'Solar Water Pumps', 'Inverters', 'Hybrid Solutions'],
  },
  {
    title: 'Borehole Rehabilitation & Services',
    text: 'Borehole inspection, rehabilitation, pump servicing and general maintenance to restore and improve performance.',
    icon: FaWrench,
    image: '/images/hero-borehole.png',
    tags: ['Borehole Cleaning', 'Pump Servicing', 'Rehabilitation', 'Water Yield Test'],
  },
  {
    title: 'Water Reticulation Systems',
    text: 'Design and installation of water distribution systems, pipe networks, storage connections and layouts.',
    icon: FaBolt,
    image: '/images/hero-site-work.jpeg',
    tags: ['Pipe Networks', 'Storage Systems', 'Distribution Lines', 'System Upgrades'],
  },
  {
    title: 'Plumbing Works & Civil Engineering Works',
    text: 'Plumbing installation, repair, drainage support and civil infrastructure works for residential and industrial projects.',
    icon: FaBuilding,
    image: '/images/hero-civil.png',
    tags: ['Plumbing Works', 'Drainage Systems', 'Civil Works', 'Infrastructure'],
  },
]

export const heroImages = [
  {
    src: '/images/hero-water-treatment.jpeg',
    alt: 'Water treatment solution installation',
  },
  {
    src: '/images/hero-water-pumping.png',
    alt: 'Water pumping solutions equipment',
  },
  {
    src: '/images/hero-solar.jpeg',
    alt: 'Solar power design and installation',
  },
  {
    src: '/images/hero-borehole.png',
    alt: 'Borehole rehabilitation and services',
  },
  {
    src: '/images/hero-plumbing.png',
    alt: 'Plumbing works installation',
  },
  {
    src: '/images/hero-civil.png',
    alt: 'Civil works project',
  },
]

export const trustPoints = [
  'Professional technical support',
  'Reliable installations',
  'Quality materials and equipment',
  'After-sales service',
  'Practical solutions for homes, businesses and institutions',
]

export const projects = [
  'Water Treatment Projects',
  'Solar Power Installations',
  'Pump Installations',
  'Borehole Services',
  'Plumbing and Reticulation Works',
  'Civil Works',
]
