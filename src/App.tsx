import { SideBar } from './components/sidebar/sidebar.component'

import './App.scss'

export default function App() {

  return (
    <div className='App'>
      {/* Layer blur */}
      <svg  viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_6_82)">
        <ellipse cx="93.8722" cy="672.159" rx="93.8722" ry="101.688" fill="#FAC819"/>
        </g>
        <g filter="url(#filter1_f_6_82)">
        <ellipse cx="1346.13" cy="922.312" rx="93.8722" ry="101.688" fill="#ED356C"/>
        </g>
        <g filter="url(#filter2_f_6_82)">
        <ellipse cx="680.574" cy="101.688" rx="93.8722" ry="101.688" fill="#77DD77"/>
        </g>
        <defs>
        <filter id="filter0_f_6_82" x="-350" y="220.471" width="887.744" height="903.376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_6_82"/>
        </filter>
        <filter id="filter1_f_6_82" x="902.256" y="470.624" width="887.744" height="903.376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_6_82"/>
        </filter>
        <filter id="filter2_f_6_82" x="236.701" y="-350" width="887.744" height="903.376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_6_82"/>
        </filter>
        </defs>
      </svg>

      <SideBar />
    </div>
  )
}
