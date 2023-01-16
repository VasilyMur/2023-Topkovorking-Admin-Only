module.exports = class UserDto {
    email;

    id;

    isActivated;

    role;

    canCreate;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.canCreate = model.canCreate;
        this.role = model.role;
    }
}