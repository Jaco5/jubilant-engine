import React from "react";
import TextOutput from "./Output";

export default class Form extends React.Component {
    state = {

        stringA: "",
        stringB: "",
        inputText: 'Hello user. \n\n This text area here is where you input the body of text you would like to parse, you may resize it by draggin the bottom left corner. The "Operative String" is the combination and sequence of characters that you want to look for. Here are some ideas: \n\n "From a literary analysis perspective, this would be extremely helpful in identifying patterns, verb use, tense, etc. For me, I would use this to search "ing" to help me identify potential gerund verbs that dont agree with my tense."\n\nMore queries will be added as well as persistent storage options, input options, and visualizations. Comments or suggestions are welcome.',
        ocurrences: 0,
        wordCount: 0,
        totalSentences: 0,
        words: [],
        list: {
            arr1: [],
            arr2: [],
            matches: [],
            matchCount: 0
        },
    };

    _regExpEscape = (stringInput) => {
        return stringInput.replace(/[-[\]{}()*+!<=:?.\\/\\^$|#\s,]/g, '\\$&');
    };
    _countString = (event) => {
        event.preventDefault();
        let strArr = this.state.inputText.match(new RegExp(this._regExpEscape(this.state.stringA), "ig"));
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences: count })
            console.log(count)
        } else {
            console.log("Yo, its null.")
        };
    };
    _totalSentences = (event) => {
        event.preventDefault();
        let strArrA = this.state.inputText.match(new RegExp('[^.?!]*(?<=[.?!\\s])(?=[\\s.?!])[^.?!]*[.?!]', 'ig'));
        if (strArrA !== null) {
            let count = strArrA.length;
            this.setState({ totalSentences: count })
            console.log(count)
        } else {
            console.log("Yo, its null.")
        };
    };
    _wordsWithString = (event) => {// change the list so it says "the" and a number instead of repeated list entries
        event.preventDefault();
        let strArr = this.state.inputText.match(new RegExp("\\b\\w*" + (this._regExpEscape(this.state.stringA)) + "\\w*\\b", "ig"));
        this.setState({
            list: {
                arr1: strArr,
                arr2: [],
                matches: [],
                matchCount: 0
            },
        })
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences: count });
            console.log(count);
        } else {
            console.log("Yo, its null.")
        };
    };
    _sentencesWithStringA = (event) => {
        event.preventDefault();
        let strArr = this.state.inputText.match(new RegExp('[^.?!]*(?<=[.?!\\s])\\b\\w*' + (this._regExpEscape(this.state.stringA)) + '\\w*\\b(?=[\\s.?!])[^.?!]*[.?!]', 'ig'));
        this.setState({
            list: {
                arr1: strArr,
                arr2: this.state.list.arr2
            }
        })
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences: count });
            console.log(count);
        } else {
            console.log("Yo, its null.")
        };
    };
    _sentencesWithStringB = (event) => {
        event.preventDefault();
        let strArr = this.state.inputText.match(new RegExp('[^.?!]*(?<=[.?!\\s])\\b\\w*' + (this._regExpEscape(this.state.stringB)) + '\\w*\\b(?=[\\s.?!])[^.?!]*[.?!]', 'ig'));
        this.setState({
            list: {
                arr1: this.state.list.arr1,
                arr2: strArr,
            }
        })
        console.log(strArr);
        if (strArr !== null) {
            let count = strArr.length;
            this.setState({ ocurrences: count });
            console.log(count);
        } else {
            console.log("Yo, its null.")
        };
    };

    _coOcurrenceSent = (event) => {
        event.preventDefault();
        let strArrA = this.state.inputText.match(new RegExp('[^.?!]*(?<=[.?!\\s])\\b\\w*' + (this._regExpEscape(this.state.stringA)) + '\\w*\\b(?=[\\s.?!])[^.?!]*[.?!]', 'ig'));
        let strArrB = this.state.inputText.match(new RegExp('[^.?!]*(?<=[.?!\\s])\\b\\w*' + (this._regExpEscape(this.state.stringB)) + '\\w*\\b(?=[\\s.?!])[^.?!]*[.?!]', 'ig'));
        let matches = [];
        for (let i = 0; i < strArrA.length; i++) {
            for (let j = 0; j < strArrB.length; j++) {
                if (strArrA[i] === strArrB[j]) {
                    matches.push(strArrA[i]);
                }
            }
        };
        this.setState({
            list: {
                arr1: strArrA,
                arr2: strArrB,
                matches: matches,
                matchCount: (function (matches) { return matches.length })
            }
        })

    };
    _coOcurrenceWord = (event) => {
        event.preventDefault();
        let strArrA = this.state.inputText.match(new RegExp("\\b\\w*" + (this._regExpEscape(this.state.stringA)) + "\\w*\\b", "ig"));
        let strArrB = this.state.inputText.match(new RegExp("\\b\\w*" + (this._regExpEscape(this.state.stringB)) + "\\w*\\b", "ig"));
        let matches = [];
        for (let i = 0; i < strArrA.length; i++) {
            for (let j = 0; j < strArrB.length; j++) {
                if (strArrA[i] === strArrB[j]) {
                    matches.push(strArrA[i]);
                }
            }
        };
        this.setState({
            list: {
                arr1: strArrA,
                arr2: strArrB,
                matches: matches,
                matchCount: (function (matches) { return matches.length })
            }
        })
    };
    _clear = (event) => {
        event.preventDefault();
        this.setState({
            stringA: "",
            stringB: "",
            inputText: this.state.inputText,
            ocurrences: 0,
            wordCount: 0,
            totalSentences: 0,
            words: [],
            list: {
                arr1: [],
                arr2: [],
                matches: [],
                matchCount: 0
            }
        })
    };
    _clearAll = (event) => {
        event.preventDefault();
        this.setState({
            stringA: "",
            stringB: "",
            inputText: "",
            ocurrences: 0,
            wordCount: 0,
            totalSentences: 0,
            words: [],
            list: {
                arr1: [],
                arr2: [],
                matches: [],
                matchCount: 0
            }
        })
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
                        <label htmlFor="msiA" className="string-input-label">Operative String A:</label>
                        <input type="text" name="msiA" className="string-input"
                            placeholder="enter a sequence of characters here, letters or numbers. This might be a word, a phrase, an amount, etc..."
                            value={this.state.stringA}
                            onChange={e => this.setState({ stringA: e.target.value })}
                        />
                        <label htmlFor="msiB" className="string-input-label">Operative String B:</label>
                        <input type="text" name="msiB" className="string-input"
                            placeholder="enter a sequence of characters here, letters or numbers. This might be a word, a phrase, an amount, etc..."
                            value={this.state.stringB}
                            onChange={e => this.setState({ stringB: e.target.value })}
                        />
                    </div>
                    <div id="b">
                        <h5>Methods:</h5>
                        <button name="count" onClick={this._countString}>Count the occurences of your string within the text.</button>
                        <button name="tsentences" onClick={this._totalSentences}>Count total sentences without regard to Operative String.</button>
                        <button name="words" onClick={this._wordsWithString}>Return all words or other character groups your String A is in to List A.</button>
                        <button name="sentencesA" onClick={this._sentencesWithStringA}>This will return all the sentences that your String A occurs in to List A.</button>
                        <button name="sentencesB" onClick={this._sentencesWithStringB}>This will return all the sentences that your String B occurs in to List B.</button>
                        <button name="cosentences" onClick={this._coOcurrenceSent}>Return <b>sentences</b> that contain both strings to List C.</button>
                        <button name="coword" onClick={this._coOcurrenceWord}>Return <b>words</b> that contain both strings to List C.</button>
                        <button name="clear" onClick={this._clear}>Clear Lists, leave text.</button>
                        <button name="clear" onClick={this._clearAll}>Clear all.</button>
                    </div>

                </form>
                <div id="c">
                    <TextOutput {...this.state} />
                </div>

            </div>
        );
    }
}