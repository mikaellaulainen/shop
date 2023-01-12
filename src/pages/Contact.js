import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className='text-center'>
      <p className='display-1 text-center my-5'>CONTACT US!</p>
      <p className='display-4'>You can contact me via:</p>
      <a href="https://www.linkedin.com/in/mikael-laulainen/" target="_blank" rel="noreferrer">Linkedin</a>
      <p className='display-6'>Or with contact form:</p>
      <ContactForm/>
    </div>

  )
}

export default Contact