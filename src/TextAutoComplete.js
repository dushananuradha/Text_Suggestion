import React, {useState, useEffect} from 'react'

function TextAutoComplete({func_list}) {
    const [searchtext, setSearchtext] = useState("");
    const [suggestText, setSuggestText] = useState([]);
    const [restText, setResText] = useState(true);
    const textChange = (e) => {
        let searchValue = e.target.value;
        let suggestedText = [];
        if (searchValue.length > 0) {
            suggestedText = func_list.sort().filter((e) => e.toLowerCase().includes(searchValue.toLowerCase()));
            //setResText(suggestedText.length !== 0 ? true : false);
        }
        setSearchtext(searchValue);
        setSuggestText(suggestedText);
    }

   /*  useEffect(()=>{
        textChange()
    },[searchtext]) */

    const suggestedText = (value) => {
        console.log(value);
        setSearchtext(value);
        setSuggestText([]);
      };
         
      const getSuggestions = () => {
        if (suggestText.length === 0 && searchtext !== "" && !restText) {
          return <p>Search Text Not Found</p>;
        }
    
        return (
          <ul>
            {suggestText.map((item, index) => {
              return (
                <div key={index} className="suggested_texts">
                  <ul onClick={()=>suggestedText(item)}>{item} </ul>   
                </div>
              );
            })}
          </ul>
        );
      };
    return (
        <div>
            <input type="text" className="input_text" placeholder="Enter text here"
            value={searchtext} onChange={textChange}/>
            {getSuggestions()}
        </div>
    );
}

export default TextAutoComplete;