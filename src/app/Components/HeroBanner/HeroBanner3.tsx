import Image from "next/image";

const HeroBanner3 = () => {
  return (
    <section className="cs_hero cs_style_1">
      <div className="cs_hero_content cs_accent_bg cs_bg_filed cs_radius_50 position-relative" >
        <div className="container">

          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-5 order-lg-2">
              <div className="cs_hero_thumbnail">
                <Image src="/assets/data-security-C4gJutBN.webp" alt="MetaCrust secure monitoring" width={749} height={641}   />
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="cs_hero_text cs_section_heading cs_style_1 position-relative z-2">
                <p className="cs_hero_subtitle cs_white_color cs_heading_font cs_mb_12 text-center text-uppercase">
                  <span>METACRUST</span>
                </p>
                <h1 className="cs_hero_title cs_fs_64 cs_white_color cs_mb_20 wow fadeInUp">
                  Secure, Energy-Efficient Monitoring for Low-Power Devices
                </h1>
                <p className="cs_hero_desc cs_white_color cs_mb_24">
                  A lightweight software platform delivering end-to-end protection and real-time visibility for wearables, IoT health, and other battery-sensitive hardware—without hardware redesigns.
                </p>

                <div className="cs_btns_group">
                  <a href="#contact" aria-label="Request a demo" className="cs_btn cs_style_1 cs_theme_bg_4 cs_fs_14 cs_bold cs_heading_color text-uppercase">
                  <span>Request a Demo</span>
                  <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </a>
                  <div className="cs_client_info_wrapper">
                    <div>

                    </div>
                  </div>
                </div>
             

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroBanner3;     
