import React from "react";



export default class Form extends React.Component {
    state = {
        string : "th",
        inputText : "Hello user. \n\n This text area here is where you input the body of text you would like to parse. The 'Operative String' is the combination and sequence of characters that you want to look for.",
        ocurrences : 0,
        words : ['a','b',"c"],
        sentences : ['a','b',"c"]

    };

    _regExpEscape = (stringInput) => {
        return stringInput.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
    };
   

    _countString =(event)=> {
        event.preventDefault();
        let regExp = new RegExp(this._regExpEscape(this.state.string), "ig");
        console.log(regExp);
        let strArr = this.state.inputText.match(regExp);
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences:count })
            console.log(count)
        } else {
            console.log("Yo, its null.")
        }
    }
    _wordsWithString =(event)=> {
        event.preventDefault();
        let regExp = new RegExp("\\b\\w*"+(this._regExpEscape(this.state.string))+"\\w*\\b", "ig");
        console.log(regExp);
        let strArr = this.state.inputText.match(regExp);
        this.setState({ words:strArr })
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences:count })
            console.log(count)
        } else {
            console.log("Yo, its null.")
        }
    }
    _sentencesWithString =(event)=> {
        event.preventDefault();
        let regExp = new RegExp('[^.?!]*(?<=[.?!\\s])\\b\\w*'+(this._regExpEscape(this.state.string))+'\\w*\\b(?=[\\s.?!])[^.?!]*[.?!]', 'ig'); 
        console.log(regExp);
        let strArr = this.state.inputText.match(regExp);
        this.setState({ sentences:strArr })
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences:count })
            console.log(count)
        } else {
            console.log("Yo, its null.")
        }
       
    }
    render() {
        return (
            <div className="main-div">
                <form className="main-form" >
                    <div id="a">
                        <label htmlFor="mti" className="text-inputlabel">Text to parse:</label>
                        <textarea type="text" name="mti" className="text-input" 
                            value={this.state.inputText} 
                            onChange={e=>this.setState({inputText:e.target.value})}
                            />
                        </div>
                    <div id="b">
                        <label htmlFor="msi" className="string-input-label">Operative String: </label>
                        <input type="text" name="msi" className="string-input"
                            value={this.state.string}
                            onChange={e=>this.setState({string:e.target.value})} 
                            />
                        <label htmlFor="count">Count the occurences of your string within the text.</label>
                        <button name="count" onClick={this._countString}>Count!</button>
                        <label htmlFor="words">Find all the words your string is used in, if your string is a word, this will return any longer words that have recently eaten it.</label>
                        <button name="words" onClick={this._wordsWithString}>Words!</button>
                        <label htmlFor="sentences">This will return all the sentences that your string occurs in.</label>
                        <button name="sentences"onClick={this._sentencesWithString}>Sentences!</button>
                    </div>
                    
                </form>
                <div id="c">
                        <p>Ocurrences: {this.state.ocurrences}</p>
                        <p>Words: {this.state.words}</p>
                        <p>Sentences: {this.state.sentences}</p>
                </div>
                
            </div>
        );
    }
}