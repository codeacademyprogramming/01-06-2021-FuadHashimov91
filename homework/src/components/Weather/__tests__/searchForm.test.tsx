import renderer from "react-test-renderer";
import SearchWeather from '../SearchWeather';
import ReactDOM from 'react-dom';
import { fireEvent, getQueriesForElement } from '@testing-library/dom';

// const render = (component:any) => {
//     const root = document.createElement('div');
//     ReactDOM.render(component, root);
//     return getQueriesForElement(root);
// }

describe("Search Weather Component", () => {
    it('the snapshot', () => {
        const tree = renderer.create(<SearchWeather />).toJSON();
        expect(tree).toMatchSnapshot()
    });

    // test("renders the correct content", () => {
    //     // const { getByText, getByLabelText } = render(<SearchWeather/>);
    
    //     // const input = getByLabelText("Search");
    //     // fireEvent.change(input,{target :{ value : "Istanbul"}})
    //     // fireEvent.click(getByText('Search'));


    // });

})
    

it("renders correctly initial dom",()=>{
    const input = document.querySelectorAll("input");
    expect(input).toHaveLength(1);
})
