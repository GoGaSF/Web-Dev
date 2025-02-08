function makeUser() {
        return {
            name: "John",
            ref: this
        };
    }
    let user = makeUser();
alert( user.ref.name ); // undefined cuz ref for makeUser() is global obj, correct one is this - ref: () => this