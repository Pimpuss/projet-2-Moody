import './NavbarMobile.css'
import { Link } from 'react-router-dom'
import iconHome from '../assets/homeREDIM.png'
import iconMovie from '../assets/movieREDIM.png'
import iconSerie from '../assets/serieREDIM.png'
import iconGames from '../assets/gamesREDIM.png'
import EmojisNavBarMobile from './EmojisNavBarMobile'

const NavbarMobile = props => {
  const navbarsecret = document.querySelector('.navbarmobile-secret')
  const navbarmobile = document.querySelector('.navbarmobile')
  const circleBtn = document.querySelector('.circle-btn')
  const handleClick = () => {
    if (navbarsecret.style.display == 'none') {
      navbarsecret.style.display = 'block' /* ETAT APRES CLICK*/
      navbarmobile.style.borderRadius = '0'
      circleBtn.style.bottom = '10px'
      circleBtn.style.height = '50px'
      circleBtn.style.width = '50px'

      //   FORMAT EMOJI CIBLE aligné aux icones MENUS
      //   navbarmobile.style.borderRadius = '0'
      //   circleBtn.style.position = 'none'
      //   circleBtn.style.bottom = '2px'
        // circleBtn.style.height = '45px'
      //   circleBtn.style.width = '45px'
    } else {
      navbarsecret.style.display = 'none' /* ETAT PAR DEFAUT*/
      navbarmobile.style.borderRadius = '10px 10px 0 0'
      circleBtn.style.bottom = '20px'
      circleBtn.style.height = '60px'
      circleBtn.style.width = '60px'
    }
  }

  return (
    <div className='navbar-container'>
      <div className='navbarmobile-secret'>
        <EmojisNavBarMobile
          emojiSelected={props.emojiSelected}
          setEmojiSelected={props.setEmojiSelected}
          aubergine={props.aubergine}
          setAubergine={props.setAubergine}
        />
      </div>
      <div className='navbarmobile'>
        <Link to={'/'}>
          <img className='icon' src={iconHome} alt='icon Accueil' />
        </Link>
        <Link to={'/Films'}>
          <img className='icon' src={iconMovie} alt='icon Film' />
        </Link>
        <div className='circle-btn' onClick={() => handleClick()}></div>
        <Link to={'/Series'}>
          <img className='icon' src={iconSerie} alt='icon Serie' />
        </Link>
        <Link to={'/Minijeux'}>
          <img className='icon' src={iconGames} alt='icon Jeux' />
        </Link>
      </div>
    </div>
  )
}
export default NavbarMobile
