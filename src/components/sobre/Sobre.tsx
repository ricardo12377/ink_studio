import style from './Sobre.module.scss'
import React from 'react';
import Seguranca from '../components/seguranca.jpg'

interface iProps {
    h1: string;
    p: string;
}

function Sobre(props: iProps) {
    const {h1, p} = props;
   
    return (
        <div className={style.container} data-testid="sobre-component">
            
        <div className={style.descrisao}>
           
         <section className={style.section}>
             <h1>{h1}</h1>
             <p>
                 {p}
             </p>
         </section>
            
        </div>

        <div className={style.foto}>
              <div>
                

              </div>
        </div>

    
        </div>
    );
}

export default Sobre;
