module.exports.saturateUserInfo = (user) => {
    if(!user.id) {
        user.id = 'sdf3234gt4';
    }
    if(user.name) {
        const firstName = user.name.split(' ')[0];
        const lastName = user.name.split(' ')[1];
        user.firstName = firstName[0].toUpperCase() + firstName.slice(1, firstName.length);
        user.lastName = lastName[0].toUpperCase() + lastName.slice(1, lastName.length);
        delete user.name;
    }
    if(user.dateBirth) {
        user.age = new Date().getFullYear() - new Date(user.dateBirth).getFullYear();
    }
    if(user.purpose) {
        user.purpose = user.purpose[0].toUpperCase() + user.purpose.slice(1, user.purpose.length);
    }
    return user;
};