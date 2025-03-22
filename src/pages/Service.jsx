export const Service = () => {
  return (
    <div className="container">
      <h2 className="text-center py-3">Services</h2>
      <div className="row">
        {/* Web Development Service */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Our web development services focus on building responsive,
                dynamic websites tailored to meet your business needs. We
                specialize in creating scalable, user-friendly sites with a
                strong emphasis on performance and SEO optimization. By
                integrating the latest technologies and design trends, we ensure
                a seamless browsing experience that enhances engagement and
                drives conversions.
              </p>
            </div>
          </div>
        </div>

        {/* App Development Service */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">App Development</h5>
              <p className="card-text">
                Our app development services offer custom mobile solutions
                designed to elevate your business. Whether for iOS or Android,
                we focus on creating intuitive, high-performance apps with
                smooth interfaces. From concept to launch, our team ensures your
                app is aligned with user expectations, offering exceptional
                functionality and reliability that keeps your audience engaged.
              </p>
            </div>
          </div>
        </div>

        {/* iOS Development Service */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">iOS Development</h5>
              <p className="card-text">
                Our iOS development services provide native app solutions
                optimized for Apple devices. We specialize in creating apps that
                leverage iOS's full potential, ensuring high-quality user
                experiences. With expertise in Swift and Objective-C, our
                developers deliver cutting-edge, secure, and scalable apps that
                cater to your business requirements, helping you build a strong
                presence on the App Store.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Software Development Service */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Software Development</h5>
              <p className="card-text">
                Our software development services offer tailored solutions
                designed to optimize business processes. Whether you need
                enterprise software, SaaS applications, or custom solutions, our
                team delivers high-performance, scalable products. We focus on
                ensuring flexibility, security, and user-centered design to
                create software that aligns perfectly with your operational
                needs, helping you stay ahead in a competitive market.
              </p>
            </div>
          </div>
        </div>

        {/* UI/UX Design Service */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">UI/UX Design</h5>
              <p className="card-text">
                Our UI/UX design services are centered around creating intuitive
                and aesthetically pleasing user interfaces. By understanding
                your target audience, we craft user experiences that promote
                ease of use and engagement. Our approach focuses on clear
                navigation, responsive design, and smooth interactions, ensuring
                that your users enjoy seamless and enjoyable experiences across
                all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
