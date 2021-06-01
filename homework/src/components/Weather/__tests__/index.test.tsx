import React from 'react';
import renderer from "react-test-renderer";
import Weather from '../Weather';
import ReactDOM from 'react-dom';

describe('Weather Component', () => {
    it('the snapshot', () => {
        const tree = renderer.create(<Weather />).toJSON();
        expect(tree).toMatchSnapshot()
    });

    test("Test Header", () => {
        const root = document.createElement("div");
        ReactDOM.render
        (
            <Weather />,
            root
        );
        expect(
            root.querySelector("#head")?.textContent
        ).toBe('Weather App')
    })
})




