/**
 * This is the Root index.js File
 * 
 * The index.js file is used to re-export from our separate files, that way rather than write:
 * 
 * import Feature from './components/Feature';
 * 
 * we can write:
 * 
 * import { Feature } from './components';
 * 
 * since index.js is assumed as part of the import when you specify a folder
 * 
 * Re-export Feature, Loading, Preview, Search, and Title from their respective files
 */
import Feature  from './Feature.js';
import Loading from './Loading.js'; 
import Preview  from './Preview.js'; 
import Search from './Search.js';
import Title  from './Title.js'; 

export { default as Feature } from './Feature';    
export { default as Loading } from './Loading.js'; 
export { default as Preview } from './Preview'; 
export { default as Search } from './Search'; 
export { default as Title } from './Title.js'; 