import React from 'react';
// import { useNavigate } from 'react-router-dom';
import javascript from "../images/javascript.png"
import html from "../images/html.png"
import css from "../images/cs.png"
import react from "../images/react.png"
import redux from "../images/redux.png"
import node from "../images/node.png"
import typescript from "../images/typescript-2.png"
import docker from "../images/docker-2.png"
import sql from "../images/sql.png"
import mongoDb from "../images/mongoDb.png"
import sequelize from "../images/sequelize.png"

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