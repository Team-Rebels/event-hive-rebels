const Navbar = () => {
    return (
      <div className="flex flex-row justify-between ml-[120px] mt-[50px] h-[49px] w-[1200px]">
        <div className="flex flex-row justify-between">
          <span className="text-blue-700 flex flex-row">Event</span>
          <span>Hive</span>
        </div>
        <div className="flex flex-row justify-between h-[49px] gap-[40px]">
          <p className="text-[16px]">Login</p>
          <p>Signup</p>
        </div>
      </div>
    )
  }
  
  export default Navbar