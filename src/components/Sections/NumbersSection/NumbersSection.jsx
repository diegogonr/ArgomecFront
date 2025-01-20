import CountUp from 'react-countup';

const NumbersSection = () => {
  return (
    <section className="section kf-numbers">
      <div className="container">
        <div className="kf-numbers-items row">
          {/* Number 1 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-numbers-item">
              <div className="num">
                <CountUp start={0} end={256} duration={2} separator="," />+
              </div>
              <div className="desc">
                <h5 className="name">Premium Clients</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
              </div>
            </div>
          </div>

          {/* Number 2 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-numbers-item">
              <div className="num">
                <CountUp start={0} end={362} duration={2} separator="," />+
              </div>
              <div className="desc">
                <h5 className="name">Expert Members</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
              </div>
            </div>
          </div>

          {/* Number 3 */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-numbers-item">
              <div className="num">
                <CountUp start={0} end={753} duration={2} separator="," />+
              </div>
              <div className="desc">
                <h5 className="name">Winning Awards</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
