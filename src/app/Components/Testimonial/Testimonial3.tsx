"use client"
import Image from "next/image";
import Slider from "react-slick";

const Testimonial3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  


        const testimonialContent = [
        {subtitle:'Chief Medical Officer, Northwell RPM Program', title:'Dr. Nina Hassan', content:'MetaCrust gave us encrypted telemetry from 4,000+ home patients without draining their wearables. Deployment dropped from a quarter to two weeks, and our clinicians finally trust the data stream end-to-end.'},             
        {subtitle:'Director of Operations, PolarSafe Mining', title:'Ethan Varga', content:'We needed ruggedized, battery-sensitive safety badges to report vitals underground. MetaCrust let us ship secure firmware updates overnight and cut battery overhead to under 15% while keeping CSA compliance.'},             
        {subtitle:'VP of Product, AtmosSense Labs', title:'Leah Choudhury', content:'Environmental sensors on saildrones used to miss data sync windows whenever connectivity dipped. MetaCrust’s lightweight agents buffer, encrypt, and reconcile every packet without ballooning memory consumption.'},             
      ]; 

    return (
<section className="cs_testimonial cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_47 position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15}   />
            <span>Customer Proof</span>
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15}   />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">How teams deploy MetaCrust at scale</h2>
        </div>
        <div className="testimonial_slider_content cs_slider position-relative">
          <div className="cs_testimonial_shape_1 position-absolute">
            <Image src="/assets/img/testimonial-shape-1.svg" alt="img" width={1296} height={388}   />
          </div>
          <div className="cs_single_product_nav">

          </div>
          <div className="cs_height_40 cs_height_lg_40"></div>
          <div className="cs_single_product_thumb">

            <Slider  {...settings}>
            {testimonialContent.map((item, i) => (
            <div key={i} className="cs_slide">
              <div className="testimonial_content text-center">
                <div className="cs_testimonial_heading cs_mb_27 cs_mt_20">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_4">{item.title}</h3>
                  <p className="cs_fs_14 mb-0">{item.subtitle}</p>
                </div>
                <blockquote>
                  {item.content} 
                </blockquote>
                <div className="cs_rating" data-rating="5">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
            </div>
            ))}
            </Slider>


          </div>
        </div>
        <div className="cs_testimonial_shape_2 position-absolute">
          <Image src="/assets/img/trash-group.svg" alt="img" width={113} height={114}   />
        </div>
        <div className="cs_testimonial_shape_3 position-absolute">
          <Image src="/assets/img/vector-4.svg" alt="img" width={167} height={529}   />
        </div>
        <div className="cs_bubble_1 cs_radius_100 cs_theme_bg_5 position-absolute"></div>
        <div className="cs_bubble_2 cs_radius_100 cs_theme_bg_2 position-absolute"></div>
        <div className="cs_bubble_3 cs_radius_100 cs_theme_bg_3 position-absolute"></div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Testimonial3;