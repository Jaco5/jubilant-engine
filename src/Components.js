import React from "react";
import TextOutput from "./Output";

export default class Form extends React.Component {
    state = {
        string: "",
        inputText: 'Hello user. \n\n This text area here is where you input the body of text you would like to parse, you may resize it by draggin the bottom left corner. The "Operative String" is the combination and sequence of characters that you want to look for. Here are some ideas: \n\n "From a literary analysis perspective, this would be extremely helpful in identifying patterns, verb use, tense, etc. For me, I would use this to search "ing" to help me identify potential gerund verbs that dont agree with my tense."\n\nMore queries will be added as well as persistent storage options, input options, and visualizations. Comments or suggestions are welcome.',
        ocurrences: 0,
        wordCount: 0,
        words: [],
        sentences: [],
        totalSentences: 0

    };

    _regExpEscape = (stringInput) => {
        return stringInput.replace(/[-[\]{}()*+!<=:?.\\/\\^$|#\s,]/g, '\\$&');
    };
    _countString = (event) => {
        event.preventDefault();
        let regExp = new RegExp(this._regExpEscape(this.state.string), "ig");
        let strArr = this.state.inputText.match(regExp);
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences: count })
            console.log(count)
        } else {
            console.log("Yo, its null.")
        };
    };
    _wordsWithString = (event) => {
        event.preventDefault();
        let regExp = new RegExp("\\b\\w*" + (this._regExpEscape(this.state.string)) + "\\w*\\b", "ig");
        let strArr = this.state.inputText.match(regExp);
        this.setState({ words: strArr })
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences: count });
            console.log(count);
        } else {
            console.log("Yo, its null.")
        };
    };
    _sentencesWithString = (event) => {
        event.preventDefault();
        let regExp = new RegExp('[^.?!]*(?<=[.?!\\s])\\b\\w*' + (this._regExpEscape(this.state.string)) + '\\w*\\b(?=[\\s.?!])[^.?!]*[.?!]', 'ig');
        let strArr = this.state.inputText.match(regExp);
        this.setState({ sentences: strArr })
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences: count });
            console.log(count);
        } else {
            console.log("Yo, its null.")
        };
    };
    _totalSentences =(event)=> {
        event.preventDefault();
        let regExp = new RegExp('[^.?!]*(?<=[.?!\\s])(?=[\\s.?!])[^.?!]*[.?!]', 'ig');
        let strArrA = this.state.inputText.match(regExp);
        let strArrB = [];
        for (let i=0;i<strArrA.length;i++) {
            if (strArrA[i].length >= 2) {
                strArrB.push(strArrA[i]);
            } else {console.log(strArrA[i])}
        };
        this.setState({ sentences: strArrB })
        if (strArrB !== null) {
            let count = strArrB.length;
            this.setState({ totalSentences: count })
            console.log(count)
        } else {
            console.log("Yo, its null.")
        };
    };

    render() {
        return (
            <div className="main-div">
                <form className="main-form" >
                    <div id="a">
                        <label htmlFor="mti" className="text-inputlabel">Text to parse:</label>
                        <textarea type="text" name="mti" className="text-input"
                            value={this.state.inputText}
                            onChange={e => this.setState({ inputText: e.target.value })}
                        />
                        <label htmlFor="msi" className="string-input-label">Operative String:</label>
                        <input type="text" name="msi" className="string-input"
                        placeholder="enter a sequence of characters here, letters or numbers. This might be a word, a phrase, an amount, etc..."
                            value={this.state.string}
                            onChange={e => this.setState({ string: e.target.value })}
                        />
                    </div>
                    <div id="b">
                        <h5>Methods:</h5>
                        <button name="count" onClick={this._countString}>Count the occurences of your string within the text.</button>
                        <button name="words" onClick={this._wordsWithString}>Find all the character groups your string is in, if your string is a full word, this will return any longer words that have recently eaten it.</button>
                        <button name="sentences" onClick={this._sentencesWithString}>This will return all the sentences that your string occurs in.</button>
                        <button name="tsentences" onClick={this._totalSentences}>Count total sentences without regard to Operative String.</button>
                    </div>

                </form>
                <div id="c">
                    <TextOutput {...this.state}/>
                </div>

            </div>
        );
    }
}