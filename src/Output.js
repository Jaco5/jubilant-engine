import React from "react";


export default function TextOutput(props) {
    return (
        <div>
            <ul>Counts:
                <li>Total character groups: {props.wordCount}</li>
                <li>Total Sentences: {props.totalSentences}</li>
                <li>Ocurrences: {props.ocurrences} </li>
            </ul>
            <ol name="word-list" className="word-list">Words list:
                {props.words ? props.words.map((item, i) =>
                    React.createElement("li", { key: i }, props.words[i])) : "No list to show"}
            </ol>
            <ol name="sentence-list-a" className="sla">Sentences list A:
                {props.sentences.arr1 ? props.sentences.arr1.map((item, i) =>
                    React.createElement("li", { key: i }, props.sentences.arr1[i])) : "No list to show"}
            </ol>
            <ol name="sentence-list-b" className="slb">Sentences list B:
                {props.sentences.arr2 ? props.sentences.arr2.map((item, i) =>
                    React.createElement("li", { key: i }, props.sentences.arr2[i])) : "No list to show"}
            </ol>
            <ol name="sentence-list-c" className="slc">Sentence matches list:
                {props.sentences.matches ? props.sentences.matches.map((item, i) =>
                    React.createElement("li", { key: i }, props.sentences.matches[i])) : "No list to show"}
            </ol>
        </div>

    )

}
