This is the fourth project in the Odin Project fullstack JavaScript course.

The task is to build a small app that resembles a library. Users should be able to add a book to the library, remove a book from the library and update whether they have read each book yet. There is also the option of adding data storage, whether via Web Storage API or local storage.

Ramblings as I work on the project:

1. I'd like to try building this project with more structure than the past projects. I'll do this by extracting an initial set of requirements and adding more complexity as I progress. I would like to do this because although I was able to complete the previous projects, I feel like they took more time than necessary because my focus kept shifting as a result of a lack of direction. I think creating and following a requirements doc will also allow me to practice scoping and chunking work in a more manageable way.

2. I'm up to V5 of the app and progress feels a lot smoother but I'm not sure if I'm doing it correctly. I'll write down the requirements, try implementing said requirements and then find that I need to update them. I'm not sure whether I'm supposed to map out how the functionality should play out before listing the requirements. Is it ok to have incorrect requirements in previous versions and rectify them as it makes more sense later on? For example I currently have:

[] The toggle read status function should take an ID parameter which determines which book's read status to toggle.

When I think ahead for a bit, I have a feeling that taking an ID parameter is incorrect and that it'd be more like the `event` object. So should I update this requirement now? Or build the app out, realise it's wrong and only then update the next version's requirements? For now I'm going to go with the latter as it seems like less of a hindrance to progress and more in the spirit of 'chunking' and making development more manageable.

EDIT: On second thoughts, this requirement is also part of the same version:

[] Each toggle read status button should only toggle the read status of its respective book.

In order to make this second requirement work, the other requirement needs to be updated, from:

[] The toggle read status function should take an ID parameter which determines which book's read status to toggle.
to:
[] The toggle read status function should take the `event` object.

So maybe incorrect requirements should simply be updated/rectified as soon as I realise as opposed to needing to look ahead?

3. Another question I have is where do I draw the line with requirements? From V5, the following seem a bit too granular:

[] Each sample book should have a unique ID.
[] Each sample book's toggle button should store the book's unique ID.
[] The toggle read status function should take the `event` object.

Really, the purpose of these three requirements is to support this requirement:

[] Each toggle read status button should only toggle the read status of its respective book.

Where should the line be drawn? Is this what programmers mean when they say 'don't be in solution mode'? It almost seems like the latter requirement is the 'real requirement' and the prior three speak to the actual implementation of the requirement which maybe doesn't belong on the requirements doc?

4. If I find that previous requirements are incorrect and I need to change code, is the requirements doc a requirements doc or a changelog? Or both? For example I just realised as I'm writing V6 that `displayBooks` and `renderPage` could be combined. Argh, definitely need to research this further.

5. 