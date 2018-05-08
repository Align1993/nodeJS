function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {  // toString() ==> this
    return '(' + this.x + ',' + this.y +')';
}

var p = new Point(9, 1);

console.log(Object.keys(Point.prototype)); // es声明的类支持枚举

// es6 class

class PointN {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')'  // this ==> instance  此类中声明的方法不支持枚举，与es5不同
    }
}

typeof PointN // 'function'

PointN.prototype.constructor

let p2 = new PointN(0, 9)

PointN.prototype.constructor === p2.constructor  // true
console.log(PointN === PointN.prototype.constructor) // 类的数据类型是函数，类本身指向他的构造函数
Object.assign(PointN.prototype, {
    print() {
        console.log(this.x)
    }
})



// Object.create()  创建空对象。参数指定对象继承的原型 ，在javascript中。只有函数function才有prototype属性，函数也是对象，定义了一个函数，它的prototype默认是一个空对象。即{}
// new 1.创建一个实例对象person1。2.调用原型Person的构造函数初始化person1的成员变量。3.将person1的__proto__指向Person的prototype

Object.create = function (o) {
    var Foo = function () {}
    Foo.prototype = o;
   return new Foo();
}


class foo {     // foo.prototype
    constructor () {
        return Object.create(null);
    }
}
let foo2 = new foo;   // foo2.__proto__ === foo.prototype  ==> true  
                      // foo2.constructor.prototype === foo.prototype
                      // foo2.__proto__ == foo2.constructor.prototype
                      // Foo.prototype === d.__proto__  &&  d.__proto__ === d.constructor.prototype


console.log(foo2 instanceof foo); // false


