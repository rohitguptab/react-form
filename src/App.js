import SignUpForm from "./component/SignUpForm";
import HeadingComponent from "./component/HeadingComponent";
import "./css/style.scss";

function App() {
  return (
    <div className="react-form-sections">
      <div className="react-form_inner">
        <div className="react-form-section react-form-section--left">
          <SignUpForm />
        </div>
        <div className="react-form-section react-form-section--right">
          <HeadingComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
