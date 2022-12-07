const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
class BookMark {
  constructor(isbn, totalPages=0){
    this.isbn=isbn
    this.totalPages=totalPages
    this.bookMarks=[]
  }
  addBookMark(pageNumber){
    if(pageNumber >= 1 && pageNumber <= this.totalPages) {
      return this.bookMarks.push(pageNumber) // push คือการเอาของที่อยู่ในวงเล็บไปใส่ใน array เช่น arr [1,2,3] ใช้ arr.push(4) arr จะมีค่า arr = [1,2,3,4]
    }
    else {
      return this.bookMarks.length
    }
  }
  removeBookMark(pageNumber){
    if(!this.bookMarks.includes(pageNumber)) { // include คือการที่ถาม array ว่ามี pageNumber ไหมเช่น arr = [1,3,4,2] ถ้าใช้ arr.include(2) จะได้ true เพราะมี 2 แต่ถ้าใช้ arr.include(10) จะได้ false เพราะ arr ไม่มี 10
      return undefined
    }
    this.bookMarks = this.bookMarks.filter(e => e!== pageNumber)
    return pageNumber
  }
  goToFirstBookMark(){
    return this.bookMarks[0]
  }
  goToLastBookMark(){
    return this.bookMarks[this.bookMarks.length-1]
  }
  getBookMarks(){
    return this.bookMarks
  }

  
}
module.exports = BookMark























// constructor(isbn, totalPages=0){
//   this.isbn=isbn
//   this.totalPages=totalPages
//   this.bookMarks=[]
// }
// addBookMark(pageNumber){
//   if(pageNumber>=1 && pageNumber<=this.totalPages)
//     this.bookMarks.push(pageNumber)
//   return this.bookMarks.length
// }
// removeBookMark(pageNumber){
//   const beforeRemoveLength=this.bookMarks.length
//   this.bookMarks=this.bookMarks.filter(bookMark=>bookMark!=pageNumber)
//   return this.bookMarks.length===beforeRemoveLength?undefined:pageNumber
// }
// goToFirstBookMark(){
//   return this.bookMarks?.[0]
// }
// goToLastBookMark(){
//   return this.bookMarks?.[this.bookMarks?.length-1]
// }
// getBookMarks(){
//   return this.bookMarks
// }