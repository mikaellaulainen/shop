import ContactForm from '../components/ContactForm'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className=' text-center'>
      <p className='display-1 text-center my-5'>CONTACT US!</p>
      <p className='display-4'>You can contact me via:</p>
      <a className='linkedin' href="https://www.linkedin.com/in/mikael-laulainen/" target="_blank" rel="noreferrer"><FaLinkedin size={50}/></a>
      <p className='display-6 my-4'>Or with contact form:</p>
      <ContactForm/>
    </div>

  )
}

export default Contact