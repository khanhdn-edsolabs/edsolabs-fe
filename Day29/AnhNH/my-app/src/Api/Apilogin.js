
var axios=require('axios')
export const apiUser=(data)=>{
  var config={
    method:'post',
    url:"http://localhost:4000/auth/login",
    headers:{
      'content-Type':'application/json'
    },
    data:data
  }
  axios(config)
  .then((res)=>{
   localStorage.setItem("token",res.data.access_token)
  })
  .catch(()=>{
    alert("tài khoản hoặc mật khẩu sai")
  })
}
