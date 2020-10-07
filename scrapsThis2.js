//8-28-2020 MORE THIS
    const person = {
        firstName: 'Carol',
        lastName: 'Perez',
        nickName: 'Car',
        fullName() {
            const {firstName, lastName, nickName} = this;
            return `${firstName} ${lastName}, aka ${nickName}`;
        },
        printBio() {
            const fullName = this.fullName();
            console.log(`${fullName} is a person.`);
        }
    };
    //value of this is the object that the method is inside of
    person.printBio();