import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './component/Navbar';
import NavbarComponent from "./component/Navbar";
import Footer from "./component/Footer";
import Boxer from './boxing.jpg';
import SixPackMen from './six pack men.jpg';
import TrainingGirl from './training_girl.jpg';
import AbsWorkout from './abs_workout.jpg';
import BoxerGirl from './boxer_girl.jpg';
import FitnessFriends from './fitness_friends.jpg';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <h1>here</h1>

      <section className="py-3 px-2 px-lg-4 bg-light">
        <div className="row gx-3 gy-3" data-masonry='{"percentPosition": true }'>
        <div className="col-xl-3 col-lg-4 col-md-6">
  <div className="card rounded-6 shadow-sm">
    <img src={Boxer} className="card-img-top rounded-t-6" alt="..." />
    <div className="card-body py-0">
      <div className="border-bottom py-2 mb-2">
        <div className="row align-items-center" style={{ lineHeight: "80%" }}>
          <div className="col-9 d-flex">
            <img src="./six pack men.jpg" className="proimg" alt="..." />
            <div className="mx-3">
              <h6 className="m-0 p-0">
                Thilina <i className="bi bi-award-fill" />
              </h6>
              <p className="m-0 p-0 text-muted small">
                <small> asasdasd </small>
              </p>
            </div>
          </div>
          <div className="col-3 text-end small ovel">
            {/* <i class="bi bi-heart fa-lg"></i> */}
            <i className="bi bi-heart-fill fa-lg text-danger" />
            <small> 10k </small>
          </div>
        </div>
      </div>
      <h5 className="card-title">Card title Lorem ipsum dolor, Fugit, odio.</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur!
        Lorem ipsum dolor sit amet consectetur adipisic
      </p>
      <div className="d-flex justify-content-between pb-0">
        <p className="card-text">
          <small className="text-muted ovel">Last </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">updated </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

<div className="col-xl-3 col-lg-4 col-md-6">
  <div className="card rounded-6 shadow-sm">
    <img
      src={SixPackMen}
      className="card-img-top rounded-t-6"
      alt="..."
    />
    <div className="card-body py-0">
      <div className="border-bottom py-2 mb-2">
        <div className="row align-items-center" style={{ lineHeight: "80%" }}>
          <div className="col-9 d-flex">
            <img src="./six pack men.jpg" className="proimg" alt="..." />
            <div className="mx-3">
              <h6 className="m-0 p-0">
                Thilina <i className="bi bi-award-fill" />
              </h6>
              <p className="m-0 p-0 text-muted small">
                <small> asasdasd </small>
              </p>
            </div>
          </div>
          <div className="col-3 text-end small ovel">
            {/* <i class="bi bi-heart fa-lg"></i> */}
            <i className="bi bi-heart-fill fa-lg text-danger" />
            <small> 10k </small>
          </div>
        </div>
      </div>
      <h5 className="card-title">Card title Lorem ipsum dolor, Fugit, odio.</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur!
        Lorem ipsum dolor sit amet consectetur adipisic
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa omnis explicabo incidunt nemo minima vel aliquam quae quam totam quos architecto, accusantium sit repellat. Quidem quibusdam cumque aliquid sint nisi?
      </p>
      <div className="d-flex justify-content-between pb-0">
        <p className="card-text">
          <small className="text-muted ovel">Last </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">updated </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

<div className="col-xl-3 col-lg-4 col-md-6">
  <div className="card rounded-6 shadow-sm">
    <img
      src={TrainingGirl}
      className="card-img-top rounded-t-6"
      alt="..."
    />
    <div className="card-body py-0">
      <div className="border-bottom py-2 mb-2">
        <div className="row align-items-center" style={{ lineHeight: "80%" }}>
          <div className="col-9 d-flex">
            <img src="./training_girl.jpg" className="proimg" alt="..." />
            <div className="mx-3">
              <h6 className="m-0 p-0">
                Thilina <i className="bi bi-award-fill" />
              </h6>
              <p className="m-0 p-0 text-muted small">
                <small> asasdasd </small>
              </p>
            </div>
          </div>
          <div className="col-3 text-end small ovel">
            {/* <i class="bi bi-heart fa-lg"></i> */}
            <i className="bi bi-heart-fill fa-lg text-danger" />
            <small> 10k </small>
          </div>
        </div>
      </div>
      <h5 className="card-title">Card title Lorem ipsum dolor, Fugit, odio.</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur!
        Lorem ipsum dolor sit amet consectetur adipisic
      </p>
      <div className="d-flex justify-content-between pb-0">
        <p className="card-text">
          <small className="text-muted ovel">Last </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">updated </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

