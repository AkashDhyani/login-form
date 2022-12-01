export const addUserAction = (user) => {
    return {
      type: "REGISTER",
      payload: {
       email : user.email,
       password : user.password
      }
    }
  }