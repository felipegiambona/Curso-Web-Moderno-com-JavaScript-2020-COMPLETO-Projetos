function pessoa() {
    this.idade = 0

    const self = this
    setInterval(() => {
        self.idade++
        console.log(self.idade)
    }/*bind(this)*/, 1000)
}

pessoa()