class LoginController {
    constructor($state, $location, CONFIG, SERVER, Auth, Session, Flash) {
        'ngInject' // to override strict-di mode

        this.name = 'login';
        this.$state = $state;
        this.$location = $location;

        // Constants
        this.CONFIG = CONFIG;
        this.SERVER = SERVER;

        // Services
        this.Auth = Auth;
        this.Flash = Flash;

        // Factory
        this.Session = Session;

        // fields
        this.form = {
            email: '',
            password: ''
        };

    }

    login() {
        //API connection here
        let data = {
            email: this.form.email,
            password: this.form.password
        };

        this.Auth.login(data).then((response) => {
            if(response.token){
                this.Session.setToken(response.token);
                this.$state.go('home');
            }
        }, (error) => {
            this.Flash.create('danger', error.data.message);
        });
    }
}

export default LoginController;
