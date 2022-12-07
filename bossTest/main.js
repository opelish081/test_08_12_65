class Person{
    //cod              e here
    static counts = 1
    constructor(name= 'N/A'){
        this.id = Person.counts++
        this.wishlist = []
        this.name = name
    }
    getId(){     
        return this.id
    }
    getName(){
        return this.name
    }
    getWishlist(){
        return this.wishlist
    }
    addWishlist(item){
        if(item === null || item === undefined){
            return undefined
        }
        return this.wishlist.push(item)
    }
    removeWishlist(item){
        if(item === null || item === undefined){
            return undefined
        }
        else if(this.wishlist.includes(item)){
            return this.wishlist.shift(item)
        }
        return "not found to remove"
    }
    findWishlist(item){
        if(item === null || item === undefined){
            return undefined
        }
        else if(this.wishlist.includes(item)){
            return {index : this.wishlist.indexOf(item),value : item}
        }
        return "not found"
    }
    toString(){
        return this.wishlist.getId,this.wishlist.getName,this.wishlist.getWishlish
    }
}

module.exports = {Person}