<div className="col-xl-3 col-lg-4 col-md-6">
  <div className="card rounded-6 shadow-sm">
    <img
      src={AbsWorkout}
      className="card-img-top rounded-t-6"
      alt="..."
    />
    <div className="card-body py-0">
      <div className="border-bottom py-2 mb-2">
        <div className="row align-items-center" style={{ lineHeight: "80%" }}>
          <div className="col-9 d-flex">
            <img src="./men.jpg" className="proimg" alt="..." />
            <div className="mx-3">
              <h6 className="m-0 p-0">
                Thilina <i className="bi bi-award-fill" />
              </h6>
              <p className="m-0 p-0 text-muted small">
                <small> asasdasd </small>
              </p>
            </div>
          </div>
          <div className="col-3 text-end small ovel">
            {/* <i class="bi bi-heart fa-lg"></i> */}
            <i className="bi bi-heart-fill fa-lg text-danger" />
            <small> 10k </small>
          </div>
        </div>
      </div>
      <h5 className="card-title">Card title Lorem ipsum dolor, Fugit, odio.</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur!
        Lorem ipsum dolor sit amet consectetur adipisic
      </p>
      <div className="d-flex justify-content-between pb-0">
        <p className="card-text">
          <small className="text-muted ovel">Last </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">updated </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

<div className="col-xl-3 col-lg-4 col-md-6">
  <div className="card rounded-6 shadow-sm">
    <img
      src={BoxerGirl}
      className="card-img-top rounded-t-6"
      alt="..."
    />
    <div className="card-body py-0">
      <div className="border-bottom py-2 mb-2">
        <div className="row align-items-center" style={{ lineHeight: "80%" }}>
          <div className="col-9 d-flex">
            <img src="./boxing.jpg" className="proimg" alt="..." />
            <div className="mx-3">
              <h6 className="m-0 p-0">
                Thilina <i className="bi bi-award-fill" />
              </h6>
              <p className="m-0 p-0 text-muted small">
                <small> asasdasd </small>
              </p>
            </div>
          </div>
          <div className="col-3 text-end small ovel">
            {/* <i class="bi bi-heart fa-lg"></i> */}
            <i className="bi bi-heart-fill fa-lg text-danger" />
            <small> 10k </small>
          </div>
        </div>
      </div>
      <h5 className="card-title">Card title Lorem ipsum dolor, Fugit, odio.</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur!
        Lorem ipsum dolor sit amet consectetur adipisic
      </p>
      <div className="d-flex justify-content-between pb-0">
        <p className="card-text">
          <small className="text-muted ovel">Last </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">updated </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

<div className="col-xl-3 col-lg-4 col-md-6">
  <div className="card rounded-6 shadow-sm">
    <img
      src={FitnessFriends}
      className="card-img-top rounded-t-6"
      alt="..."
    />
    <div className="card-body py-0">
      <div className="border-bottom py-2 mb-2">
        <div className="row align-items-center" style={{ lineHeight: "80%" }}>
          <div className="col-9 d-flex">
            <img src="./abs_workout.jpg" className="proimg" alt="..." />
            <div className="mx-3">
              <h6 className="m-0 p-0">
                Thilina <i className="bi bi-award-fill" />
              </h6>
              <p className="m-0 p-0 text-muted small">
                <small> asasdasd </small>
              </p>
            </div>
          </div>
          <div className="col-3 text-end small ovel">
            {/* <i class="bi bi-heart fa-lg"></i> */}
            <i className="bi bi-heart-fill fa-lg text-danger" />
            <small> 10k </small>
          </div>
        </div>
      </div>
      <h5 className="card-title">Card title Lorem ipsum dolor, Fugit, odio.</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur!
        Lorem ipsum dolor sit amet consectetur adipisic
      </p>
      <div className="d-flex justify-content-between pb-0">
        <p className="card-text">
          <small className="text-muted ovel">Last </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">updated </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

<div className="col-xl-3 col-lg-4 col-md-6">
  <div className="card rounded-6 shadow-sm">
    <img
      src={Boxer}
      className="card-img-top rounded-t-6"
      alt="..."
    />
    <div className="card-body py-0">
      <div className="border-bottom py-2 mb-2">
        <div className="row align-items-center" style={{ lineHeight: "80%" }}>
          <div className="col-9 d-flex">
            <img src="./boxer_girl.jpg" className="proimg" alt="..." />
            <div className="mx-3">
              <h6 className="m-0 p-0">
                Thilina <i className="bi bi-award-fill" />
              </h6>
              <p className="m-0 p-0 text-muted small">
                <small> asasdasd </small>
              </p>
            </div>
          </div>
          <div className="col-3 text-end small ovel">
            {/* <i class="bi bi-heart fa-lg"></i> */}
            <i className="bi bi-heart-fill fa-lg text-danger" />
            <small> 10k </small>
          </div>
        </div>
      </div>
      <h5 className="card-title">Card title Lorem ipsum dolor, Fugit, odio.</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, tenetur!
        Lorem ipsum dolor sit amet consectetur adipisic
      </p>
      <div className="d-flex justify-content-between pb-0">
        <p className="card-text">
          <small className="text-muted ovel">Last </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">updated </small>
        </p>
        <p className="card-text">
          <small className="text-muted ovel">3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>


        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
