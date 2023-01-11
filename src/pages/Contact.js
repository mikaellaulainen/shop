import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div className='text-center'>
      <p className='contact text-center'>CONTACT US!</p>
      <p>You can contact me via:</p>
      <a href="https://www.linkedin.com/in/mikael-laulainen/" target="_blank" rel="noreferrer">Linkedin</a>
      <p>Or with contact form:</p>
      <ContactForm/>
    </div>

  )
}

export default Contact