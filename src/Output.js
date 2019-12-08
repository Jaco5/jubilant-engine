import React from "react";


export default function TextOutput(props) {
    return (
        <div>
            <ul>Counts:
    <li>Total character groups: {props.wordCount}</li>
                <li>Total Sentences: {props.totalSentences}</li>
                <li>Ocurrences: {props.ocurrences} </li>
            </ul>Words list:
            <ol name="word-list"id="word-list">
                {props.words ? props.words.map((item, i) =>
                React.createElement("li", { key: i }, props.words[i])) : "No list to show"}
            </ol>Sentences list:
            <ol name="sentence-list" id="sentence-list">
                {props.sentences ? props.sentences.map((item, i) => 
                React.createElement("li", { key: i }, props.sentences[i])) : "No list to show"}
            </ol>
        </div>

    )

}
