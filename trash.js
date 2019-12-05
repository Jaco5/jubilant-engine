



// _querySelector = (event) => {
//     let regExp;

//     switch (this.state.switch) {

//         case 1 :  
//             regExp = new RegExp(this._regExpEscape(this.state.string), "ig")
//             break
//         case 2 :  
//             regExp = new RegExp("\\b\\w*" + (this._regExpEscape(this.state.string)) + "\\w*\\b", "ig");
//             break
//         case 3 :  
//             regExp = new RegExp('[^.?!]*(?<=[.?!\\s])\\b\\w*' + (this._regExpEscape(this.state.string)) + '\\w*\\b(?=[\\s.?!])[^.?!]*[.?!]', 'ig')
//             break
//         case 4 :  
//             regExp = new RegExp('[^.?!]*(?<=[.?!\\s])(?=[\\s.?!])[^.?!]*[.?!]', 'ig')
//             break
//         default : break
//     }
//     console.log(regExp);
//     let strArr = this.state.inputText.match(regExp);
//     this.setState({ sentences: output })
//     console.log(strArr);
//     if (strArr !== null) {
//         let count = strArr.length;
//         this.setState({ ocurrences: count })
//         console.log(count)
//     } else {
//         console.log("Yo, its null.")
//     }
// }

// I think it makes sense to wait on implementing this until I have a database set up.