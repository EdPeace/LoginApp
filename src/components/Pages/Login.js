import Login from '../Login/Login';
function LoginPage(){
    var myClasses = ["text-center", "border", "border-gray-400", "bg-gradient-to-b", "from-green-200", "to-blue-300"];
  return (
    <section className={myClasses.join(" ")}>
      <Login></Login>
    </section>
  )
}

export default LoginPage;