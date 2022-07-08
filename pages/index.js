import Image from 'next/image'
import style from '../styles/home.module.scss'
import Socials from '../components/socials'
import Main from '../components/main'
import Projects from '../components/projects'

function Circle() {
  return (
    <div className={style.circle}>
      <div className={style.circle__inner}>
        <div className={style.circle__image}>
          <Image
            src="/circle.jpg"
            alt="Circle"
            width={1920}
            height={1920}
            loading="eager"
            draggable={false}
            unoptimized={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="grid justify-items-center">
      <Circle/>
       <div className="flex md:w-7/12 w-11/12 items-center h-screen">
        <div className="items-center space-y-4">
            <Main />
            <Socials />
            <Projects />
          </div>
       </div>
    </div>
  )
}
