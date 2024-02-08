import Navbar from '@/components/Navbar'
import Contact from '@/components/contact/Contact'
import Events from '@/components/events/Events'
import Footer from '@/components/home/Footer'

const page = () => {
  return (
    <div>
        <Navbar />
        <Events/>
        <Footer />
    </div>
  )
}

export default page
