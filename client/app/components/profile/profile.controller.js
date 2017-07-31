class ProfileController {
    constructor(User) {
        'ngInject' // to override strict-di mode
        
        this.name = 'PROFILE';
        this.User = User;

        this.User.getLoggedInUserInfo().then((response) => {
            if(response) {
                console.log(response);
                this.userData = response;
            }
        });

    }
}

export default ProfileController;
