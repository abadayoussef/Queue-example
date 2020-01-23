class Queue{
    constructor(){
        this.pointer = this.holder = this.bottom = null;
    }
    queue(data){
        if(!this.bottom){
            this.pointer = this.holder = this.bottom = new Element(data);
            return;
        }
        let temp = this.holder;
        this.holder = this.holder.next = new Element(data);
        this.holder.previous = temp;
    }

    dequeue(){
        if(this.pointer && this.pointer === this.bottom){
            this.pointer = this.bottom.next;
        }
        if(this.bottom && this.bottom.next){
            this.bottom = this.bottom.next;
            this.bottom.previous = null;
        }else{
            this.pointer = this.holder = this.bottom = null;
        }
    }
    next(){
        if(this.pointer && this.pointer.next){
            this.pointer = this.pointer.next;
        }
    }
    previous(){
        if(this.pointer && this.pointer.previous){
            this.pointer = this.pointer.previous;
        }
    }
    show(){
        if(this.pointer){
            return this.pointer.data;
        }
        return "No Data Yet";
    }
}

class Element{
    constructor(data, next, previous){
        this.data = data;
        this.next = next || null;
        this.previous = previous || null;
    }
}

let qu = new Queue();

function queue(){
    qu.queue(document.getElementById('data').value);
    document.getElementById('screen').innerHTML = qu.show();
}

function dequeue(){
    qu.dequeue();
    document.getElementById('screen').innerHTML = qu.show();
}

function next(){
    qu.next();
    document.getElementById('screen').innerHTML = qu.show();
}

function previous(){
    qu.previous();
    document.getElementById('screen').innerHTML = qu.show();
}