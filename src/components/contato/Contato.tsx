import style from './Contato.module.scss'
import React from 'react';
import { FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FiLinkedin, FiYoutube} from 'react-icons/fi'

interface iProps {
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
}

function Contato(props: iProps) {

    const {instagram, twitter, linkedin, youtube } = props;

    return (
        <div className={style.container} data-testid="contato-component">
           
        <div className={style.sobrenos} >
            <h1>Quem somos:</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae non cum natus autem placeat po
                ssimus consequuntur earum in ev
                rro fugiat, sequi exercitationem!
            </p>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae non cum natus autem placeat po
                ssimus consequuntur earum in ev
                rro fugiat, sequi exercitationem!
            </p>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae non cum natus autem placeat po
                ssimus consequuntur earum in ev
                rro fugiat, sequi exercitationem!
            </p>
        </div>

        <div className={style.contatos}>
           <h1>Contatos:</h1>
           <h2><BsInstagram /> {instagram}</h2>
           <h2><FiTwitter /> {twitter}</h2>
           <h2><FiLinkedin /> {linkedin}</h2>
           <h2><FiYoutube /> {youtube}</h2>
        </div>

        </div>
    );
}

export default Contato;