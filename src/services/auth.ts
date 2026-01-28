export const auth = {
  async isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  },

  signIn(token: string) {
    localStorage.setItem("token", token);
  },

  signOut() {
    localStorage.removeItem("token");
  },
};
