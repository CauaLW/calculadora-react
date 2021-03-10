import React from 'react'

import './Footer.css'

import LinkedinIcon from '../assets/linkedin-icon.png'
import GithubIcon from '../assets/github-icon.png'

const Footer = () => 
<footer>
    <p className="footer-items">Desenvolvido por Cauã L. Werling <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cau%C3%A3-loewen-werling-a564801b7/0"><img src={LinkedinIcon} alt=""/></a> <a target="_blank" rel="noreferrer" href="https://github.com/CauaLW"><img src={GithubIcon} alt=""/></a></p>
</footer>

export default Footer