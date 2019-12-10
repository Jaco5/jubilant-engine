import React from "react";


export default function TextOutput(props) {
    return (
        <div>
            <ul>Counts:
                <li>Total character groups: {props.wordCount}</li>
                <li>Total Sentences: {props.totalSentences}</li>
                <li>Ocurrences: {props.ocurrences} </li>
            </ul>
            {/* <ol name="word-list" className="word-list">Words list:
                {props.words ? props.words.map((item, i) =>
                    React.createElement("li", { key: i }, props.words[i])) : "No list to show"}
            </ol> */}
            <ol name="sentence-list-a" className="sla">list A:
                {props.list.arr1 ? props.list.arr1.map((item, i) =>
                    React.createElement("li", { key: i }, props.list.arr1[i])) : "No list to show"}
            </ol>
            <ol name="sentence-list-b" className="slb">list B:
                {props.list.arr2 ? props.list.arr2.map((item, i) =>
                    React.createElement("li", { key: i }, props.list.arr2[i])) : "No list to show"}
            </ol>
            <ol name="sentence-list-c" className="slc">Matches list:
                {props.list.matches ? props.list.matches.map((item, i) =>
                    React.createElement("li", { key: i }, props.list.matches[i])) : "No list to show"}
            </ol>
        </div>

    )

}
