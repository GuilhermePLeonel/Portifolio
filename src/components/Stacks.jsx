import React from 'react';
// import { useNavigate } from 'react-router-dom';
import javascript from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/javascript.png"
import html from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/html.png"
import css from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/cs.png"
import react from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/react.png"
import redux from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/redux.png"
import node from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/node.png"
import typescript from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/typescript-2.png"
import docker from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/docker-2.png"
import sql from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/sql.png"
import mongoDb from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/mongoDb.png"
import sequelize from "/home/guilherme/PROFISSIONAL/portifolio/portifolio/src/images/sequelize.png"

import '../pages/styles/Home.css'

function Stacks() {

  return (
    <div className='stacks' id='stacks'>
        STACKS
        <div className='row'>
          <div className='front-end'>
            FRONT-END
            <div className='list'>
              <img 
              src={javascript}
              alt="logo do javascript"
              className='each'>
              </img>
              <img 
              src={html}
              alt="logo do html"
              className='each'>
              </img>
              <img 
              src={css}
              alt="logo do css"
              className='each'>
              </img>
              <img 
              src={react}
              alt="logo do react"
              className='each'>
              </img>
              <img 
              src={redux}
              alt="logo do redux"
              className='each'>
              </img>
            </div>
            
          </div>

          <div className='back-end'>
            BACK-END
            <div className='list'>
              <img 
              src={node}
              alt="logo do node"
              className='each'>
              </img>
              <img 
              src={typescript}
              alt="logo do typescript"
              className='each'>
              </img>
              <img 
              src={docker}
              alt="logo do docker"
              className='each'>
              </img>
              <img 
              src={sequelize}
              alt="logo do sequelize"
              className='each'>
              </img>
            </div>
            
          </div>

          <div className='data-base'>
            DATA-BASE
            <div className='list'>
              <img 
              src={sql}
              alt="logo do sql"
              className='each'>
              </img>
              <img 
              src={mongoDb}
              alt="logo do mongoDb"
              className='each'>
              </img>
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default Stacks;