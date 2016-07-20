function LinkedList() {
    this.head = null;
    this.length = 0;
}

function Node() {
    var data;
    var next;
}

LinkedList.prototype.insert = function (value, pos) {
    var temp = new Node();
    temp.data = value;
    temp.next = null;

    if (this.head === null) {
        this.head = temp;
    } else {

        var temp2 = new Node();
        temp2 = this.head;

        if (!pos) {
            while (temp2.next != null) {
                temp2 = temp2.next;
            }
            temp2.next = temp;
        } else {
            var before = new Node();
            while (pos != 0) {
                pos--;
                before = temp2;
                temp2 = before.next;

            }

            before.next = temp; // link new to before
            temp.next = temp2; // link new to current position


        }


    }
    this.length++;

}

LinkedList.prototype.removeAt = function (position) {

    if (!this.checkEmpty()) {
        var count = 0;
        var current = new Node();
        var after = new Node();
        var before = new Node();
        current = this.head;

        while (count !== position) {
            count++;
            before = current;
            current = current.next;
            after = current.next;
        }
        before.next = after;

        this.length--;
    }
}

LinkedList.prototype.remove = function (value) {

    if (!this.checkEmpty()) {
        var count = 0;
        var current = new Node();
        var after = new Node();
        var before = new Node();
        current = this.head;


        while (current.data !== value && current.next != null) {
            before = current;
            current = current.next;
            after = current.next;
        }
        before.next = after;
    }
    this.length--;

}

LinkedList.prototype.traverse = function () {

    if (!this.checkEmpty()) {
        var temp2 = new Node();
        temp2 = this.head;
        console.log("[" + temp2.data + "]");
        while (temp2.next != null) {
            temp2 = temp2.next;
            console.log("[" + temp2.data + "]");
        }
    } else {
        console.log('empty');
    }
}

LinkedList.prototype.makeEmpty = function () {
    this.head = null;
}

LinkedList.prototype.checkEmpty = function () {
    return (this.head === null);
}

LinkedList.prototype.giveArray = function () {

    var array = [];
    if (!this.checkEmpty()) {
        var temp2 = new Node();
        temp2 = this.head;
        array.push(temp2.data);
        while (temp2.next != null) {
            temp2 = temp2.next;
            array.push(temp2.data);
        }
    }
    return array;



}