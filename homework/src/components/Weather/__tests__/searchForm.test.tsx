import renderer from "react-test-renderer";
import SearchWeather from '../SearchWeather';
import ReactDOM from 'react-dom';
 
import { cleanup ,fireEvent, render } from "@testing-library/react";
 

describe("Search Weather Component", () => {
    it('the snapshot', () => {
        const tree = renderer.create(<SearchWeather />).toJSON();
        expect(tree).toMatchSnapshot()
    });

    it("renders correctly initial dom",()=>{
        const input = document.querySelectorAll("input");
        expect(input).toHaveLength(0);
    })
})

