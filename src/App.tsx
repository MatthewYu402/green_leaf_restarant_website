import './App.css'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <div className="bg-image"></div>
      <Navbar />
      <div className="hero">
        <div className="center-wrapper">
          {/* TODO: Turn this into a component or modularize */}
          <div className="main-body">
            <h1 className="home-title">Modern Fusion Sushi & Asian Cuisine</h1>
            <p className="sub-heading">Twenty-one years of dedication to precision, creativity, and the finest<br /> ingredients</p>
            <button className="menu-btn">View Menu</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
