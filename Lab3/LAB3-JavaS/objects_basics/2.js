let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    dis() {
      return this.a - this.b;
    },
    frc() {
        return this.a / this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    object() {
        return alert(object());
    }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );