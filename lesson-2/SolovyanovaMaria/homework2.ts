import { fromEvent, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';


const input: HTMLElement = document.getElementById('search') as HTMLElement;
const getEvent$: Observable<KeyboardEvent> = fromEvent(input, 'keypress') as Observable<KeyboardEvent>;

const sendRequestToGit$ = getEvent$.pipe(
    filter((event: KeyboardEvent) => event.code === 'Enter')
);

sendRequestToGit$.subscribe(filteredEvent => console.log(filteredEvent));

const getRepos = () => {
    return fetch('https://api.github.com/repositories')
        .then(res => console.log(res),
              err => console.error(err));
};

sendRequestToGit$.subscribe((event: KeyboardEvent) => {
    console.log(event);
    getRepos();
});