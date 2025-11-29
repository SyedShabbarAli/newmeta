import Image from "next/image";
import Link from "next/link";

const Footer3 = () => {
    const bgImage = 'assets/img/footer-bg-1.svg';
    return (
    <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_color" style={{ backgroundImage: `url(${bgImage})`}} >
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_footer_top position-relative">
          <div className="cs_newsletter cs_style_1">
            <div className="cs_newsletter_text">
              <h2 className="cs_fs_48 cs_semibold cs_mb_20 wow fadeInDown">MetaCrust Briefings</h2>
              <p className="cs_heading_color mb-0">Secure updates on lightweight monitoring, compliance releases, and partner announcements.</p>
            </div>
            <form className="cs_newsletter_form cs_fs_14">
              <div className="cs_input_wrapper position-relative">
                <span className="cs_input_icon">
                  <Image src="/assets/img/icons/mail.svg" alt="img" width={17} height={12}   />
                </span>
                <input type="email" name="email" placeholder="Work Email" />
              </div>
              <button type="submit" aria-label="Subscribe button" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">Stay Informed</button>
            </form>
          </div>
        </div>
        <div className="cs_footer_main">
          <div className="cs_footer_widget_wrapper">
            <div className="cs_footer_widget cs_text_widget">
              <div className="cs_brand cs_mb_32">
                <Image src="/assets/img/logo-CsdF8INz.png" alt="img" width={194} height={36}   />
              </div>
              <p className="cs_mb_32">At MetaCrust, we deliver advanced security and monitoring for medtech, ocean, and industrial IoT deployments—keeping data private, compliant, and energy efficient.</p>
              <div className="cs_social_links cs_style_1 cs_heading_color">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
            <div className="cs_footer_widget cs_links_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_mb_29">Purpose</h3>
              <p className="cs_mb_18">Secure data transmission, real-time monitoring, energy efficiency, and regulatory compliance—tailor-made for low-power devices.</p>
              <ul className="cs_footer_menu cs_mp_0">
                <li><Link href="/about" aria-label="About MetaCrust">About MetaCrust</Link></li>
                <li><Link href="/integrations" aria-label="Integrations">Platform Overview</Link></li>
                <li><Link href="/contact" aria-label="Contact">Request a Demo</Link></li>
              </ul>
            </div>
            <div className="cs_footer_widget cs_help_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_mb_29">Our Values</h3>
              <ul className="cs_footer_menu cs_mp_0">
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Sustainability</li>
                <li>Collaboration</li>
              </ul>
              <h3 className="cs_footer_widget_title cs_fs_20 cs_semibold cs_mt_20 cs_mb_12">Compliance-Driven</h3>
              <ul className="cs_footer_menu cs_mp_0">
                <li>HIPAA & PIPEDA aligned</li>
                <li>IEC 62443-ready architecture</li>
                <li>Audit trails across device, mobile, cloud</li>
              </ul>
            </div>
            <div className="cs_footer_widget cs_contact_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_mb_29">What Sets Us Apart</h3>
              <ul className="cs_footer_menu cs_mp_0">
                <li>Seamless monitoring & sync</li>
                <li>Plug-and-play compatibility</li>
                <li>Ultra-low power overhead</li>
                <li>Scalable data handling</li>
                <li>Compliance-first design</li>
                <li>Cloud-edge flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_text cs_white_color text-center">© <span className="cs_getting_year"></span> MetaCrust Services Ltd. All rights reserved.</div>
        </div>
      </div>
    </footer>
    );
};

export default Footer3;