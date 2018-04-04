function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {  // toString() ==> this
    return '(' + this.x + ',' + this.y +')';
}

var p = new Point(9, 1);

// es6 class

class PointN {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')'  // this ==> instance
    }
}

typeof PointN // 'function'

PointN.prototype.constructor

let p2 = new PointN(0, 9)

PointN.prototype.constructor === p2.constructor  // true

Object.assign(PointN.prototype, {
    print() {
        console.log(this.x)
    }
})




