const SearchWeather = ({ setCity, getData }: any) => {
    return (
        <div className='col-12'>
            <div className="input-group d-flex justify-content-center mt-4" >
                <div className="form-outline d-flex">
                    <label className='col'>Search</label>
                    <input
                        name="searchInput"
                        required
                        onChange={(e) => setCity(e.target.value)}
                        type="search" id="form1" className="form-control" placeholder="Search"
                    />
                </div>
                <button
                    test-id = 'searchBtn'
                    onClick={() => getData()}
                    type="button" className=" btn btn-primary">Search
                </button>
            </div>
        </div>
    )
}
export default SearchWeather;