import Image from "next/image";

const About1 = () => {
    return (
<section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1">
          <div className="row cs_gap_y_50 position-relative z-1">
            <div className="col-lg-5">
              <div className="cs_card_thumbnail position-relative">
                <Image src="/assets/img/cyber-security-concept-shield-on-circuit-board-digital-lines-vector-illustration-isolated-on-white-RG4B7A.jpeg" alt="img" width={486} height={548}   />  
                <div className="cs_about_mask_shape_1 position-absolute">
                </div>
                <div className="cs_elipse_1 cs_radius_100 position-absolute"></div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_28">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                   <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15}   />  
                    <span>What is MetaCrust?</span>
                   <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15}   />  
                  </div>
                  <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">Secure, energy-efficient monitoring for low-power devices</h2>
                </div>
                <p className="cs_card_desc cs_mb_22">
                  MetaCrust is a lightweight software platform that powers secure, energy-efficient communication and real-time monitoring for wearable and IoT health devices. It protects data across device, mobile, and cloud without draining battery life or forcing hardware redesigns.
                </p>
                <ul className="cs_list cs_mp_0 cs_bullet_list cs_mb_22">
                  <li>
                    <span className="cs_bullet_dot" aria-hidden="true"></span>
                    <h3 className="cs_fs_18 cs_semibold mb-0">End-to-end data protection spanning device, mobile, and cloud.</h3>
                  </li>
                  <li>
                    <span className="cs_bullet_dot" aria-hidden="true"></span>
                    <h3 className="cs_fs_18 cs_semibold mb-0">Energy-efficient protocols tuned for battery-sensitive wearables.</h3>
                  </li>
                  <li>
                    <span className="cs_bullet_dot" aria-hidden="true"></span>
                    <h3 className="cs_fs_18 cs_semibold mb-0">Drop-in software stack requiring zero hardware redesign.</h3>
                  </li>
                </ul>
                <a href="#contact" aria-label="Request a demo" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_white_color cs_bold text-uppercase">
                <span>Request a Demo</span>
                <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_star_shape_1 position-absolute">
          <Image src="/assets/img/star-shape.svg" alt="img" width={67} height={67}   />  
        </div>
      </div>
      <div className="cs_height_46 cs_height_lg_40"></div>
    </section>
    );
};


export default About1;

