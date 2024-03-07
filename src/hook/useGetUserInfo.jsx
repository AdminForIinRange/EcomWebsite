const useGetUserInfo = () => {
    const { name, profilePhoto, userID, isAuth } =
      JSON.parse(localStorage.getItem("auth")) || {};
      console.log( name, profilePhoto, userID, isAuth )
    return { name, profilePhoto, userID, isAuth };
  
  };
  
  export default useGetUserInfo;

  // beuase u are not exporting indavsial values but rather
  // teh whole function u must do const {name, profilePhoto, userID, isAuth} =  useGetUserInfo(), dont forget the "()"