import React, { Fragment } from 'react';

// Don't touch this import
import { fetchQueryResultsFromTermAndValue } from '../api';



/**
 * We need a new component called Searchable which:(searachable helper function or new component altogther?)
 * 
 * Has a template like this:
 * 
 * <span className="content">
 *  <a href="#" onClick={async (event) => {}}>SOME SEARCH TERM</a>
 * </span>
 *
 * You'll need to read searchTerm, searchValue, setIsLoading, and setSearchResults off of the props.
 * 
 * When someone clicks the anchor tag, you should:
 * 
 * - preventDefault on the event
 * - call setIsLoading, set it to true
 * 
 * Then start a try/catch/finally block:
 * 
 * try:
 *  - await the result of fetchQueryResultsFromTermAndValue, passing in searchTerm and searchValue
 *  - send the result to setSearchResults (which will update the Preview component)
 * catch: 
 *  - console.error the error
 * finally:
 *  - call setIsLoading, set it to false (still not sure how to set this to false, I think i did it right in the search section but doublecheck)
 */

const Searchable = (props) => {
    const {searchTerm, searchValue, setIsLoading, setSearchResults}= props; 
    return (<span className="content">
        <a href="#" onClick={async (event) => {
            event.preventDefault();
            setIsLoading(true);
            try{
                const response = await fetchQueryResultsFromTermAndValue(searchTerm, searchValue);
                const data = await response.json();
                setSearchResults(data); 
            } catch(error){
                console.log(error);
            }
            setIsLoading(false)
        }}>{searchTerm}</a>
        </span>
    )
  
}

/**
 * We need a new component called Feature which looks like this when no featuredResult is passed in as a prop:
 * 
 * <main id="feature"></main>
 * 
 * And like this when one is:
 * 
 * <main id="feature">
 *   <div className="object-feature"> (I'm pretty sure we are replacing these values with props that we pass in but im not sure)
 *     <header>
 *       <h3>OBJECT TITLE</h3>
 *       <h4>WHEN IT IS DATED</h4>
 *     </header>
 *     <section className="facts">
 *       <span className="title">FACT NAME</span>
 *       <span className="content">FACT VALUE</span>
 *       <span className="title">NEXT FACT NAME</span>
 *       <span className="content">NEXT FACT VALUE</span>
 *     </section>
 *     <section className="photos">
 *       <img src=IMAGE_URL alt=SOMETHING_WORTHWHILE />
 *     </section>
 *   </div>
 * </main>
 * 
 * The different facts look like this: title, dated, images, primaryimageurl, description, culture, style, 
 * technique, medium, dimensions, people, department, division, contact, creditline
 * 
 * The <Searchable /> ones are: culture, technique, medium (first toLowerCase it), and person.displayname (one for each PEOPLE)
 * 
 * NOTE: people and images are likely to be arrays, and will need to be mapped over if they exist
 * 
 * This component should be exported as default.
 */
const Feature = (props) => {
    return(

 props ? <main id="feature">
    <div className="object-feature"> 
      <header>
        {/* <h3>{props.title}</h3>
        <h4>{props.dated}</h4> */}
      </header>
      <section className="facts">
        {/* <span className="title">{props.facts.title}</span>
        <span className="content">{props.facts.value}</span>
        <span className="title">{props.next.title}{// wtf?}</span> */}
        <span className="content">NEXT FACT VALUE</span>
      </section>
      <section className="photos">
        {/* <img src={props.imgURL} alt={props.SOMETHING_WORTHWHILE} /> */}
      </section>
    </div>
  </main> : <main id="feature"></main>) 
}

export default Feature;