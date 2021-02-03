import React from 'react'

const SearchForm = ({
        facilities, 
        discoveryMethods, 
        hosts, 
        methodInputRef, 
        facilityInputRef,         
        hostInputRef,         
        clearAction,         
        searchAction}) => {
    
    return (
        
        <div className="row section">
            <div className="col-lg-12">
                <div className="bs-component">
                    <form>
                        <fieldset>
                            <legend>Query</legend>
                            <div className="form-group row">
                                
                                <div className="form-group col">
                                    <label>Discovery method</label>
                                    <select 
                                        name="discMethod"
                                        className="form-control" 
                                        ref={methodInputRef}>   
                                        <option value=""></option>
                                        {discoveryMethods.map(option =>{
                                            return <option key={option._id} value={option.name}>{option.name}</option>;
                                        })}
                                    </select>
                                </div>

                                <div className="form-group col">
                                    <label>Host name</label>
                                    <select 
                                        name="discMethod"
                                        className="form-control" 
                                        ref={hostInputRef}>   
                                        <option value=""></option>
                                        {hosts.map(option =>{
                                            return <option key={option._id} value={option.name}>{option.name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <label>Discovery facility</label>
                                    <select 
                                        name="facility"
                                        className="form-control"
                                        ref={facilityInputRef}>   
                                        <option value=""></option>                                     
                                        {facilities.map(option =>{
                                            return <option key={option._id} value={option.name}>{option.name}</option>;
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <button type="button" className="btn btn-outline-success" onClick={searchAction}>Search</button>
                                </div>
                                <div className="col-md-1">
                                    <button type="button" className="btn btn-outline-primary" onClick={clearAction}>Clear</button>
                                </div>
                                
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>            
        </div>
    )
}

export default SearchForm