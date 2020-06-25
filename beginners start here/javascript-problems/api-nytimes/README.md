# NYTimes API

\#RESTful API

This API allows you to retrieve New York Times news story information and display it on your site.

## Keynotes

* Assembling the _full_ URL

Begin by assembling the parts deemed as mandatory:

- The base URL (taken from the `baseURL` variable).
- The API key, which has to be specified in the `api-key` URL parameter (the value is taken from the `key` variable).
- The page number, which has to be specified in the `page` URL parameter (the value is taken from teh `pageNumber` variable).
- The search term which ahs to be specified in the `q` URL parameter (the value is taken from the value of the `searchTerm` text `<input>`).
- The document type to return results for, as specified in an expression passed in via the `fq` URL parameter. In this case, we want to return articles.

e.g.

        https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats
        &fq=document_type:("article")&begin_date=20170301&end_date=20170312

* Form Data Validation

e.g.
        <p>
          <label for="start-date">Enter a start date (format YYYYMMDD): </label>
          <input type="date" id="start-date" class="start-date" pattern="[0-9]{8}">
        </p>
        <p>
          <label for="end-date">Enter an end date (format YYYYMMDD): </label>
          <input type="date" id="end-date" class="end-date" pattern="[0-9]{8}">
        </p>

The example has rudimentary form data validation. The search term field has to be filled in before the form can be submitted (achieved using the `required` attribute), and the date fields have `pattern` attributes specified, which means they won't submit unless their values consist of 8 numbers (`pattern="[0-9]{8}"`)

**Using built-in form validation**

\#Validation attribute #pattern

`pattern`: Specifies a *regular expression* that defines a pattern the entered data needs to follow.

## Credits

- [NYTimes (RESTful) API Documentation](https://developer.nytiNYTimes (RESTful) API Documentationmes.com/)
