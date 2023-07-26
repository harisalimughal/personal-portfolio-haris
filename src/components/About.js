
import 'react-multi-carousel/lib/styles.css';

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About</h2>
                        <p>I am Muhammad Haris Ali Mughal , a passionate web developer & designerhaving vast experience in web development. I am doing BS Computer Science from Nuces(Fast) Islamabad Pakistan. I have developed a number of websites for many business startups. I have worked with clients globally and have provided products more than their expectations.

                        <br></br>
                        <br></br>
                        I love coding and keep myself updated by learning new Technologies. I build user firendly products by taking in point of view principles of UI/UX. My first priority is customer staisfaction.
                        <br></br>
                        <br></br>
                        Let us Work together.</p>  

                        <a href="#connect" class="btn-secondary" >Contact Me</a>
                        
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
