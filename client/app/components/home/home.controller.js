class HomeController {
    constructor(Session) {
        'ngInject' // to override strict-di mode
        this.name = 'home';

        // Factory
        this.Session = Session;

    }
}

export default HomeController;
