import { Entry } from './entry.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$("#formOne").submit(function(event){
  event.preventDefault();
  const title = $("#title").val();
  const body = $("#body").val();
  let entry = new Entry(title,body);
  console.log(entry.title + " " + entry.body);
  console.log("total word count: " + entry.wordCount());
  console.log("vowel count: " + entry.getVowels());
  console.log("consonant count: " + entry.getConsonants());
  console.log("first sentence is: "+ entry.getTeaser());
});