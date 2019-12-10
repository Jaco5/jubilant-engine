import React from "react";


export default function TextOutput(props) {
    return (
        <div>
            <ul>Counters:
                <li>Total Words (or Numbers): {props.wordCount}</li>
                <li>Total Sentences: {props.totalSentences}</li>
                <li>Ocurrences: {props.ocurrences} </li>
            </ul>
            {/* <ol name="word-list" className="word-list">Words list:
                {props.words ? props.words.map((item, i) =>
                    React.createElement("li", { key: i }, props.words[i])) : "No list to show"}
            </ol> */}
            <ol name="list-a" className="list-a">List A:
                {props.list.arr1 ? props.list.arr1.map((item, i) =>
                    React.createElement("li", { key: i }, props.list.arr1[i])) : "No list to show"}
            </ol>
            <ol name="list-b" className="list-b">List B:
                {props.list.arr2 ? props.list.arr2.map((item, i) =>
                    React.createElement("li", { key: i }, props.list.arr2[i])) : "No list to show"}
            </ol>
            <ol name="list-c" className="list-c">List C:
                {props.list.matches ? props.list.matches.map((item, i) =>
                    React.createElement("li", { key: i }, props.list.matches[i])) : "No list to show"}
            </ol>
        </div>

    )

}
