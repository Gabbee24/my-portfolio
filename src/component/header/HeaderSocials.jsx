import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank'><AiFillLinkedin/></a>
        <a href="https://github.com" target='_blank'><AiFillGithub/></a>
        <a href="https://twitter.com" target='_blank'><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials