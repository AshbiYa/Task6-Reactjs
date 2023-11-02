import "./SignupStyles.css";

function Signup() {
  return (
    <div class="form-container">
      <h1>Register Here</h1>
      <form>
        <input placeholder="Username" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Confirm password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
export default Signup;
