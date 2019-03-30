import { fromEvent, Observable } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';

const input: HTMLInputElement = document.getElementById('search') as HTMLInputElement;
const getEvent$: Observable<KeyboardEvent> = fromEvent(input, 'keypress') as Observable<KeyboardEvent>;
const ul: HTMLUListElement = document.getElementById('searchResult') as HTMLUListElement;
const label: HTMLLabelElement = document.getElementById('resultCount') as HTMLLabelElement;

interface IGitResponseInfo {
    incomplete_results: boolean;
    items: [];
    total_count: number;
}

interface IGitResponse {
    name: string;
    git_url: string;
}

const renderResponse = (response: IGitResponseInfo) => {
    const {incomplete_results, items, total_count} = response;
    if (!incomplete_results) {
        label.textContent = `Всего результатов: ${total_count}`;
        items.map((currentElement: IGitResponse) => {
            const liElement: HTMLLIElement = document.createElement('li');
            const href: HTMLAnchorElement = document.createElement('a');
            href.setAttribute('href', currentElement.git_url);
            href.text = currentElement.name;
            liElement.append(href);
            ul.append(liElement);
        });
    }
};

const getRepos = () => {
    return fetch(`https://api.github.com/search/repositories?q=${(input.value).replace(' ', '+')}+in:name`)
        .then(res => res.json(),
            err => console.error(err));
};

const sendRequestToGit$ = getEvent$.pipe(
    filter((event: KeyboardEvent) => event.code === 'Enter'),
    mergeMap(_keypress => getRepos())
);

sendRequestToGit$.subscribe(result => renderResponse(result));
