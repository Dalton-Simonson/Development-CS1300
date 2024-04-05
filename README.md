# Implementation Decisions
 
All the books are displayed in a card format that is represented by the BookItem component. They are stored in a list which is iterated over by .map() in the main App() function.
Within the BookItem component I choose wether or not to return null or the expected book card based on some fields I added to the book-data.json file. I added fields show_language
and show_genre which are true by default and are altered based on the user's desired filters. For example if one of these fields are set to false, in BookItem null will be returned rather than the expected book card. For example if the user selects the fantasy filter, all non-fantasy books will have their show_language field set to false. As the user selects
more genres (or languages) their respective fields are updated and their BookItem is displayed. When the clear selection button is pressed for either language or genre it sets the 
show_language and show_genre fields true for each item in book-data.json.