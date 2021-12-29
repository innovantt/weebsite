
import { CombineForm } from '../components/Combine/CombineForm'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/Navbar/NavBar'


export default function Home() {
  return (
    <div>
     
      <NavBar/>
      
      <CombineForm/>
      <Footer/>
      
    </div>
  )

}

//<Route path="/register" render={() => <UserRegister />} />

//<Route path="/login" render={() => <UserLogin />} />
//
