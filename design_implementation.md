### Design

The whole demo quiz application is divided into components. Each component holds it's own styling and template along with the logic which is written in [Typescript](https://www.typescriptlang.org/).

This application is built with [Angular 4.0.0](https://angular.io).

In the application `Models` represent the basic types in this application for eg. `Question` & `Choice`.

`AppComponent` holds the basic skeleton of the project.

`ChoiceComponent` and `QuestionComponent` contain the HTML, CSS & Typescript for `Choice` & `Question` components respectively.

Data is taken from `dummy-data.ts` file which is present in `JSON` format.

### Implementation

Application gets initialised in the application component which passes data to the `QuestionComponent` which is primarily a question object.

`QuestionComponent` gets rendered inside the `CarouselComponent` which is a part of the [ngx-bootstrap](http://valor-software.com/ngx-bootstrap/) library.

The Typescript code gets transpilled to Javascript code using webpack. The minified version is hosted on firebase [here](https://buzzquiz-1e3be.firebaseapp.com/).

For styling I have used SASS.

### Accessibility

I have assigned `alt` attribute in the image tags across the templates. Screenreaders pick these really well helping differently abled people.


### Future scope

* Support for arrow key navigation.
* Support for alpha key choice selection.

