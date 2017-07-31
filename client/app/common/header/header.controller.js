class HeaderController {
  constructor($state, Session, Auth) {
      'ngInject' // to override strict-di mode

      this.companyName = "Company Name";
      this.$state = $state;

      // Services
      this.Auth = Auth;

      // Factory
      this.Session = Session;
  }

    logout() {
        // this.Auth.logout(this.Session.getToken()).then((response) => {
        //       if(response){
        this.Session.removeToken();
        this.$state.go('login');
        //       }
        // });
    }
}

export default HeaderController;
