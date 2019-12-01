import React from "react";


export default function TextOutput(props) {
    return (
        <div>
            <p>Ocurrences: {props.ocurrences} </p>
            <ol name="word-list"id="word-list">
                {props.words ? props.words.map((item, i) =>
                React.createElement("li", { key: i }, props.words[i])) : "No list to show"}
            </ol>
            <ol name="sentence-list" id="sentence-list">
                {props.sentences ? props.sentences.map((item, i) => 
                React.createElement("li", { key: i }, props.sentences[i])) : "No list to show"}
            </ol>
        </div>

    )

}
