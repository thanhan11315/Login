import { Link } from "react-router-dom";
function MakeHearder() {
  return (
    <>
      <Link to="/Page1">Page1</Link>
      <Link to="/Page2">Page2</Link>
      <Link to="/Page3">Page3</Link>
      <Link to="/LoginSuccess">LoginSucces</Link>
      <Link to="/">Login</Link>
      <h1>MakeHearder</h1>
    </>
  );
}

export default MakeHearder;
