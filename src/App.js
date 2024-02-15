import logo from './logo.svg';
import './App.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { SiWebpack } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { FaLeaf } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function App() {
  return (
    <>
      <header className='sticky'>
        <div className="top_header">
          <div className="left_logo">
            <img src={require('./image/image.png')} width={100} alt="" />
          </div>
          <div className="main_right">
            <div className="right_menu">
              <div className="main_menu">
                <ul>
                  <li> <a href="#" className="active">HOME</a> </li>
                  <li> <a href="#">FEATURES</a> </li>
                  <li> <a href="#">CLIENT</a> </li>
                  <li> <a href="#">PRICING</a> </li>
                  <li> <a href="#">FAQ</a> </li>
                  <li> <a href="#">ABOUT</a> </li>
                  <li> <a href="#">BLOG</a> </li>
                  <li> <a href="#">CONTACT</a> </li>
                </ul>
              </div>
            </div>
            <div className="end_icons">
              <div className="social_icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>

        </div>
      </header>
      <div className="slider_section">
        <div className="slider_img">
          <div className="left_slider_det">
            <h6>AWESOME</h6>
            <h1>We are Startup Creative Landsay Agency</h1>
            <p>Carefully crafted after analyzing the needs of different industries and the design achieves a great balance between purpose & presentation.</p>
            <button>
              <a href="#">Learn More <FaArrowRight className='aerrow' /></a>
            </button>
          </div>
          <div className="right_slider_form ">
            <div className="start_form  ">
              <div className="title_form">
                <p>WELCOME TO LANDSAY</p>
              </div>
              <div className="head_form">
                <p>Get 30 Days Free Trial</p>
              </div>
              <div className="form_det">
                <p>Name*</p>
                <input type="text" size={50} placeholder='Enter your name' />
                <p>Email*</p>
                <input type="text" size={50} placeholder='Enter your email' />
                <p>Meassage*</p>
                <textarea name="" id="" cols="48" rows="5" placeholder='Type your query here'></textarea>
              </div>
              <div className="form_button">
                <button>
                  <a href="#">Send Message</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_features_section">
        <div className="product_features_title">
          <h1>Product Features</h1>
          <p>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
        </div>
        <div className="feature_boxs wow animate_animated animate__bounceIn">
          <div className="features_box">
            <div className="img">
              <div className="img_icon">
                <FaChartArea />
              </div>
              <h3>Digital Design</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card the platform.</p>
            </div>
            <div className="feature_link">
              <a href="#">Learn More<FaArrowRight className='aerrow' /></a>
            </div>
          </div>
          <div className="features_box">
            <div className="img">
              <div className="img_icon">
                <FaGift />
              </div>
              <h3>Unlimited Colors</h3>
              <p>Credibly brand stanaads compliant user exteible services College Anibh ocean euismod tincidunt laoreet.</p>
            </div>
            <div className="feature_link">
              <a href="#">Learn More<FaArrowRight className='aerrow' /></a>
            </div>
          </div>
          <div className="features_box">
            <div className="img">
              <div className="img_icon">
                <FaHashtag />
              </div>
              <h3>Strategy Solutions</h3>
              <p>Separated they live in Bookmarks grove right at the coast of the Semantics, a large ocean regelialia.</p>
            </div>
            <div className="feature_link">
              <a href="#">Learn More<FaArrowRight className='aerrow' /></a>
            </div>
          </div>
          <div className="features_box">
            <div className="img">
              <div className="img_icon">
                <SiWebpack />
              </div>
              <h3>Awesome Support</h3>
              <p>Passage you need sure there anything embrassing text hidden all necessary making generator Internet.</p>
            </div>
            <div className="feature_link">
              <a href="#">Learn More<FaArrowRight className='aerrow' /></a>
            </div>
          </div>
          <div className="features_box">
            <div className="img">
              <div className="img_icon">
                <DiResponsive />
              </div>
              <h3>Truly Multipurpose</h3>
              <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
            </div>
            <div className="feature_link">
              <a href="#">Learn More<FaArrowRight className='aerrow' /></a>
            </div>
          </div>
          <div className="features_box">
            <div className="img">
              <div className="img_icon">
                <FaLeaf />
              </div>
              <h3>Easy to customize</h3>
              <p>Donec dolor eget augue commodo varius Aenean iaculis arcu in est facilisis, vitae auctor ipsum aliquet.</p>
            </div>
            <div className="feature_link">
              <a href="#">Learn More<FaArrowRight className='aerrow' /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="how_it_work_section">
        <div className="how_heading">
          <h1>How It Works?</h1>
          <p>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
        </div>
        <div className="how_img_section spacer_section">
          <div className="left_how_img">
            <img src={require('./image/work-1.png')} alt="" />
          </div>
          <div className="right_how_img_det">
            <h3>Tell us your idea</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less. It is a long established fact that a reader will be distracted.</p>
          </div>
        </div>
        <div className="how_img_section  spacer_section">
          <div className="right_how_img_det align_right">
            <h3>Debut with users</h3>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
          </div>
          <div className="left_how_img">
            <img src={require('./image/work-2.png')} alt="" />
          </div>
        </div>
        <div className="how_img_section">
          <div className="left_how_img">
            <img src={require('./image/work-3.png')} alt="" />
          </div>
          <div className="right_how_img_det">
            <h3>Research and Develop</h3>
            <p>High life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Due to its widespread use as filler text for layouts, non-readability is of great importance.</p>
          </div>
        </div>
      </div>
      <div className="video_presentation_section">
        <div className="video_box">
          <div className="video_img">
            <h2>Video Presentation</h2>
            <p>Start working with Landsay that can provide everything you need to generate awareness, drive traffic, connect.</p>
            <div className="video_play_button">
              <MdSlowMotionVideo className='play_button' />
            </div>
          </div>
        </div>
      </div>
      <div className="what_your_client_say_section">
        <div className="what_bg_img">
          <div className="what_bg_details">
            <div className="what_heading">
              <h1>What your client says</h1>
              <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious pulvinar metus molestie sed Semikoli.</p>
            </div>
            <div className="testimonial_slider">
              <div className="img">
                <img src={require('./image/test-1.jpg')} width={80} alt="" />
              </div>
              <div className="name">
                <h3>john Emmanuel</h3>
                <p>New Jersey</p>
              </div>
              <div className="content">
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet autem quos officiis sit obcaecati eaque, natus quis necessitatibus. Assumenda neque odit hic error rerum facere explicabo tempore ipsa blanditiis."</p>
              </div>
            </div>
          </div>
          <div className="coffee_img_slider">
            <img src={require('./image/01.png')} width={100} alt="" />
            <img src={require('./image/02.png')} width={100} alt="" />
            <img src={require('./image/03.png')} width={100} alt="" />
            <img src={require('./image/04.png')} width={100} alt="" />
            <img src={require('./image/05.png')} width={100} alt="" />
          </div>
        </div>
      </div>
      <div className="we_are_digital_section">
        <div className="left_digital_section">
          <h1>We are digital creative Landing Page</h1>
          <p>The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
          <div className="main_no">
            <div className="left_no">
              <h5>4954</h5>
              <p>Happy User</p>
            </div>
            <div className="right_no">
              <h5>1599</h5>
              <p>Complate Project</p>
            </div>
          </div>
          <button>
            <a href="#">Learn More <FaArrowRight className='aerrow' /></a>
          </button>
        </div>
        <div className="right_digital_img_section">
          <img src={require('./image/features.png')} width={550} alt="" />
        </div>
      </div>
      <div className="our_pricing_section">
        <div className="our_pricing_heading">
          <h1>Our Pricing</h1>
          <p>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
        </div>
        <div className="our_pricing_flexx_box">
          <div className="pricing_box">
            <div className="price_box_details">
              <div className="head">
                <h5>Starter</h5>
              </div>
              <div className="price">
                <sub>$</sub><h1>9</h1>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Bandwidth:</h4><b>1GB</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Onlinespace:</h4><b>500MB</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Support:</h4><b>No</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Domain:</h4><b>1</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Hidden Fees:</h4><b>No</b>
              </div>
              <div className="price_button">
                <button>Join now</button>
              </div>
            </div>
          </div>
          <div className="pricing_box">
            <div className="price_box_details">
              <div className="head">
                <h5>Starter</h5>
              </div>
              <div className="price">
                <sub>$</sub><h1>9</h1>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Bandwidth:</h4><b>1GB</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Onlinespace:</h4><b>500MB</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Support:</h4><b>No</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Domain:</h4><b>1</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Hidden Fees:</h4><b>No</b>
              </div>
              <div className="price_button">
                <button>Join now</button>
              </div>
            </div>
          </div>
          <div className="pricing_box">
            <div className="price_box_details">
              <div className="head">
                <h5>Starter</h5>
              </div>
              <div className="price">
                <sub>$</sub><h1>9</h1>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Bandwidth:</h4><b>1GB</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Onlinespace:</h4><b>500MB</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Support:</h4><b>No</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Domain:</h4><b>1</b>
              </div>
              <div className="band">
                <h4><FaCheckCircle className='check' />Hidden Fees:</h4><b>No</b>
              </div>
              <div className="price_button">
                <button>Join now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how_can_we_help_section">
        <div className="how_can_heading">
          <h1>How can we Help you?</h1>
          <p>It is a long established fact that a reader will be of a page when established fact looking at its layout</p>
        </div>
        <div className="left_design_your_FAQ_flexx_box">
          <div className="left_design_your_FAQ_section">
            <div className="left_design_write">
              <div className="left_box">
                <h3><MdOutlineQuestionMark className='questionmark' />Design Your FAQ Page?</h3>
                <p>If your FAQ page does consist of multiple pages, then one critical element you'll need to consider is your navigation bar. If your search bar is tricky to use or doesn't yield desired results, customers.</p>
              </div>
            </div>
            <div className="left_design_write">
              <div className="left_box">
                <h3><MdOutlineQuestionMark className='questionmark' />Monitor the FAQ Page's Performance?</h3>
                <p>In this detailed guide, we’re going to dive deep into the whole concept of FAQs. To discover their main purpose and to find out how it can help generate more sales and leads for your business.</p>
              </div>
            </div>
            <div className="left_design_write">
              <div className="left_box">
                <h3><MdOutlineQuestionMark className='questionmark' />Why you should make an FAQ page?</h3>
                <p>Every business and product website comes with a set of default pages like an “About” page, “Contact” page, “Privacy Policy” page, and more. A FAQ page is one of the few must-have pages on this list.</p>
              </div>
            </div>
          </div>
          <div className="right_regular_update">
            <div className="left_box">
              <h3><MdOutlineQuestionMark className='questionmark' />Regularly update each page?</h3>
              <p>Most online support teams spend hours of their valuable time every day answering these general questions. While it could’ve been easily avoided by placing a FAQs section on the website.</p>
            </div>
            <div className="right_update_form_bg">
              <div className="right_form_update">
                <h3>Have any quetions?</h3>
                <p>Send your quetions in our mail</p>
                <input type="text" placeholder='Enter your email' /><button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="we_are_dynamic_section">
        <div className="we_are_dynamic_heading">
          <h1>We'r dynamic team of talented people of innovative & marketing expert</h1>
          <p>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages of the resulting language.</p>
        </div>
        <div className="counter_dynamic">
          <div className="counter_box">
            <h2>1499+</h2>
            <p>Complete Projects</p>
          </div>
          <div className="counter_box">
            <h2>1080K</h2>
            <p>Satisfied Clients</p>
          </div>
          <div className="counter_box">
            <h2>608</h2>
            <p>Team Members</p>
          </div>
          <div className="counter_box">
            <h2>252</h2>
            <p>Employee</p>
          </div>
        </div>
        <div className="counter_photos">
          <div className="photo_box">
            <img src={require('./image/girl1.jpg')} width={200} alt="" />
            <div className="photo_detail">
              <h4>Wade G. Wilhite</h4>
              <p>CEO/Founder</p>
            </div>
          </div>
          <div className="photo_box">
            <img src={require('./image/boy1.jpg')} width={200} alt="" />
            <div className="photo_detail">
              <h4>William S. Blay</h4>
              <p>CTO/Co-Founder</p>
            </div>
          </div>
          <div className="photo_box">
            <img src={require('./image/girl2.jpg')} width={200} alt="" />
            <div className="photo_detail">
              <h4>Matthew B. Morales</h4>
              <p>Web Designer</p>
            </div>
          </div>
          <div className="photo_box">
            <img src={require('./image/boy2.jpg')} width={200} alt="" />
            <div className="photo_detail">
              <h4>Luke L. Johnston</h4>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="our_blog_section spacer">
        <div className="blog_box">
          <div className="blog_price_box">
            <div className="blog_img">
              <img src={require('./image/blog-01.jpg')} alt="" />
            </div>
            <div className="blog_img_det">
              <a href="#" className='text-black first_a'>Doing a cross country road trip</a>
              <p className='text-secondary'>We craft digital, graphic and dimensional thinking, to create category leading brand.</p>
              <a href="#" className='sec_a'>Read More<FaArrowRightLong className='arright' /></a>
            </div>
          </div>
          <div className="blog_price_box">
            <div className="blog_img">
              <img src={require('./image/blog-02.jpg')} alt="" />
            </div>
            <div className="blog_img_det">
              <a href="#" className='text-black first_a'>Doing a cross country road trip</a>
              <p className='text-secondary'>We craft digital, graphic and dimensional thinking, to create category leading brand.</p>
              <a href="#" className='sec_a'>Read More<FaArrowRightLong className='arright' /></a>
            </div>
          </div>
          <div className="blog_price_box">
            <div className="blog_img">
              <img src={require('./image/blog-03.jpg')} alt="" />
            </div>
            <div className="blog_img_det">
              <a href="#" className='text-black first_a'>Doing a cross country road trip</a>
              <p className='text-secondary'>We craft digital, graphic and dimensional thinking, to create category leading brand.</p>
              <a href="#" className='sec_a'>Read More<FaArrowRightLong className='arright' /></a>
            </div>
          </div>
        </div>
      </div>
      <footer>
          <div className="footer_icons text-secondary mb-30">
          <FaFacebook className='ml-20 i'/>
          <FaTwitter className='ml-20 i' />
          <FaLinkedin className='ml-20 i'/>
          <FaGooglePlusG className='ml-20 i'/>
          </div>
          <div className="footer_terms mb-30">
            <a href="#" className='text-secondary'>Terms & Condition</a>
            <div className='ml-20 text-secondary'>|</div>
            <a href="#" className='ml-20 text-secondary'>Privacy Policy</a>
            <div className='ml-20 text-secondary'>|</div>
            <a href="#" className='ml-20 text-secondary'>Contact Us</a>
          </div>
          <div className="footer_2023 text-secondary">2023 © Landsay - Design with ❤️ by <a href="#" className='b-10'>Themesdesign</a>.</div>
      </footer>
    </>
  );
}

export default App;
