import { type FC } from 'react';
import PaginationDot from './PaginationDot';
import './style.css';


const TestimonialSection: FC = () => {
  return (
    <section className="testimonial-section">
      <div className='decor top-decor'>
        <img src="assets/testimonial/top.svg" alt="Background Decoration" className="background-decor" />
      </div>
      <div className="inner-container">
        <div className="left-side">
          <div className="illustration-container">
            <img src="assets/testimonial/image.png" alt="Person standing on a graph" />
          </div>
        </div>
        <div className="right-side">
          <h2 className="section-title">What our client say</h2>
          <div className="testimonial-content">
            <img src="assets/testimonial/quote-bg.svg" alt="Background Decoration" className="background-decor" />
            <p className="testimonial-text">
              A year ago when we were looking to scale our technology engineering team, ACHIEVA reached out to us and provided an excellent solution. They were able to quickly understand the technology staffing needs and provided verified and knowledgeable resources within a short amount of time. I have personally visited their campus and was pleased to see that they have every amenity that one would expect from an IT service provider. Their associates are very professional and knowledgeable in their area of expertise. I would recommend ACHIEVA for any organization looking to grow with the right technology teams.
            </p>
            <p className="client-name">- Paul Tuner</p>
          </div>
        </div>
      </div>
      <div className="pagination">
        <PaginationDot isActive={true} />
        <PaginationDot isActive={false} />
        <PaginationDot isActive={false} />
        <PaginationDot isActive={false} />
      </div>
      <div className='decor bottom-decor'>
        <img src="assets/testimonial/bottom.svg" alt="Background Decoration" className="background-decor" />
      </div>
    </section>
  );
};

export default TestimonialSection;