import reactFoto from "../images/IMG_20230220_075702.png"
import project1 from "../images/project1.jpeg"
import git from "../images/git.png"
import gmail from "../images/gmail-2.png"
import linkedin from "../images/linkedin.png"
import { useEffect } from 'react'
import './styles/Home.css'
import NavBar from '../components/NavBar';
import Stacks from '../components/Stacks';

function Home() {
  useEffect(() => {
    document.title = 'Guilherme Leonel';
  }, []);

  return (
    <div>
      <NavBar/>
      <div className='home'>
       <div className="infos" 
       id="infos">
        <div 
        className='name-image'>
          <img 
          src={reactFoto}
          alt="foto de guilherme leonel"
          className='image'>
          </img>
          <div className='name'>
          Guilherme Leonel
          </div>
        </div>
        <div className='title'>
          <div>
          FULL STACK
          </div>
          <div>
          DEVELOPER
          </div> 
          <div className='resume'>
            Como um bom amante de tecnologia, foi em 2022 que encontrei meu caminho na programação e me empenhei 
            em estudar suas tecnologias e práticas através do curso Trybe que por um periodo de 1 ano, modela e forma
            essoas desenvolvedoras full stack de forma muito sólida visando te preparar pro mercado de trabalho. 
            Meu objetivo inicial é ingressar no mercado de trabalho e adquirir o máximo de experiencia e 
            conhecimento possiveis que me garantam assertividade e eficiencia no meu desempenho.
          </div>
        </div>
      </div>
      <div className='projects' id='projects'>
        PROJETOS
        <div>
          <div className='project-1'>
            G-TUNES
            <a 
            href='https://g-tune.vercel.app/'
            target="_blank"
            rel="noreferrer"
            >
              <img
              className='project-thumb'
              src={project1}
              alt='tela inicial do aplicativo'
              ></img>
            </a>
          </div>
          <div className='project-2'>
            EM BREVE...
          </div>
        </div>
      </div>
      <Stacks />
        <div
      className="conexoes"
      id='conexoes'
      >
        CONEXÕES
        <div>
          <a
          href="https://github.com/GuilhermePLeonel"
          target="_blank"
          rel="noreferrer"
          >
            <img
            className="icon"
            src={git}
            alt=" logo do github"
            >
            </img>
          </a>
          <a
          href="https://www.linkedin.com/in/guilherme-pleonel"
          target="_blank"
          rel="noreferrer"
          >
            <img
            className="icon"
            src={linkedin}
            alt=" logo do linkedin"
            >
            </img>
          </a>
          <a
          href="mailto:guilhermepleonel1997@gmail.com"
          target="_blank"
          rel="noreferrer"
          >
            <img
            className="icon"
            src={gmail}
            alt=" logo do gmail"
            >
            </img>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Home;