export default {
    login(user) {
        localStorage.setItem('user', user)
       return new Promise((res) => {
           setTimeout(() => {
           res(user)
       }, 2000)
    })
    },
    logout() {
        localStorage.removeItem('user')
        return new Promise((res) => {
            setTimeout(() => {
                res(null)
            }, 2000)
    })
  }
}