import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h2>Version 1.0.0</h2>
      {/* <button>View Source Code here</button> */}
      <Link className='go-back' to='/'>Go Back</Link>
    </div>
  )
}

export default About
