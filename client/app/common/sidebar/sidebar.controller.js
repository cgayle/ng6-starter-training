class SidebarController {
    constructor() {
        'ngInject' // to override strict-di mode

        this.Users = [
            {
                "id": 1,
                "name": "Users List 1"
            },
            {
                "id": 2,
                "name": "Users List 2"
            }
        ];
    }
}

export default SidebarController;
